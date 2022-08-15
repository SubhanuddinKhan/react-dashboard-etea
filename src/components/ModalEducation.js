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

// function ModalEducation({setPass},{pass}) {
function ModalEducation(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const [degree, setDegree] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [decDate, setDecDate] = useState("");
  const [board, setBoard] = useState("");
  const [obtMarks, setObtMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [grade, setGrade] = useState("");

  const [data, setData] = useState(true);

  const saveData = async () => {
    console.log(
      degree,
      degreeTitle,
      decDate,
      board,
      obtMarks,
      totalMarks,
      grade
    );

    const result = axios
      .post("http://localhost:8000/education_data", {
        degree,
        degreeTitle,
        decDate,
        board,
        obtMarks,
        totalMarks,
        grade,
      })
      .then((response) => {
        setResult(response.data);
      });

    if (result) {
      toast.success("Education Added Successfully ", {
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

    // navigate('/education');
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
        ADDING EDUCATION{" "}
        <span className="modal_btn">
          <ion-icon name="add-circle"></ion-icon>
        </span>
      </button>

      {/* <Modal show={show} onHide={handleClose} size="lg" onExit={reload}> */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Enter Education</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="modal__style">
            <Row className="row">
              <Col xs={4} md={3}>
                Select Degree/Certificate
              </Col>
              <Col xs={4} md={3}>
                <Form.Select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  
                >
                  <option>Open this select menu</option>
                  <option value="SSC">SSC</option>
                  <option value="HSSC">HSSC</option>
                  <option value="BS">BS</option>
                </Form.Select>
              </Col>
              <Col xs={4} md={3}>
                <span>Degree/ Certificate Title</span>
              </Col>
              <Col xs={4} md={3}>
                <Form.Control
                  placeholder="Degree/Certificate Title"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="row">
              <Col xs={4} md={3}>
                Result Declaration Date
              </Col>
              <Col xs={4} md={3}>
                <div
                  id="date-picker-example"
                  class="md-form md-outline input-with-post-icon datepicker"
                  inline="true"
                >
                  <input
                    placeholder="Select date"
                    type="date"
                    id="example"
                    class="form-control"
                    value={decDate}
                    onChange={(e) => setDecDate(e.target.value)}
                  />
                  {/* <ion-icon name="calendar-number"></ion-icon> */}
                  <i class="fas fa-calendar input-prefix"></i>
                </div>
              </Col>
              <Col xs={4} md={3}>
                Board / University
              </Col>
              <Col xs={4} md={3}>
                <Form.Control
                  placeholder="Board/University"
                  aria-label="Board/University"
                  aria-describedby="basic-addon1"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="row">
              <Col xs={4} md={3}>
                Obtained Marks/GPA
              </Col>
              <Col xs={4} md={3}>
                <Form.Control
                  placeholder="Marks/GPA"
                  aria-label="Marks/GPA"
                  aria-describedby="basic-addon1"
                  value={obtMarks}
                  onChange={(e) => setObtMarks(e.target.value)}
                />
              </Col>
              <Col xs={4} md={3}>
                Total Marks/GPA
              </Col>
              <Col xs={4} md={3}>
                <Form.Control
                  placeholder="Total Marks/GPA"
                  aria-label="Total Marks/GPA"
                  aria-describedby="basic-addon1"
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="row">
              <Col xs={4} md={3}>
                Select Grade
              </Col>
              <Col xs={4} md={3}>
                <Form.Select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option>Open this select menu</option>
                  <option value="A">A</option>
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

export default ModalEducation;
