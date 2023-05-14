import axios from 'axios';
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {

    const [memesData, setMemesData] = useState([])

    const getAllMemes = () => {
        const serverURL = `http://localhost:3003/allMemes`;

        // using axios
        // axios.get(serverURL)
        // .then(response=>{
        //     console.log(response.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })

        // using fetch
        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMemesData(data)

                })
            })
    }

    useEffect(()=>{
        getAllMemes()
    },[])

    const addToFav = (item) =>{
        const serverURL = `http://localhost:3003/addToFav`;
        axios.post(serverURL , item )
        .then(response=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        // console.log(item)
    }

    return (
        <>
            {/* <button onClick={getAllMemes}>Send a req</button> */}
            <h1>Home</h1>
            {memesData.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.ID}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                               <p>{item.bottomText}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{addToFav(item)}}>Add to Favorite</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}

export default Home;