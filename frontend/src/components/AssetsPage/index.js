import React, { useState } from 'react';
import AssetsPage from './AssetsPage'


function Assets() {
    const [isSelected, setIsSelected] = useState(false);
    // useEffect(() => {
    //     something
    // }

    return (
        <>
        <div>
            this is the assets page
        </div>
        <AssetsPage />
        </>
    )
}
export default Assets
