import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate  } from 'react-router-dom';


import Home from './Home';
import Homer from './Home';
import UsersList from "./UsersList";
import View from "./View";
import Register from "./Register";
import UpdateUser from "./UpdateUser";
import Education from './Education';
import Experience from './Experience';
import Redirect from './Redirect';
import ModalUpdateEdu from './ModalUpdateEdu';
import Apply from './Apply';
import Profile from './Profile';
import Login from './Login';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    // Logout Function Start 
    const auth = localStorage.getItem("user_sb");
    const navigate = useNavigate();

    useEffect(() => {
      const auth = localStorage.getItem('user_sb');
      if (!auth){
        navigate('/login');
      }
    }, []);

    function logout() {
      localStorage.clear();
      navigate("/login");
  
      toast.success('Logged Out Successfully!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    // Logout End 
 
  return (
    <>
    {auth?
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
      <Link to="/profile">
          <span className="icon"><ion-icon name="person-circle-outline" /></span>
          <span className="title">Update Profile</span>
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
        <Link to="/apply">
          <span className="icon"><ion-icon name="newspaper-outline" /></span>
          <span className="title">Posts</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to="/login">
          <span className="icon"><ion-icon name="log-out-outline" /></span>
          <span className="title">Signout</span>
        </Link>
      
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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/view/:id" element={<View />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>
</div>:<Login />}

    </>
  )
}

export default Dashboard