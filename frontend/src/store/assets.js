import { fetch } from './csrf.js';

const SET_ASSETS = 'assets/setAssets'
const SET_ONE_ASSET = 'assets/setOneAsset'

const setAssets = (assets) => ({
    type: SET_ASSETS,
    assets: assets,
});
const setOneAsset = (asset) => ({
    type: SET_ONE_ASSET,
    asset: asset,
});

//thunks

export const fetchAllAssets = () =>{
    return async (dispatch) => {
        const res = await fetch("/api/assets")
        dispatch(
            setAssets(res.data.assets)
        );
    }
}
export const fetchOneAsset = () =>{
    return async (dispatch) => {
        const res = await fetch(`/api/asset`)
        dispatch(
            setOneAsset(res.data.asset)
        );
    }
}


const initialState =  [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ASSETS:
      newState = action.assets
      return newState;
    default:
      return state;
  }
}

export default reducer;
