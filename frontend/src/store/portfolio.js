import { fetch } from './csrf.js';

const DELETE_A_ASSET = 'portfolio/destroyAsset'

const destroyAsset= (asset)=> ({
    type:DELETE_A_ASSET,
    deadAsset: asset
})

export const deleteAnAsset =() => {
    return async (dispatch) => {
        const res = await fetch("/api/assets")
        dispatch(
            setAssets(res.data.assets)
        );
    }
}
