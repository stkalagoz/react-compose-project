import React from 'react';
import { useNavigate } from 'react-router-dom';

const Comm=()=> {
  const navigate = useNavigate();

  const onClick=()=>{
    navigate('/about');
  }

  return (
    <div>
      <button onClick={onClick}>Click</button>
      <div>Comminication</div>
    </div>
  );
}

export default Comm;
