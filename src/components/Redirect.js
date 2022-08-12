import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Redirect() {

    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/education');
        console.log("redirect exec");
      }, []);

    //   const reload=()=>window.location.reload();

  return (
    <div>Redirect</div>
  )
}

export default Redirect