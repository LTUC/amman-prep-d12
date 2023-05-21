import axios from "axios";
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';


function Products(props) {

    const [products, setProducts] = useState([]);
    const [alertStatus, setAlertStatus] = useState("")

    const getProducts = (item) => {
        console.log('item', item)
        const serverURL = `http://localhost:3002/getProducts?category=${item}`;
        axios.get(serverURL)
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const addToFav = (item) => {
        setAlertStatus('')
        const serverURL = `http://localhost:3002/addFavProduct`;
        axios.post(serverURL, item)
            .then(response => {
                console.log(response.data)
                setAlertStatus("success")
            })
            .catch(error => {
                console.log(error)
                setAlertStatus("danger")

            })
    }

    useEffect(() => {
        getProducts(props.selectedCategory)
    }, [])

    return (
        <>
            <h1>Products</h1>
            {alertStatus == "success" ?
                <Alert variant={alertStatus}>
                    The item has been added to favourites!
                    <Button onClick={() => { setAlertStatus('') }}>Close</Button>
                </Alert>
                : alertStatus == "danger" ?
                    <Alert variant={alertStatus}>
                        The item has not been added to favourites!
                        <Button onClick={() => { setAlertStatus('') }}>Close</Button>
                    </Alert>
                    :
                    <></>}



            <Row xs={1} md={3} className="g-4">
                {products.map(item => {
                    return (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.images[0]} height="250px" width="250px" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button onClick={() => { addToFav(item) }}>Add to favourite</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Products;