
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

