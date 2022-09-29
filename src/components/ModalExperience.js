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

// function ModalExperience({setPass},{pass}) {
function ModalExperience(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [endDuration, setEndDuration] = useState("");
  const [company, setCompany] = useState("");

  const [data, setData] = useState(true);

  const saveData = async () => {
    console.log("Experience Data ",
      department,
      company,
      designation,
      startDuration,
      endDuration
    );

    const result = axios
      .post("http://localhost:8000/experience_data", {
        department,
      company,
      designation,
      startDuration,
      endDuration
      })
      .then((response) => {
        setResult(response.data);
      });

    if (result) {
      toast.success("Experience Added Successfully ", {
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
        ADDING EXPERIENCE{" "}
        <span className="modal_btn">
          <ion-icon name="add-circle"></ion-icon>
        </span>
      </button>

      {/* <Modal show={show} onHide={handleClose} size="lg" onExit={reload}> */}
      <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Enter Experience</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Container className="modal__style">
                  <Row className="row">

                  <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      Company:
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      <div
                        id="company"
                        class="md-form md-outline input-with-post-icon datepicker"
                        inline="true"
                        placeholder="Company"
                      >
                        <input
                          placeholder="Company"
                          type="text"
                          id="Company"
                          class="form-control"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                        {/* <ion-icon name="calendar-number"></ion-icon> */}
                        <i class="fas fa-calendar input-prefix"></i>
                      </div>
                    </Col>
                    
                   
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      <span>Designation</span>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      <Form.Control
                        placeholder="Designation"
                        aria-label="Designation"
                        aria-describedby="basic-addon1"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                      />
                    </Col>
                  </Row>

                  <Row className="row">
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      Start Duration
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      <div
                        id="date-picker-example"
                        class="md-form md-outline input-with-post-icon datepicker"
                        inline="true"
                        placeholder="Start Duration"
                      >
                        <input
                          placeholder="Select date"
                          type="date"
                          id="Start Duration"
                          class="form-control"
                          value={startDuration}
                          onChange={(e) => setStartDuration(e.target.value)}
                        />
                        {/* <ion-icon name="calendar-number"></ion-icon> */}
                        <i class="fas fa-calendar input-prefix"></i>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      End Duration
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      <Form.Control
                        type="date"
                        placeholder="End Duration"
                        aria-label="End Duration"
                        aria-describedby="basic-addon1"
                        value={endDuration}
                        onChange={(e) => setEndDuration(e.target.value)}
                      />
                    </Col>
                  </Row>

                  <Row className="row">
                  <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                      Department
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} id="modal__col">
                    <Form.Control
                        placeholder="Department"
                        aria-label="Department"
                        aria-describedby="basic-addon1"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      />
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

export default ModalExperience;
