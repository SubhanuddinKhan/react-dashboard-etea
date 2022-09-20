// import Blank from './components/Blank';
// import Sidebar from './components/Sidebar';
// import Test from './components/Test';

import {BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from './components/Home';

import UsersList from "./components/UsersList";
import View from "./components/View";
import Register from "./components/Register";
import UpdateUser from "./components/UpdateUser";
import Dashboard from "./components/Dashboard";
import { Link } from "react-router-dom";

import {Navigate, Outlet} from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TestP from "./components/TestP";
import Login from "./components/Login";
import { useEffect } from "react";



function App() {
  // const navigate = useNavigate();

  
  // useEffect(()=>{
  //   const auth = localStorage.getItem('user_sb');
  //   if (auth){
  //     navigate('/');
  //   }
    
  // },[])

  return (
    <>

      
      <BrowserRouter>
      {/* <TestP /> */}
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
     </Routes>

     {/* <Dashboard /> */}
     
      
    
    
     </BrowserRouter>

      <ToastContainer/>













     
    </>
  );
}

export default App;







       {/* <div className="wrapper"> */}
{/* <Sidebar /> */}
      {/* <Blank /> */}

      {/* <Test /> */}


