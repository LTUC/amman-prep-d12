import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


function MemeModal(props) {
    // console.log(props.clickedMeme)
    
    return (
        <>

            <Modal show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedMeme.meme_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!
                    <Image src={props.clickedMeme.image_path}  width='100%'></Image>
                    <p>{props.clickedMeme.tags}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MemeModal;