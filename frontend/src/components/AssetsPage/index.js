import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AssetsPage.css';


function Asset() {
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState(false);
    // useEffect(() => {
    //     something
    // }

    return (
        <>
        <div>
            this is the assets page
        </div>
        </>
    )
}
