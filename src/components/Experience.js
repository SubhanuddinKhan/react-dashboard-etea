import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalExperience from "./ModalExperience";

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

function Experience() {
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

  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [endDuration, setEndDuration] = useState("");
  const [company, setCompany] = useState("");
  const [id,setId]=useState("");
  


  // Delete Product
  async function deleteExperience(id) {
    // console.log(id);

    let result_delete = await axios.delete(
      `http://localhost:8000/experience_data/${id}`
    );

    if (result_delete) {
      // alert("Product Deleted");
      toast.error("Experience Data Deleted!", {
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

  // Get Experience Data
  const getUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/experience_data`);
      console.log(result.data);
      setResult(result.data);
     


      // console.log("get users loaded");
    } catch (error) {
      console.log("something is wrong from get users");
    }
  };


  // Get Edit Experience Data
  const editGetUsers = async (id) => {
    try {
      setShow(true);
      console.warn("edit get user id = ", id);
      const result_update = await axios.get(`http://localhost:8000/experience_data/${id}`);
      console.log(result_update.data);
      setResult_update(result_update.data);
      setId(result_update.data.id);
      setDepartment(result_update.data.department);
      setCompany(result_update.data.company);
      setDesignation(result_update.data.designation);
      setStartDuration(result_update.data.startDuration);
      setEndDuration(result_update.data.endDuration);
     


    } catch (error) {
      console.log("something is wrong from get users");
    }
  };


  // Edit Experience Data
  const updateExperience = async () => {
    console.log("update Experience ",
      department,
      company,
      designation,
      startDuration,
      endDuration,
      id
    );

    const result_update = await axios.put(`http://localhost:8000/experience_data/${id}`, {
        department: department,
        company: company,
        designation: designation,
        startDuration: startDuration,
        endDuration: endDuration,
       
      })
      

    if (result_update) {
      toast.success("Experience Updated Successfully ", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

     
    }
    
 handleClose();
 getUsers();


  }





  return (
    <>
      {/* Body Box with Shadow  */}
      <div className="details_dashboard">
        <div className="componentsBox">
          <div className="table__data">
            <h2>Experience</h2>
            {/* <button  className='btn' style={{backgroundColor:'#00897b', color: 'white'}}>ADDING Experience <span className='modal_btn'><ion-icon name="add-circle"></ion-icon></span></button> */}

            <ModalExperience
              setPass={setPass}
            />

        <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Department</th>
                  <th>Company</th>
                  <th>Designation</th>
                  <th>Starting Duration</th>
                  <th>End Duration</th>
                  <th>Actions</th>
                </tr>
                {result?.map((result_show, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{result_show.department}</td>
                      <td>{result_show.company}</td>
                      <td>{result_show.designation}</td>
                      <td>{result_show.startDuration}</td>
                      <td>{result_show.endDuration}</td>
                      <td>
                        <span onClick={() => editGetUsers(result_show.id)}>

                          <ion-icon
                            style={{ color: "#00897b" }}
                            name="create-outline"
                          />

                        </span>
                        <span onClick={() => deleteExperience(result_show.id)}>
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
        </div>



            {/* Modal Update Start  */}

           

            {/* <Modal show={show} onHide={handleClose} size="lg" onExit={reload}> */}
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Enter Experience</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Container className="modal__style">
                  <Row className="row">

                  <Col xs={6} md={3} id="modal__col">
                      Company
                    </Col>
                    <Col xs={6} md={3} id="modal__col">
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
                    
                   
                    <Col xs={6} md={3} id="modal__col">
                      <span>Designation</span>
                    </Col>
                    <Col xs={6} md={3} id="modal__col">
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
                    <Col xs={6} md={3} id="modal__col">
                      Start Duration
                    </Col>
                    <Col xs={6} md={3} id="modal__col">
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
                    <Col xs={6} md={3} id="modal__col">
                      End Duration
                    </Col>
                    <Col xs={6} md={3} id="modal__col">
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
                  <Col xs={6} md={3} id="modal__col">
                      Department
                    </Col>
                    <Col xs={6} md={3} id="modal__col">
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
                  onClick={()=>updateExperience(id)}
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

export default Experience;
