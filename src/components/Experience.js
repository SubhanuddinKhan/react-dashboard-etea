import React from 'react'

function Experience() {
  return (
    <>
    {/* Body Box with Shadow  */}
    <div className="details_dashboard" >
    <div className="componentsBox">

    <div className='table__data'>

    <h2>Experience</h2>
          <button className='btn' style={{backgroundColor:'#00897b', color: 'white'}}>ADDING EXPERIENCE <span className='modal_btn'><ion-icon name="add-circle"></ion-icon></span></button>
          
          
          <table className="table">
          
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Starting Duration</th>
              <th>End Duration</th>
              <th>Actions</th>
            </tr>
            {
            <tr>
              <td>1</td>
              <td>Computer Science</td>
              <td>Web Developer</td>
              <td>2021-07-01</td>
              <td>2022-02-08</td>
              
               {/* <td><span onClick={()=>deleteProduct(student.id)}> <ion-icon name="trash-outline" /></span></td> */}
               <td>
               {/* <span><Link to={`/update/${student.id}`}> <ion-icon name="create-outline" /></Link></span> */}
               <span><ion-icon style={{color:'#00897b'}} name="create-outline" /></span>
                   <span > <ion-icon className='table__data__delete' name="trash-outline" /></span></td>

            </tr>
            }
          </tbody>
        
      </table>
          </div>

        </div></div>
        </>
  )
}

export default Experience