import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Child(props) {

    // states
    const [takenTuna,setTakenTuna] = useState(0)

    let incrementTakenTuna = () =>{
        setTakenTuna(takenTuna + 1);
        props.decrementFun(false)
    }

    return (
        <>
        {/* <p>My name is {props.name} and my age is {props.age}</p> */}

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                       <p>My name is {props.name} and my age is {props.age}</p>
                       <p>Number of taken tuna is: {takenTuna}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={incrementTakenTuna}>Please give me a tuna</Button>
                </Card.Body>
            </Card>
        </>
    )
}
  
export default Child;