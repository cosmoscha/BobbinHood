import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function AssetInformation() {
    const dispatch = useDispatch();

    return (
        <>
        <h1>page for information on each specific asset</h1>
        <div>this is where the name of the asset goes</div>
        <div>name</div>
        <div>price</div>
        <div>marketcap</div>
        <div>rating</div>
        <button>add to portfolio</button>
        </>
    )
}

export default AssetInformation;
