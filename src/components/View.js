import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function View() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
  }, []);

  async function getStudent() {
    try {
      const student = await axios.get(`http://localhost:8000/posts/${id}`);
      console.log(student.data);
      setStudent(student.data);
    } catch (error) {
      console.log("something is wrong");
    }
  }

  function handleClick() {
    navigate("/users");
  }

  return (
    <div>

       {/* Body Box with Shadow  */}
       <div className="details_dashboard" >
      <div className="componentsBox">

      <div className="container crud__data">
        <h2>Users Data</h2>
        <hr />
        <table className="table">
          
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
              {
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
              }
            </tbody>
          
        </table>

        <div className="col text-center">
          <Button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
            style={{backgroundColor:'#00897b', color: 'white'}}
          >
            Back To Home
          </Button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default View;
