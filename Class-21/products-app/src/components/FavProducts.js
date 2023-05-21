
import {useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap'
import axios from 'axios'
function FavProducts(){

    const [favArr,setFavArr] = useState([]);

    const getFavProducts= ()=>{
        const serverURL = `http://localhost:3002/getFavProducts`;
        axios.get(serverURL)
            .then(response=>{
                console.log(response.data)
                setFavArr(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    useEffect(()=>{
        getFavProducts()
    },[])

    return(
        <>
        <h3>Favourites Products</h3>
        <Row xs={1} md={3} className="g-4">
                {favArr.map(item => {
                    return (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.images[0]} height="250px" width="250px" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button>See more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default FavProducts;