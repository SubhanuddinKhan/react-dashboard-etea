import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    // const [student,setStudent]=useState({
    //     stdName: "",
    //     email: ""
    // });

    // function onTextFieldChange(e){
    //     setStudent({
    //         ...student,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[result,setResult] = useState("");

    const collectData=async ()=>{
        console.log(name,email);

        const result= axios
        .post("http://localhost:8000/posts", {
          name,email
        })
        .then((response) => {
          setResult(response.data);
        });

        if (result){
          toast.success('User Added Successfully ', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        }



    }



  return (
    <div>
      {/* Body Box with Shadow  */}
    <div className="details_dashboard" >
      <div className="componentsBox">

  <div className="register__icon">
    <ion-icon name="people-circle-outline" />
  </div>
  <div className="register__data">
    <h1>Register User</h1>
    <div className="register__form">
      <input type="text" className="form-control" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button type="button" className="btn btn-primary" onClick={collectData}>Add User</button>
    </div>
  </div>
</div>
</div>


<ToastContainer/>
    </div>
  )
}

export default Register