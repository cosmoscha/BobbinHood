import { fetch } from "./csrf.js";

const DELETE_AN_ASSET = "portfolio/DELETE_AN_ASSET";
const SET_ONE_PORTFOLIO = "portfolio/SET_ONE_PORTFOLIO";

const destroyAsset = (destroyedAsset) => ({
  type: DELETE_AN_ASSET,
  destroyedAsset,
});

const fetchOnePortfolio = (portfolio) => ({
  type: SET_ONE_PORTFOLIO,
  portfolio,
});

export const deleteAnAsset = (assetToBeDeleted) => async (dispatch) => {
  const response = await fetch(`/api/portfolio`, {
    method: "DELETE",
    body: JSON.stringify(assetToBeDeleted),
  });

  if (response.ok) {
    const deletedAsset = await response.json();
    console.log(deletedAsset);
    dispatch(destroyAsset(assetToBeDeleted));
  }
};

export const fetchPortfolio = (portfolioId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/portfolio/${portfolioId}`);
    console.log("this is res.data", res.data);
    dispatch(fetchOnePortfolio(res.data));
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
    case SET_ONE_PORTFOLIO: {
      newState = [action.portfolio];
      return newState;
    }
    default:
      return state;
  }
}

export default portfolioReducer;
