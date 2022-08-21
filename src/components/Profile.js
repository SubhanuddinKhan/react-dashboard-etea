import React,{useState} from 'react';
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

function Profile() {

    const [degree, setDegree] = useState("");
    const [degreeTitle, setDegreeTitle] = useState("");
    const [decDate, setDecDate] = useState("");
    const [board, setBoard] = useState("");
    const [obtMarks, setObtMarks] = useState("");
    const [totalMarks, setTotalMarks] = useState("");
    const [grade, setGrade] = useState("");

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
              <Col xs={6} md={4}>
              <Form.Control
                  placeholder="Name"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>
              <Col xs={6} md={4}>
              <Form.Control
                  placeholder="Father Name"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>
              <Col xs={6} md={4}>
              <Form.Control
                  placeholder="CNIC"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>
            
            </Row>

            <Row className="row">
            <Col xs={4} md={3}>
                <Form.Control
                  placeholder="Email"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>

              <Col xs={6} md={4}>
              <Form.Control
                  placeholder="Gender"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>
              <Col xs={6} md={4}>
              <Form.Control
                  placeholder="Religious"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>
             
            </Row>

            <Row className="row">
            <Col xs={12} md={6}>
                <Form.Control
                  placeholder="Postal Address"
                  aria-label="Board/University"
                  aria-describedby="basic-addon1"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <Form.Control
                  placeholder="Parmanent Address"
                  aria-label="Board/University"
                  aria-describedby="basic-addon1"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                />
              </Col>
             
            </Row>

            <Row className="row">
            <Col xs={6} md={4}>
                <Form.Control
                  placeholder="Mobile Number"
                  aria-label="Marks/GPA"
                  aria-describedby="basic-addon1"
                  value={obtMarks}
                  onChange={(e) => setObtMarks(e.target.value)}
                />
              </Col>
             
              <Col xs={6} md={4}>
                <Form.Control
                  placeholder="Alternative Number"
                  aria-label="Total Marks/GPA"
                  aria-describedby="basic-addon1"
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                />
              </Col>

              <Col xs={6} md={4}>
              <Form.Control
                  placeholder="DOB"
                  aria-label="Total Marks/GPA"
                  aria-describedby="basic-addon1"
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                />
              </Col>

             
            </Row>

            <Row>
            <Col xs={6} md={4}>
            <Form.Control
                  placeholder="Domicile"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>
              
              <Col xs={6} md={4}>
              <Form.Control
                  placeholder="Zone"
                  aria-label="Degree/Certificate Title"
                  aria-describedby="basic-addon1"
                  value={degreeTitle}
                  onChange={(e) => setDegreeTitle(e.target.value)}
                />
              </Col>

              <Col xs={6} md={4}>
              {/* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label> */}
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          Disability
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      </Col>
            </Row>

            <Row>
                <Col xs={6} md={4}>
                <Form.Label htmlFor="basic-url">Do you claim age relaxation ?</Form.Label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text> */}
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
                </Col>

                <Col xs={6} md={4}>
                <Form.Label htmlFor="basic-url">What is your current occupation ?</Form.Label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text> */}
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
                </Col>

                <Col xs={6} md={4}>
                <Form.Label htmlFor="basic-url">Your Highest Qualification ?</Form.Label>
      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text> */}
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={12}>
                <Button className='w-100'>UPDATE PROFILE</Button>
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