import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalComponents = (props) => {
  
    let [permalink, media_url, caption, media_type,id] = props.instagrammedia;
    return(
    <Modal

      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body className="Modal" key={id}>
      {
          media_type === 'VIDEO' 
          ? <iframe loop autoplay="1" src={media_url} style={{width: "100%", height: "500px"}} title={permalink}/>
          : <img src={media_url} style={{width: "100%", height: "500px"}} alt={permalink}/>
      }
      
        <p>{caption}</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button href={permalink}>Перейти к записи</Button>
        {/* <Button onClick={props.onHide}>Закрыть</Button> */}
      </Modal.Footer>
    </Modal>
    );
}

export {ModalComponents};