import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [result, setResult] = useState([]);
  const navigate = useNavigate();

  // const params = useParams();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/posts/${id}`);
      console.log(result.data);
      // setResult(result.data);
      setName(result.data.name);
      setEmail(result.data.email);
    } catch (error) {
      console.log("something is wrong from get users");
    }
  };

  const updateUser = async () => {
    console.log(name, email, id);

    const result = await axios.put(`http://localhost:8000/posts/${id}`, {
      name: name,
      email: email,
    });

    if (result) {
      toast.success("User Updated Successfully!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    navigate("/users");
  };

  return (
    <div>
      {/* Body Box with Shadow  */}
      <div className="details_dashboard">
        <div className="componentsBox">
          <div className="update__container">
            <div className="update__icon">
              <ion-icon name="person-circle"></ion-icon>
              <h1>Update User</h1>
            </div>
            <div className="register__data">
              <div className="register__form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#00897b", color: "white" }}
                  onClick={updateUser}
                >
                  Update User
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
