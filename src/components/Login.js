import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user_sb");
    if (auth) {
      navigate("/");
    }
  }, []);

  async function loginData() {
    try {
      console.log(email, password);

      const result = await axios.get(`http://localhost:8000/users`);
      // console.log(result.data);
      setResult(result.data);

      if (
        result.data[0].email == email &&
        result.data[0].password == password
      ) {
        console.warn("success");

        localStorage.setItem("user_sb", result.data[0].email);
        navigate("/");

        toast.success("User Loggedin Successfully ", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.warn("failed");
        toast.error("Incorrect Username or Password ", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log("something is wrong");
    }
  }

  return (
    <div>
      {/* Body Box with Shadow  */}
      <div className="login__details_dashboard">
        <div id="login__componentsBox">
          <div className="register__icon">
            <ion-icon name="people-circle-outline" />
          </div>
          <div className="register__data">
            <h1>Login User</h1>
            <div className="register__form">
              <input
                type="text"
                id="login_input"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                id="login_input"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                id="login__btn"
                type="button"
                className="btn btn-primary"
                onClick={loginData}
              >
                Log in
              </button>

              {/* <table>
            {result?.map((result_show, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{result_show.email}</td>
                      </tr>
                  );
                })}
            </table> */}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
