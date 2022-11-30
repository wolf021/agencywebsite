import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../Components/Card/Card';
import frontend from '../Components/Assets/Images/frontend.png'
import ReactIco from '../Components/Assets/Images/React.png'
import NextIco from '../Components/Assets/Images/Nextjs.png'
import NodeIco from '../Components/Assets/Images/node.png'
import ReactNIco from '../Components/Assets/Images/React-native.png'
import FigmaIco from '../Components/Assets/Images/figma.png';
import avatar from '../Components/Assets/Images/avatar.png'
import avatar2 from '../Components/Assets/Images/avatar2.png'
import avatar3 from '../Components/Assets/Images/avatar3.png'
import avatar4 from '../Components/Assets/Images/avatar4.png'
import avatar5 from '../Components/Assets/Images/avatar5.png'
import avatar6 from '../Components/Assets/Images/avatar6.png'
import HeroImg from '../Components/Assets/Images/HeroImg.gif';
import '../Scss/homePage.scss'
import TestimonialCard from '../Components/TestimonialCard/TestimonialCard';
import { Helmet } from 'react-helmet-async';


const HomePage = () => {
 
  return (
   <>
   <Helmet>
    <title>
      DevEclipse - Custom Software Development Agency 
    </title>
    <meta name='description' content='Looking for Top Software Development Company in USA? We Engineer Software Solutions for Enterprises, Growth Companies & Startups.' />
    <link rel='canonical' href='/' />
   </Helmet>
   

    <div className="home_page" 
    >
      <section className="hero_container" >
        <div className="hero_wrapper">
        <div className="info_container">
          <h2 className="hero_title">
            Best Web <span id="hero_title_span" >Development</span>  and <span id="hero_title_span" >Designing</span> Agency 
          </h2>
          <p className="hero_info">
          Enterprises . Growth Companies . Startups
          </p>
          <div>
            <a href="#contact">

            
          <button className="button_primary">
           Lets Talk
          </button>
          </a>
        </div>
        
            </div>
            <div className="hero_img">
              
              <img src={HeroImg} alt="" height="100%" width="100%" />
            </div>
        </div>
            <div className="our_stacks" >
              <p style={{fontSize:"2rem"}} >Our Stack</p>
              <div className="stacks">
                <div className="react_icon">
                <img height="100%" width="100%" src={NextIco} alt="React icon" />
                </div>
                <div className="react_icon">
                <img height="100%" width="100%" src={ReactIco} alt="React icon" />
                </div>
                <div className="react_icon">
                <img height="100%" width="100%" src={ReactNIco} alt="React icon" />
                </div>
                <div className="react_icon">
                <img height="100%" width="100%" src={NodeIco} alt="React icon" />
                </div>
                <div className="react_icon">
                <img height="100%" width="20%" src={FigmaIco} alt="React icon" />
                </div>
                
               
              </div>
            </div>
      </section>
    <section className="platorm_container">
      <h3 style={{fontSize:"2rem",margin:"3rem 0rem"}}  >We are Expert on <br/> all <span className="platform_span">Technologies</span> & <span className="platform_span">Platform</span> </h3>
     <div on className="card_container">

      <Card Image={frontend} Title="Ui/Ux Design" Info="With our extensive expertise in UI/UX design and front-end development, we build web applications with delightful user experiences."  />
      <Card Image={frontend} Title="FrontEnd Development" Info="Benefit from our full stack front-end expertise to create innovative, human-centric, and goal-oriented web & mobile solutions. "  />
      <Card Image={frontend} Title="BackEnd Development" Info="We build extensible on-premise and cloud-based back-end solutions for mobile, web, desktop systems that scale with your growing needs."  />
      <Card Image={frontend} Title="FullStack Development" Info="We provide skillful software engineering to the full spectrum of technologies from simple frontend prototyping to the high-performing backend."  />
      <Card Image={frontend} Title="QA Testing" Info="A wide range of independent software QA and testing services that adhere to the highest levels of security and industry standards."  />
      <Card Image={frontend} Title="Support" Info="SLA based platform support with different maintenance plans to avoid any downtime, manage feature enhancements & maintenance of your app."  />
      
     </div>
     <br/>
     <div>
      <Link to="/services" >
      
       <button className="button_primary">Browse all Our Services</button>
       </Link>
     </div>
    </section>
<section className="process_container">
<h3 style={{fontSize:"2rem"}}  >Our <br/> <span className="platform_span">Design</span> & <span className="platform_span">Development</span> Process</h3>
<div className="process_card_container">
  <Card Image={frontend} Title="1.Project Idea" Info="we make your idea into reality. We Provide Solution to Our Clients to create the pressance Online." />
  <Card Image={frontend} Title="2.Design  & Development" Info="First Our Design Team Creates Your Idea in designing tools and them we Hand our that design to Development team." />
  <Card Image={frontend} Title="3.Launch & Scale" Info="We lauch your web/app with utmost dedication to its scalability." />
 
</div>
<a href="#contact">


  <button className="button_primary">Contact Us</button>
  </a>
</section>
<section className="ready_wrapper" >
  <div className="Ready_container" >
    

  <h3 className="ready_heading">Ready To Start  Working <br/><span className="title_span">Together</span>  With Our Team?
   </h3>
   <div>

  <button className="button_primary">Our Services</button>
   </div>
  </div>
</section>
<section className="testimonials_section">
  <h3 style={{fontSize:"2rem"}}>Testimonials</h3>
  <div className="testimonials">

  <TestimonialCard Image={avatar}  Name="Mark John" Info="Good to Work with them ,Delivered On Time." Rating="4.2" />
  <TestimonialCard Image={avatar2}  Name="cohan Petal" Info="I have changed designs many times but they deliver." Rating="4.6" />
  <TestimonialCard Image={avatar3}  Name="Kashif Johnson" Info="You can install React Router from the public npm registry with either" Rating="4.1" />
  <TestimonialCard Image={avatar4}  Name="Cathrine" Info="As a Non-Background in It, They make the Transition to the wbe wtih ease." Rating="4.8" />
  <TestimonialCard Image={avatar5}  Name="Shiwali Kapoor" Info="Happy to be their client. their team is dedicated to deliver" Rating="4.0" />
  <TestimonialCard Image={avatar6}  Name="Andrej Bigik" Info="Good to be the part of the journey. as i am not easy to work with." Rating="3.5" />
  </div>
</section>
    </div>
    </>
    
  )
}

export default HomePage;