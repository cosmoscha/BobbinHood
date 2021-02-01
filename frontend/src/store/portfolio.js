import { fetch } from "./csrf.js";

const DELETE_AN_ASSET = "portfolio/DELETE_AN_ASSET";
const SET_ONE_PORTFOLIO = "portfolio/SET_ONE_PORTFOLIO";
const SET_PORTFOLIO_ASSETS = "portfolio/SET_PORTFOLIO_ASSETS";
const destroyAsset = (destroyedAsset) => ({
  type: DELETE_AN_ASSET,
  destroyedAsset,
});

const fetchOnePortfolio = (fetchedPortfolio) => ({
  type: SET_ONE_PORTFOLIO,
  fetchedPortfolio,
});

const fetchPAssets = (payload) => ({
  type: SET_PORTFOLIO_ASSETS,
  payload,
});

export const deleteAnAsset = (assetToBeDeleted) => async (dispatch) => {
  console.log("starting to delete asset");
  const response = await fetch(`/api/portfolio/delete/${assetToBeDeleted}`, {
    method: "POST",
    body: JSON.stringify({ assetToBeDeleted }),
  });

  if (response.ok) {
    const deletedAsset = await response.json();
    console.log(deletedAsset);
    console.log("this is the response of felete", response);
    dispatch(destroyAsset(deletedAsset));
  }
};

export const fetchPortfolio = (portfolioId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/portfolio/${portfolioId}`);
    console.log("this is res.data", res.data.portfolio);
    dispatch(fetchOnePortfolio(res.data.portfolio));
  };
};
export const fetchPortfolioAssets = (portfolioId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/portfolio/${portfolioId}`);
    console.log("this is res.data", res.data.portfolio.Assets);
    dispatch(fetchPAssets(res.data.portfolio.Assets));
  };
};

const initialState = [];

function portfolioReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case DELETE_AN_ASSET: {
      const newState = { ...state };
      delete newState[action.destroyAsset];
      return newState;
    }
    case SET_ONE_PORTFOLIO:
      newState = Object.assign({}, state, {
        portfolio: action.fetchedPortfolio,
      });
      console.log("this is the newState", newState);
      return newState;

    case SET_PORTFOLIO_ASSETS:
      newState = Object.assign({}, state, {
        portfolioAssets: action.payload,
      });
      return newState;
    default:
      return state;
  }
}

export default portfolioReducer;
