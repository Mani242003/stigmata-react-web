import React from 'react'
import "./ProductMenu.scss"
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ProductMenu = ({route}) => {
  return (
    <div className="P_Menu">
    <div className="P_MenuButton">{route.name} <FaChevronDown /> </div>
    <div className="P_SubRouteContainer">
      <span className="P_subRouteTitle">Products</span>
      <div className="P_subRouteOuterContainer">
      {route.subRoutes.map((subRoute,i) => (
     
     // <div  className=" sSubRoute"  key={subRoute.name}>
     //   <div className='sSubRouteDiv1'> <Link to={subRoute.link}>{subRoute.name}</Link></div>
     //   <div className='sSubRouteDiv2'>  <FaArrowRightLong /></div>
    
     // </div>
     <P_SubRouteLinkContainer key={i} data={subRoute} />
     

     
   ))}

      </div>
   

    </div>
   
  
  </div>
  )
}

export default ProductMenu

const P_SubRouteLinkContainer= ({data})=>{
    // console.log(data);
    return(
     <Link to={data.link} >
      <div className="P_subRouteLinkContainer">
        <div className="P_subRouteLeft">
            <img src={data.img} alt=""  />
        </div>
        <div className="P_subRouteRight">
            <span className="P_subRouteRightTitel">{data.title}</span>
            <span className="P_subRouteRightdes">{data.des}</span>

        </div>

      </div>
     
     </Link>
  
    )
  }