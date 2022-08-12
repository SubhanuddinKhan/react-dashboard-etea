// import Blank from './components/Blank';
// import Sidebar from './components/Sidebar';
// import Test from './components/Test';

import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';

import UsersList from "./components/UsersList";
import View from "./components/View";
import Register from "./components/Register";
import UpdateUser from "./components/UpdateUser";
import Dashboard from "./components/Dashboard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>

      
      <BrowserRouter>
      <Dashboard />
     
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


