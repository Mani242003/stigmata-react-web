import React from 'react'
import { useState } from 'react';

const CustomCustmerSlide = ({img,width}) => {
  
 
 
  return (
    <div style={{
        width:'200px',
        height:'100px',
        background:'white',
        borderRadius:'10px',
        margin:'12px 10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        

    }} >
        <img src={img}  alt="" width={width}/>
    </div>
  )
}

export default CustomCustmerSlide