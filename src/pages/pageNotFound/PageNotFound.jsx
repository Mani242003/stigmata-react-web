import React from 'react'
import "./PageNotFound.scss"
import pgNotFound from "../../assets/pgNotFound.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const PageNotFound = () => {
  return (
    <div className="not-found">
        <img src={pgNotFound} alt=""/>
        <div className="pgNotFoundButtonConatainer">
        <Link to="/">Go Back to Home</Link>
        <FaArrowRightLong />
        </div>
        
   
  </div>
  )
}

export default PageNotFound