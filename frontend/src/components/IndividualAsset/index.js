import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchOneAsset} from "../../store/assets";



const AssetInformation= () => {
    const dispatch = useDispatch();
    const AssetInfo = useSelector((state)=> state.asset)

    useEffect(async() => {
        dispatch(fetchOneAsset())
    },[])
    return (
        <>
        <h1>page for information on each specific asset</h1>
        <div>this is where the name of the asset goes
        </div>
        <div>name
        <div>{AssetInfo.name}</div>
        </div>
        <div>price
        <div>{AssetInfo.price}</div>
        </div>
        <div>marketcap
        <div>{AssetInfo.marketCap}</div>
        </div>
        <div>rating
        <div>{AssetInfo.rating}</div>
        </div>
        <button>add to portfolio</button>
        </>
    )
}

export default AssetInformation;
