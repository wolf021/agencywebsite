import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../../Scss/navbar.scss'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../Assets/Images/deveclipselogo.png"
import { faXmark, faBars,faAngleDown} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [first, setFirst] = useState(true)
  const [hamburger, setHamburger] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  window.onscroll = () => {
    if(window.pageYOffset <80) {
      setFirst(true)
      console.log("nav changed")
    }
    else{
      setFirst(false)
      setHamburger(false)
    }
    }

  return (

  <>
  
    <nav className={first? "navbar1" : "navbar2"}>
      
      <Link className='nav-logo'  to='/' >
        <img src={Logo} alt="deveclipse" height="100%" width="100%" />
      </Link>
        <div className="nav_links">
         <Link  to='/' id="nav_link" >Home </Link>
         <Link to='/services' id="nav_link"  >Services   </Link>
         <Link to='/about' id="nav_link" >About </Link>
        </div>
        <a href="#contact">
        
        <button className="button_primary" id='nav_button'>
          Get a Quote
        </button>
        </a>
      
        <div>
          
        <div style={{position: 'absolute', right:'8%', top:'31%' }} className="nav_menu" onClick={()=>{
          !hamburger? setHamburger(true) 
          
           :
            setHamburger(false)
            setDropDown(false)
        }} >
          <FontAwesomeIcon icon={!hamburger? faBars : faXmark} size="2x" color='white'/>
        </div>
        </div>

        <div className={hamburger? "mobile-navlinks" : "mobile-navlinks-hidden"}>
          <Link to="/" className='mobile-nav-link' onClick={()=> setHamburger(false)}  >Home</Link>
          <div  className='mobile-nav-link' onClick={()=> !dropDown? setDropDown(true) : setDropDown(false) }  >Services <FontAwesomeIcon icon={faAngleDown} /></div>
          <div className={dropDown? "services-dropdown" : "services-dropdown-hidden"}>
          <Link  className='mobile-nav-link' onClick={()=> setHamburger(false)}  to="/services/custom-web-development" >Custom Web Development</Link>
          <Link  className='mobile-nav-link' onClick={()=> setHamburger(false)}  to="/services/custom-app-development" >Custom App Development</Link>
          <Link  className='mobile-nav-link'  onClick={()=> setHamburger(false)} to="/services/ui-ux-design" >Ui-Ux Design</Link>
          </div>
          
          <Link to="/about" onClick={()=> setHamburger(false)} className='mobile-nav-link'  >About</Link>
         
        </div>
      
    </nav>
   
    </>
        
  )
}

export default Navbar