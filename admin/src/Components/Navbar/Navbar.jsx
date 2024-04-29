import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img style={{ width: "50px",  }}  src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg" className='nav-logo' alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
