import { Button } from 'bootstrap'
import React,{useState} from 'react'
import TestC from './TestC'

function TestP() {
    const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);

    const value=1;

    // console.log("show = ",show)

    async function getData(id){
        console.log("Get Data Id = ",id)
    }

  return (
    <div><h2>Test Parent</h2>

     <button variant="primary" onClick={()=>setShow(!show)} value={value}>
        Launch demo modal
      </button>
      <br></br>

      <span onClick={()=>{getData(value);setShow(!show)}} >edit 1</span>
      {/* <span onClick={()=>setShow(!show)} value={value}>edit 2</span> */}


        <TestC show={show} setShow={setShow} value={getData(value)}/>
    </div>
  )
}

export default TestP