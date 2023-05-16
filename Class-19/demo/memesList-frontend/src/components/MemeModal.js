import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function MemeModal(props) {
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedMeme.meme_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.clickedMeme.image_path} width='100%'></Image>
                    {props.clickedMeme.bottomtext}
                
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