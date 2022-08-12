import React from 'react'
import bootstrap from 'bootstrap'
// import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UsersList() {
    const [students,setStudents]=useState([]);

    useEffect(()=>{
        getAllStudents();
    },[])

    async function getAllStudents(){
        try{
            const students = await axios.get("http://localhost:8000/posts");
            console.log(students.data);
            setStudents(students.data);

           
        }
        catch(error){
            console.log ("something is wrong");
        }
    }


    // Delete Product 

    async function deleteProduct(id){
      console.log(id);

      let result = await axios.delete(`http://localhost:8000/posts/${id}`)

      if(result){
        // alert("Product Deleted");
        toast.error('Product Deleted!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            
      getAllStudents();

          }

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
    <tbody><tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
     
          {
              students.map((student, i) => {
                  return(

                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{student.name}</td> 
                    <td>{student.email}</td>
                    <td>
                      <span ><Link to={`/view/${student.id}`}> <ion-icon style={{color:"#005e86"}} name="eye-outline" /></Link></span>
                      
                      <span><Link to={`/update/${student.id}`}> <ion-icon name="create-outline" /></Link></span>
                      <span onClick={()=>deleteProduct(student.id)}> <ion-icon name="trash-outline" /></span>
                    </td>
                  </tr>

                  )
              }
              )

              
          }
          
     
    </tbody></table>
</div>



<ToastContainer/>
    </div>
</div>
</div>
    
  )
}

export default UsersList