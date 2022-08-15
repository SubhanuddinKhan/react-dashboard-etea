import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalEducation from "./ModalEducation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import {
  Modal,
  Button,
  Row,
  Container,
  Col,
  DropdownButton,
  Form,
} from "react-bootstrap";

function Education() {
  // console.log("edu loaded");

  const [pass, setPass] = useState(true);
  const [pass_update, setPass_update] = useState(true);
  const [result, setResult] = useState([]);
  const [result_update, setResult_update] = useState([]);

  useEffect(() => {
    getUsers();
    // console.log("useEffect pass called callled");
    // console.log("useEffect pass called callled & pass = ", pass);

    setPass(true);
  }, [pass]);

  // Modal Update states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [degree, setDegree] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [decDate, setDecDate] = useState("");
  const [board, setBoard] = useState("");
  const [obtMarks, setObtMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [grade, setGrade] = useState("");
  const [id,setId]=useState("");
  


  // Delete Product
  async function deleteEducation(id) {
    // console.log(id);

    let result_delete = await axios.delete(
      `http://localhost:8000/education_data/${id}`
    );

    if (result_delete) {
      // alert("Product Deleted");
      toast.error("Education Data Deleted!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      getUsers();
    }
  }

  // Get Education Data
  const getUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/education_data`);
      console.log(result.data);
      setResult(result.data);
      // setDegree(result.data);
      // setDegreeTitle(result.data);
      // setDecDate(result.data);
      // setBoard(result.data);
      // setObtMarks(result.data);
      // setTotalMarks(result.data);
      // setGrade(result.data);


      // console.log("get users loaded");
    } catch (error) {
      console.log("something is wrong from get users");
    }
  };


  // Get Edit Education Data
  const editGetUsers = async (id) => {
    try {
      setShow(true);
      console.warn("edit get user id = ", id);
      const result_update = await axios.get(`http://localhost:8000/education_data/${id}`);
      console.log(result_update.data);
      setResult_update(result_update.data);
      setId(result_update.data.id);
      setDegree(result_update.data.degree);
      setDegreeTitle(result_update.data.degreeTitle);
      setDecDate(result_update.data.date);
      setBoard(result_update.data.board);
      setObtMarks(result_update.data.obtMarks);
      setTotalMarks(result_update.data.totalMarks);
      setGrade(result_update.data.grade);
     


    } catch (error) {
      console.log("something is wrong from get users");
    }
  };


  // Edit Education Data


  const updateEducation = async () => {
    console.log("update education ",
      degree,
      degreeTitle,
      decDate,
      board,
      obtMarks,
      totalMarks,
      grade,
      id
    );

    const result_update = await axios.put(`http://localhost:8000/education_data/${id}`, {
        degree: degree,
        degreeTitle: degreeTitle,
        decDate: decDate,
        board: board,
        obtMarks: obtMarks,
        totalMarks: totalMarks,
        grade: grade,
      })
      // .then((response) => {
      //   setResult(response.data);
      // });

    if (result_update) {
      toast.success("Education Added Successfully ", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

     
    }
    // getUsers();
//  handleClose();
setPass(true);

  }





  return (
    <>
      {/* Body Box with Shadow  */}
      <div className="details_dashboard">
        <div className="componentsBox">
          <div className="table__data">
            <h2>Education</h2>
            {/* <button  className='btn' style={{backgroundColor:'#00897b', color: 'white'}}>ADDING EDUCATION <span className='modal_btn'><ion-icon name="add-circle"></ion-icon></span></button> */}

            <ModalEducation
              setPass={setPass}
            />

            <table className="table">
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Degree/Certificate</th>
                  <th>Degree/Certificate Title</th>
                  <th>Board/University</th>
                  <th>Result Declaration Date</th>
                  <th>Obtained Marks/GPA</th>
                  <th>Total Marks/GPA</th>
                  <th>Grade</th>
                  <th>Action</th>
                </tr>
                {result?.map((result_show, i) => {
                  // console.log("edu body loaded");
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{result_show.degree}</td>
                      <td>{result_show.degreeTitle}</td>
                      <td>{result_show.board}</td>
                      <td>{result_show.decDate}</td>
                      <td>{result_show.obtMarks}</td>
                      <td>{result_show.totalMarks}</td>
                      <td>{result_show.grade}</td>
                      <td>
                        <span onClick={() => editGetUsers(result_show.id)}>

                          <ion-icon
                            style={{ color: "#00897b" }}
                            name="create-outline"
                          />

                        </span>
                        <span onClick={() => deleteEducation(result_show.id)}>
                          {" "}
                          <ion-icon name="trash-outline" />
                        </span>
                      </td>
                      {/* <td><span onClick={()=>deleteData(result_show.id)}> <ion-icon className='table__data__delete' name="trash-outline" /></span></td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>




            {/* Modal Update Start  */}

            <button
              className="btn"
              onClick={handleShow}
              style={{ backgroundColor: "#00897b", color: "white" }}
            >
              update EDUCATION{" "}
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
                        placeholder={degreeTitle}
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

                    <Col xs={4} md={3}>
                      <Form.Control
                        placeholder="Board/University"
                        aria-label="Board/University"
                        aria-describedby="basic-addon1"
                        value={id}
                        
                        
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
                  onClick={()=>updateEducation(id)}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Modal Update End  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
