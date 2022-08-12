import axios from 'axios';
import React,{useEffect, useState} from 'react';
import ModalEducation from './ModalEducation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Education() {
  console.log("edu loaded");

  const [pass,setPass]=useState(true);
  const[result,setResult]=useState([]);

  useEffect(() => {
    getUsers();
  }, [pass]);

  // useEffect(() => {
  //   getUsers();
  // }, [saveData]);



   // Delete Product 
   async function deleteProduct(id){
    // console.log(id);

    let result_delete = await axios.delete(`http://localhost:8000/education_data/${id}`)

    if(result_delete){
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
          
          getUsers();

        }
      }



      // Get Education Data
  const getUsers = async ()=> {
    try {
    const result = await axios.get(`http://localhost:8000/education_data`);
    console.log(result.data);
    setResult(result.data);

  } 
  catch (error) {
    console.log("something is wrong from get users");
  }
 
}

// const reload=()=>window.location.reload();





  return (
      
      <>
      {/* Body Box with Shadow  */}
        <div className="details_dashboard" > 
      <div className="componentsBox"> 
      <div className='table__data'>

          <h2>Education</h2>
          {/* <button  className='btn' style={{backgroundColor:'#00897b', color: 'white'}}>ADDING EDUCATION <span className='modal_btn'><ion-icon name="add-circle"></ion-icon></span></button> */}
          
          <ModalEducation setPass={setPass}/>
          
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
            {
                
               result.map((result_show, i) => {
                console.log("edu body loaded");
                return(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{result_show.degree}</td>
              <td>{result_show.degreeTitle}</td>
              <td>{result_show.board}</td>
              <td>{result_show.decDate}</td>
              <td>{result_show.obtMarks}</td>
              <td>{result_show.totalMarks}</td>
              <td>{result_show.grade}</td>
              <td><span onClick={()=>deleteProduct(result_show.id)}> <ion-icon name="trash-outline" /></span></td>
              {/* <td><span onClick={()=>deleteData(result_show.id)}> <ion-icon className='table__data__delete' name="trash-outline" /></span></td> */}

            </tr>
               )})
            }
          </tbody>
        
      </table>

   

          </div>
          </div>
          </div>
          </>
  )
}

export default Education