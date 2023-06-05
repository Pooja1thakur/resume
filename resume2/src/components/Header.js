import React from 'react'
import '../style/Header.css';
import resumeSvg from "../assets/resume.svg";
function Header() {
  return (
    <div className="container">
      <div className='left'>
      <p className="heading">A <span>Resume</span> that stands out </p>

      <p className="heading">Make your own<span> Resume.</span></p>

      
    </div>
    <div className='right'>
<img src={resumeSvg} alt="Resume"/>
    </div>
    </div>
  )
}

export default Header;