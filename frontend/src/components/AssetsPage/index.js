import React, { useState } from 'react';
import AssetsPage from './AssetsPage'


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
        <AssetsPage />
        </>
    )
}
