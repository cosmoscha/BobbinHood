import { fetch } from './csrf.js';

const SET_ASSETS = 'assets/setAssets'

const setAssets = (assets) => ({
    type: SET_ASSETS,
    assets: assets,
});

//thunks

export const fetchAllSpots = () =>{
    return async (dispatch) => {
        const res = await fetch("/api/assets")
        dispatch(
            setAssets(res.data.assets)
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
