// import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect , useState } from "react";
import axios from 'axios';

function Home() {

    const [memesArray, setMemesArray] = useState([]);

    const getAllMemes = () => {

        // using axios
        // const serverURL = `http://localhost:3003/allMemes`;
        // axios.get(serverURL).then((data)=>{
        //     console.log(data);
        // })

        // using fetch
        const serverURL = `http://localhost:3003/allMemes`;
        fetch(serverURL).then((data) => {
            data.json().then(response => {
                setMemesArray(response)
                console.log(memesArray)
            })
        })
    }

    useEffect(()=>{
        getAllMemes();
    },[])
    
    const addToFav = (item) =>{
        const serverURL = `http://localhost:3003/addToFav`;
        axios.post(serverURL , item)
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={getAllMemes}>send request to get data</button>
            {memesArray.map((item) => {
                return <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <p>{item.toptext}</p>
                            <p>{item.tags}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{addToFav(item)}}>Add to Favorite</Button>
                    </Card.Body>
                </Card>
            })}
        </>
    )
}

export default Home;