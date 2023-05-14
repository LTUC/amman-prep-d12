import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MemeModal from './MemeModal'
import {useState} from 'react';

function MemeList(props) {

    const [showFlag,setShowFlag] = useState(false);
    const [clickedMeme , setClickedMeme] = useState({});
 
    const handleShow = (item) =>{
        setShowFlag(true);
        setClickedMeme(item)
    }

    const handleClose = () =>{
        setShowFlag(false);
    }
    return (
        <>
            {props.favArr.map((item) => {
                return <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.image_path} />
                    <Card.Body>
                        <Card.Title>{item.meme_name}</Card.Title>
                        <Card.Text>
                            <p>{item.toptext}</p>
                            <p>{item.tags}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={() => {handleShow(item)}}>See more</Button>
                    </Card.Body>
                </Card>
            })}

            <MemeModal showFlag={showFlag} handleClose={handleClose} clickedMeme={clickedMeme}/>
        </>
    )
}

export default MemeList;