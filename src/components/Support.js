
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {

  const navigate = useNavigate();

  function clickHandler() {
    navigate("/labs");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
        <div>
          This is Support Page
        </div>
        
        <div>
          <button onClick={clickHandler}>Move to Support Page</button>
          <button onClick={backHandler}>Go Back</button>
        </div>

    </div>
  )
}

export default Support
