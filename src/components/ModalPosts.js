import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import {
  Modal,
  Button,
  Row,
  Container,
  Col,
  DropdownButton,
  Form,
} from "react-bootstrap";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// function ModalPosts({setPass},{pass}) {
function ModalPosts(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [userId, setUserId]= useState(23);
  const [data, setData] = useState(true);

  const saveData = async () => {
    console.log("Posts Data ",
      name,
      expiryDate,
      
    );

    const result = axios
      .post("http://localhost:8000/posts_applied", {
        name: name,
      userId: userId
      });

    if (result) {
      toast.success("Application submitted successfully ", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      props.setPass(false);
    }

    // navigate('/experience');
    // navigate('/redirect_edu');
    handleClose();
  };

  // const reload=()=>window.location.reload();

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}> */}
      {/* Launch demo modal
      </Button> */}

      {/* <button onClick={() => props.data(data)}>button </button> */}

      <button
        className="btn"
        onClick={handleShow}
        style={{ backgroundColor: "#00897b", color: "white" }}
      >
        Apply{" "}
        <span className="modal_btn">
          <ion-icon name="add-circle"></ion-icon>
        </span>
      </button>

      {/* <Modal show={show} onHide={handleClose} size="lg" onExit={reload}> */}
       {/* <Modal show={show} onHide={handleClose} size="lg" onExit={reload}> */}
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Enter Apply</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Container className="modal__style">
                  

                  <Row className="row">
                  <Col xs={4} md={2}>
                      Apply for the Post:
                    </Col>
                    <Col xs={4} md={10}>
                    <Form.Select
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                >
                  <option>Select Post</option>
                  <option value="Computer Operator">Computer Operator</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Form.Select>
                    </Col>

                  </Row>

                 
                </Container>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#00897b", color: "white" }}
                  onClick={saveData}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  );
}

export default ModalPosts;
