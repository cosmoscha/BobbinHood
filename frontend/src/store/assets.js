import { fetch } from "./csrf.js";

const SET_ASSETS = "assets/SET_ASSETS";
const SET_ONE_ASSET = "assets/SET_ONE_ASSET";
const ADD_AN_ASSET = "assets/ADD_AN_ASSET";
//action creator between the action and the reducer
const setAssets = (assets) => ({
  type: SET_ASSETS,
  assets: assets,
});
const setOneAsset = (asset) => ({
  type: SET_ONE_ASSET,
  asset: asset,
});
const addAsset = (addedAsset) => ({
  type: ADD_AN_ASSET,
  addedAsset,
});

//actions aka middleware

export const postAnAsset = (userId, assetId) => async (dispatch) => {
  console.log("this post action has started");
  console.log("this is the userId", userId);
  console.log("this is the assetId", assetId);
  console.log("this is the assetId.Id", assetId.assetId);
  const response = await fetch(`/api/portfolio/${assetId.assetId}`, {
    method: "POST",
    body: JSON.stringify({ userId, assetId }),
  });
  console.log("this is the response", response.data.addedAsset);
  console.log("this is the assetId", assetId);
  dispatch(addAsset(response.data.addedAsset));
};

export const fetchAllAssets = () => {
  return async (dispatch) => {
    const res = await fetch("/api/assets");
    dispatch(setAssets(res.data.assets));
  };
};
export const fetchOneAsset = (id) => {
  return async (dispatch) => {
    const res = await fetch(`/api/asset/${id}`);
    dispatch(setOneAsset(res.data)); //payload
  };
};

const initialState = [];
//reducers, aka the logic
function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ASSETS:
      newState = action.assets;
      return newState;
    case SET_ONE_ASSET:
      newState = [action.asset]; //make the value of the redux state =1
      return newState;
    case ADD_AN_ASSET: {
      console.log("action.payload", action.addAsset);
      newState = [...state, action.addedAsset];
      console.log("this is the newState", newState);
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
