import React from 'react'
import "./GoToTop.scss"
const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
  return (
            <button className="Topbutton">hi</button>

  )
}

export default GoToTop