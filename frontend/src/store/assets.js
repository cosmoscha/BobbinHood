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
export const fetchOneAsset = (id) =>{
    return async (dispatch) => {
        const res = await fetch(`/api/asset/${id}`)
        dispatch(
            setOneAsset(res.data)
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
    case SET_ONE_ASSET:
        newState = [action.asset] //make the value of the redux state =1
      return newState;
     default:
      return state;

  }
}

export default reducer;
