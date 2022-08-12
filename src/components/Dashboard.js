import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';


import Home from './Home';
import Homer from './Home';
import UsersList from "./UsersList";
import View from "./View";
import Register from "./Register";
import UpdateUser from "./UpdateUser";
import Education from './Education';
import Experience from './Experience';
import Redirect from './Redirect';



function Dashboard() {


     
    const [home,setHome]=useState("");
    const [adduser,setAdduser]=useState("");

    
     function toggle_c() {


            // Add hover class in selected list item
      let list = document.querySelectorAll('.navigation_b li');
      function activeLink(){
          list.forEach((item)=>
          item.classList.remove('hovered'));
          this.classList.add('hovered');
      }
      list.forEach((item)=>
      item.addEventListener('mouseover',activeLink));
  
  
      // Menu Toggle
      let toggle = document.querySelector('.toggle');
      let navigation_b = document.querySelector('.navigation_b');
      let main = document.querySelector('.main');

        navigation_b.classList.toggle('active');
        main.classList.toggle('active');

    }
 
  return (
    <>
<div className="container_b">
  <div className="navigation_b">
    <ul>
      <li>
        <Link to="/">
          <span className="icon"><ion-icon name="logo-apple" /></span>
          <span className="title">Dashboard</span>
        </Link>
      </li>
      {/* <li onClick={()=>{setHome("hovered")}} className={home}> */}
      <li >

      <Link to="/Home">
          <span className="icon"><ion-icon name="home-outline" /></span>
          <span className="title">Home</span>
        </Link>
      </li>
      <li>
      <Link to="/register">
          <span className="icon"><ion-icon name="person-circle-outline" /></span>
          <span className="title">Add User</span>
          </Link>
      </li>
      <li>
        <Link to="/users">
          <span className="icon"><ion-icon name="school-outline" /></span>
          <span className="title">Manage Users</span>
        </Link>
      </li>
      <li>
        <Link to="/education">
          <span className="icon"><ion-icon name="school-outline" /></span>
          <span className="title">Education</span>
        </Link>
      </li>
      <li>
        <Link to ="/experience">
          <span className="icon"><ion-icon name="briefcase-outline" /></span>
          <span className="title">Experience</span>
        </Link>
      </li>
      <li>
        <a href>
          <span className="icon"><ion-icon name="newspaper-outline" /></span>
          <span className="title">Posts</span>
        </a>
      </li>
      <li>
        <a href>
          <span className="icon"><ion-icon name="log-out-outline" /></span>
          <span className="title">Signout</span>
        </a>
      </li>
    </ul>
  </div>

  {/* Main */}
  <div className="main">
    <div className="topbar">
      <div className="toggle" onClick={toggle_c}>
        <ion-icon name="menu-outline" />
      </div>
      {/* Search */}
      <div className="search">
        <label htmlFor="search">
          <input type="text" name="search" placeholder="Search here" />
          <ion-icon name="search-outline" />
        </label>
      </div>
      {/* userimage */}
      <div className="user">
        <img src="./assets/images/image.jpg" />
      </div>
    </div>


   
    
        
      <Routes>
        <Route exact path="/" element={<Homer />} />
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/view/:id" element={<View />} />
        <Route exact path="/update/:id" element={<UpdateUser />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/users" element={<UsersList />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path='/redirect_edu' element={<Redirect />} />
        </Routes>

      </div>
</div>

    </>
  )
}

export default Dashboard