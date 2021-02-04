import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';

const AddPetsModal = function (props){

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  const handleClose = () => setShow(false);

  return (
    <> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row pb-3">
              <div className="col align-self-end"><label>Nombre: </label></div>
              <div className="col"><input type="text" name="" /></div>
            </div>
            <div className="row pb-3">
              <div className="col align-self-end"><label >Raza: </label></div>
              <div className="col"><input type="text" name="" /></div>
            </div>
            <div className="row pb-3">
              <div className="col align-self-end"><label>Edad: </label></div>
              <div className="col"><input type="text" name="" /></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} disabled>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPetsModal;