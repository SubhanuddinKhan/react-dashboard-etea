import axios from "axios";
import React, { useEffect, useState } from "react";

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

function Apply() {
  // console.log("edu loaded");

  const [pass, setPass] = useState(true);
  const [pass_update, setPass_update] = useState(true);
  const [result, setResult] = useState([]);
  const [result_update, setResult_update] = useState([]);
  const [resultApplied,setResultApplied]= useState([]);


  useEffect(() => {
    getUsers();
    getAppliedData();
    // console.log("useEffect pass called callled");
    // console.log("useEffect pass called callled & pass = ", pass);

    setPass(true);
  }, [pass]);



  // Modal Update states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [userId, setUserId]= useState(23);
  const [pId,setpId]= useState("");

  
  const [id,setId]=useState("");
  




  // Get Apply Data
  const getUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/posts_provider`);
      console.log(result.data);
      setResult(result.data);

      // console.log("get users loaded");
    } catch (error) {
      console.log("something is wrong from get users");
    }
  };

    // Get Post Applied Data
    const getAppliedData = async () => {
      try {
        const resultApplied = await axios.get(`http://localhost:8000/posts_applied`);
        console.log(resultApplied.data);
        setResultApplied(resultApplied.data);
  
        // console.log("get users loaded");
      } catch (error) {
        console.log("something is wrong from get users");
      }
    };
  


  // Get Edit Apply Data
  const editGetUsers = async (id) => {
    try {
      setShow(true);
      // console.warn("edit get user id = ", id);
      var posts_providerId=23;
      const result_update = await axios.get(`http://localhost:8000/posts_data`);
      console.log(result_update.data);
      setResult_update(result_update.data);
      setId(id);
      setpId(result_update.data.posts_pId);
      setName(result_update.data.name);
     
    } catch (error) {
      console.log("something is wrong from get users");
    }
  };


  // Edit Apply Data


  const updateApply = async () => {
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
    toast.success("Application Submitted Successfully ", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setPass(false);
  }

  // navigate('/experience');
  // navigate('/redirect_edu');
  handleClose();
//  getUsers();



  }





  return (
    <>
      {/* Body Box with Shadow  */}
      <div className="details_dashboard_apply">
        <div className="componentsBox">
          <div className="table__data">
            <h2>List of all Active Projects</h2>
            {/* <button  className='btn' style={{backgroundColor:'#00897b', color: 'white'}}>ADDING Apply <span className='modal_btn'><ion-icon name="add-circle"></ion-icon></span></button> */}

           

        <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Expiry Date</th>
                  <th>Actions</th>
                </tr>
                {result?.map((result_show, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{result_show.name}</td>
                      <td>{result_show.expiryDate}</td>
                      <td>
                       
                        <Button className="btn btn-sm" onClick={() => editGetUsers(result_show.id)} >APPLY NOW</Button>
                      </td>
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
                <Modal.Title>Enter Apply</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Container className="modal__style">
                  

                  <Row className="row">
                  <Col xs={4} md={3}>
                      Apply for the Post:
                    </Col>
                    <Col xs={8} md={9}>
                    <Form.Select
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                >
                  { result_update?.map((result_show, i) => {
                    console.log("body list ",id)
                     return (
                      //  console.log(result_show.pId)
                  result_show.post_pId==id?
                  <option key={i} value={result_show.name}>{result_show.name}</option>
                 :
                 ""
                  );
                })}
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
                  onClick={()=>updateApply(id)}
                >
                  Apply
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Modal Update End  */}
          </div>


        </div>

           {/* POST APPLIED SECTION START  */}
           <div className="componentsBox">
          <div className="table__data">
            <h2>Posts Applied</h2>
            {/* <button  className='btn' style={{backgroundColor:'#00897b', color: 'white'}}>ADDING Apply <span className='modal_btn'><ion-icon name="add-circle"></ion-icon></span></button> */}

           

        <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Department Name</th>
                  <th>Post Name</th>
                  <th>Status</th>
                </tr>
                {resultApplied?.map((result_show, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>Swat Board Jobs</td>
                      <td>{result_show.name}</td>
                      <td>
                      <span className="input-group-text" id="basic-addon2">Applied</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>

          </div>
        </div>


      </div>
    </>
  );
}

export default Apply;
