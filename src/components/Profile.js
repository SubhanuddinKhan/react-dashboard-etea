import React,{useEffect, useState} from 'react';
import {
    Modal,
    Button,
    Row,
    Container,
    Col,
    DropdownButton,
    Form,
    InputGroup,
  } from "react-bootstrap";

  import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Profile() {

  const[result,setResult] = useState("");

    const [name, setName] = useState("");
    const [fName, setFName] = useState("");
    const [cnic, setCnic] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [religious, setReligious] = useState("");
    const [poAddress, setPoAddress] = useState("");
    const [paAddress, setPaAddress] = useState("");
    const [mobNo,setMobNo] = useState("");
    const [alNo,setAlNo] = useState("");
    const [dob,setDob] = useState("");
    const [domicile,setDomicile] = useState("");
    const [zone,setZone] = useState("");
    const [disability,setDisability] = useState("");
    const [ageRel,setAgeRel] = useState("");
    const [curOccupation,setCurOccupation] = useState("");
    const [highQualification,setHighQualification] = useState("");

    // const [id,setId] = useState(1);
    let id=1;


    useEffect(()=>{
      editGetUsers();
    },[])

     // Get Profile Data
     const editGetUsers = async () => {
      try {
        // setShow(true);
        // console.warn("edit get user id = ", id);
        const result = await axios.get(`http://localhost:8000/profiles/${id}`);
        // console.log(result.data);
        setResult(result.data);
        // setId(result.data.id);
        setName(result.data.name);
        setFName(result.data.fName);
        setCnic(result.data.cnic);
        setEmail(result.data.email);
        setGender(result.data.gender);
        setReligious(result.data.religious);
        setPoAddress(result.data.poAddress);
        setPaAddress(result.data.paAddress);
        setMobNo(result.data.mobNo);
        setAlNo(result.data.alNo);
        setDob(result.data.dob);
        setDomicile(result.data.domicile);
        setZone(result.data.zone);
        setDisability(result.data.disability);
        setAgeRel(result.data.ageRel);
        setCurOccupation(result.data.curOccupation);
        setHighQualification(result.data.highQualification);
  
      } catch (error) {
        console.log("something is wrong from get users");
      }
    };


      // Edit Profile Data
  const updateProfile = async () => {
    // console.log("id Update = ",id)
    const result_update = await axios.put(`http://localhost:8000/profiles/${id}`, {
      name: name,fName: fName,cnic: cnic,email: email,gender: gender,religious: religious,
          poAddress: poAddress,paAddress: paAddress,mobNo: mobNo,alNo: alNo,dob: dob,domicile: domicile,zone: zone,disability: disability,ageRel: ageRel,
          curOccupation: curOccupation,highQualification: highQualification
       
      })
      

    if (result_update) {
      toast.success("Profile Updated Successfully ", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

     
    }

    editGetUsers();


  }
     

    // const collectData=async ()=>{
    //   console.log(name,fName,cnic,email,gender,religious,
    //     poAddress,paAddress,mobNo,alNo,dob,domicile,zone,disability,ageRel,
    //     curOccupation,highQualification);

    //   const result= axios
    //   .post("http://localhost:8000/profiles", {
    //     name,fName,cnic,email,gender,religious,
    //     poAddress,paAddress,mobNo,alNo,dob,domicile,zone,disability,ageRel,
    //     curOccupation,highQualification
    //   });

    //   if (result){
    //     toast.success('User Added Successfully ', {
    //   position: "top-right",
    //   autoClose: 4000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
    //   }

    // }
    






  return (
    <>
      {/* Body Box with Shadow  */}
      <div className="details_dashboard">

      {/* <Container className="modal__style"> */}
            {/* <h2>Update Profile Record</h2> */}
            {/* </Container> */}
        <div className="componentsBox">
          <div className="table__data__profile">
           

            <Container className="modal__style">
            <h2>Update Profile Record </h2>
            <hr />
            <Row className="row">
              <Col xs={12} md={4}>
                <label>Name </label>
              <Form.Control
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
              </Col>
              <Col xs={12} md={4}>
                <label htmlFor="Father Name">Father Name</label>
              <Form.Control
                  placeholder="Father Name"
                  aria-label="Father Name"
                  aria-describedby="basic-addon1"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </Col>
              <Col xs={12} md={4}>
                <label htmlFor="CNIC">CNIC</label>
              <Form.Control
              
                  placeholder="CNIC"
                  aria-label="CNIC"
                  aria-describedby="basic-addon1"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  disabled
                />
              </Col>
            
            </Row>

            <Row className="row">
            <Col xs={12} md={3}>
              <label htmlFor="Email">Email</label>
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>

              <Col xs={12} md={4}>
                <label htmlFor="Gender">Gender</label>
              <Form.Control
                  placeholder="Gender"
                  aria-label="Gender"
                  aria-describedby="basic-addon1"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Col>
              <Col xs={12} md={4}>
                <label htmlFor="Religious">Religious</label>
              <Form.Control
                  placeholder="Religious"
                  aria-label="Religious"
                  aria-describedby="basic-addon1"
                  value={religious}
                  onChange={(e) => setReligious(e.target.value)}
                />
              </Col>
             
            </Row>

            <Row className="row">
            <Col xs={12} md={6}>
              <label htmlFor="Postal Address">Postal Address</label>
                <Form.Control
                  placeholder="Postal Address"
                  aria-label="Postal Address"
                  aria-describedby="basic-addon1"
                  value={poAddress}
                  onChange={(e) => setPoAddress(e.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label htmlFor="Parmanent Address">Parmanent Address</label>
                <Form.Control
                  placeholder="Parmanent Address"
                  aria-label="Parmanent Address"
                  aria-describedby="basic-addon1"
                  value={paAddress}
                  onChange={(e) => setPaAddress(e.target.value)}
                />
              </Col>
             
            </Row>

            <Row className="row">
            <Col xs={12} md={4}>
              <label htmlFor="Mobile Number">Mobile Number</label>
                <Form.Control
                  placeholder="Mobile Number"
                  aria-label="Mobile Number"
                  aria-describedby="basic-addon1"
                  value={mobNo}
                  onChange={(e) => setMobNo(e.target.value)}
                />
              </Col>
             
              <Col xs={12} md={4}>
                <label htmlFor="Alternative Number">Alternative Number</label>
                <Form.Control
                  placeholder="Alternative Number"
                  aria-label="Alternative Number"
                  aria-describedby="basic-addon1"
                  value={alNo}
                  onChange={(e) => setAlNo(e.target.value)}
                />
              </Col>

              <Col xs={12} md={4}>
                <label htmlFor="DOB">DOB</label>
              <Form.Control
                  placeholder="DOB"
                  aria-label="DOB"
                  aria-describedby="basic-addon1"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Col>

             
            </Row>

            <Row>
            <Col xs={12} md={4}>
              <label htmlFor="Domicile">Domicile</label>
            <Form.Control
                  placeholder="Domicile"
                  aria-label="Domicile"
                  aria-describedby="basic-addon1"
                  value={domicile}
                  onChange={(e) => setDomicile(e.target.value)}
                />
              </Col>
              
              <Col xs={12} md={4}>
                <label>Zone</label>
              <Form.Control
                  placeholder="Zone"
                  aria-label="Zone"
                  aria-describedby="basic-addon1"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                />
              </Col>

              <Col xs={12} md={4}>
              <label htmlFor="Disability">Disability</label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
          Disability
        </InputGroup.Text> */}
        <Form.Control id="basic-url" aria-describedby="basic-addon3"
        value={disability}
        onChange={(e) => setDisability(e.target.value)}
         />
      </InputGroup>
      </Col>
            </Row>

            <Row>
                <Col xs={12} md={4}>
                <Form.Label htmlFor="basic-url">Do you claim age relaxation ?</Form.Label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text> */}
        <Form.Control id="basic-url" aria-describedby="basic-addon3"
        value={ageRel}
        onChange={(e) => setAgeRel(e.target.value)}
         />
      </InputGroup>
                </Col>

                <Col xs={12} md={4}>
                <Form.Label htmlFor="basic-url">What is your current occupation ?</Form.Label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text> */}
        <Form.Control id="basic-url" aria-describedby="basic-addon3"
        value={curOccupation}
        onChange={(e) => setCurOccupation(e.target.value)}
         />
      </InputGroup>
                </Col>

                <Col xs={12} md={4}>
                <Form.Label htmlFor="basic-url">Your Highest Qualification ?</Form.Label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text> */}
        <Form.Control id="basic-url" aria-describedby="basic-addon3"
        value={highQualification}
        onChange={(e) => setHighQualification(e.target.value)}
         />
      </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={12}>
                <Button className='w-100' onClick={updateProfile}>UPDATE PROFILE</Button>
                </Col>
            </Row>
          </Container>


            </div>
            </div>
            </div>
            </>
  )
}

export default Profile