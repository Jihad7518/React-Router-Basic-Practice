
import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }

