
import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }


  return (
    <div>
        <div>
          This is About Page
        </div>
        
        <div>
          <button onClick={clickHandler}>Move to Support Page</button>
        </div>

    </div>
  )
}

export default About
