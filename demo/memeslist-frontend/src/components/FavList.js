import { useState, useEffect } from 'react';
import MemeList from './MemeList';

function FavList() {

    const [favArr, setFavArray] = useState([]);

    const getFavMemes = () => {

        // using fetch
        const serverURL = `http://localhost:3003/favMemes`;
        fetch(serverURL).then((data) => {
            data.json().then(response => {
                setFavArray(response)
                console.log(response)
            })
        })
    }

    useEffect(() => {
        getFavMemes();
    },[])
    return (
        <>
            {/* <button onClick={getFavMemes}>send request to get data</button> */}

            <h1>FavList</h1>
            <MemeList favArr={favArr} />
        </>
    )
}

export default FavList;