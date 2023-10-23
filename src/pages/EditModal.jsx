import React from 'react'
import { useLocation } from 'react-router-dom';


const EditModal = () => {
  const location = useLocation();
  const record = location.state;

  console.log(record);
  return (
    <div>
      
    </div>
  )
}

export default EditModal
