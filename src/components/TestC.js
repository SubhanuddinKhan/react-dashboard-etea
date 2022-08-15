import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TestC(props) {
    // const [hide, setHide] = useState(false);

    const handleClose = () => props.setShow(!props.show);
//  console.log("child show = ",props.show)

//  console.log("Value at child = ",props.value);

console.log("Update data = ",props.value)


  return (
    <div><h2>Test Child</h2>
    
     

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default TestC