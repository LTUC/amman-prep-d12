import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';

function ProductsCategories() {

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    const getCategories = () => {
        const serverURL = `http://localhost:3002/getAllCategories`;
        axios.get(serverURL)
            .then(response => {
                console.log(response.data)
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {
        getCategories()
    }, [])
    return (
        <>
            <h2>Products Categories</h2>
            {/* {your condition ? <></> : <></> } */}
            {selectedCategory ? <Products selectedCategory={selectedCategory}/> 
            :
            
            <>
            <Row xs={1} md={4} className="g-4">
                {categories.map(item => {
                    return (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Button onClick={()=>{setSelectedCategory(item)}}>{item}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            </>
            }

            

            
        </>
    )
}

export default ProductsCategories;