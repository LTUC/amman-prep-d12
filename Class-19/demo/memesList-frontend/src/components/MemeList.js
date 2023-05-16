import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MemeModal from './MemeModal';
import { useEffect, useState } from 'react';
import UpdatedModal from './UpdatedModal';

function MemeList(props) {
    console.log(props.favArr);
    const [showFlag, setShowFlag] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});
    const [updateFlag, setUpdateFlag] = useState(false);

    const [newArr,setNewArr] = useState([])

    const handleShow = (item) => {
        setShowFlag(true)
        // console.log(item)
        setClickedMeme(item)
    }

    const handleClose = () => {
        setShowFlag(false)
    }


    // Update Modal 
    const showUpdateModal = (item) => {
        setUpdateFlag(true);
        setClickedMeme(item);
        console.log(item);
    }

    const closeUpdateModal = () => {
        setUpdateFlag(false)
    }

    const takeNewDataFromUpdatedModal = (arr)=>{
        setNewArr(arr)
        console.log(newArr)
    }

    useEffect(()=>{
        setNewArr(props.favArr)
    },[props.favArr])


    return (
        <>
            {newArr.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.ID}>
                        <Card.Img variant="top" src={item.image_path} />
                        <Card.Body>
                            <Card.Title>{item.meme_name}</Card.Title>
                            <Card.Text>
                                <p>{item.bottomtext}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={() => { handleShow(item) }}>See more</Button>
                            <Button variant="success" onClick={() => { showUpdateModal(item) }}>Update</Button>

                        </Card.Body>
                    </Card>
                )
            })}

            <MemeModal showFlag={showFlag} handleClose={handleClose} clickedMeme={clickedMeme} />
            <UpdatedModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} clickedMeme={clickedMeme} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}/>
        </>
    )
}

export default MemeList;