import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../../Scss/navbar.scss'
import logo from '../Assets/Images/logo.png'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      
      <Link style={{textDecoration: 'none',color: 'white',display:"flex", alignItems: 'center',justifyContent: 'space-between', width:"10%"}} to='/' >
        <img  src={logo}  className="logo_img" alt="logo"/>
        <h1>Devonic</h1>
      </Link>
        <div className="nav_links">
         <Link  to='/' id="nav_link" >Home </Link>
         <Link to='/services' id="nav_link"  >Services   </Link>
         <Link to='/about' id="nav_link" >About </Link>
        </div>
        <button className="button_primary" id='nav_button'>
          Get a Quote
        </button>
      
        <div>
          
        <div style={{position: 'absolute', right:'8%', top:'31%' }} className="nav_menu" onClick={()=>{
          !hamburger? setHamburger(true) 
          
           :
            setHamburger(false)
            setDropDown(false)
        }} >
          <FontAwesomeIcon icon={!hamburger? faBars : faXmark} size="2x"/>
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