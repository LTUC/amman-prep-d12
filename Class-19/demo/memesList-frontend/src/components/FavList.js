import {useState , useEffect} from 'react';
import MemeList from './MemeList';
function FavList(){

    const [favArr,setFavArr] = useState([]);

    const getFavMemes = () =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/favMemes`;
        fetch(serverURL)
        .then((response)=>{
            response.json()
            .then(data=>{
                setFavArr(data)
                console.log(data)
            })
        })
    }

    useEffect(()=>{
        getFavMemes()
    },[])
    return(
        <>
        <h1>FavList</h1>
        <MemeList favArr={favArr}/>
        </>
    )
}

export default FavList;