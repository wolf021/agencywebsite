import React from 'react'
import '../Scss/aboutPage.scss'
import aboutImg from '../Components/Assets/Images/about.png'
import HeroImg from '../Components/Assets/Images/HeroImg.gif';
import DetailsCard from '../Components/DetailsCard/DetailsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faHeartCircleBolt, faCircleUser, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const AboutPage = () => {
  return (
    <div className="about">
       <section className="hero_container about-page"  >
        <div className="hero_wrapper">
        <div className="info_container">
          <h2 className="hero_title">
          
           <span id="hero_title_span" >Delivering </span>  Exceptional <span id="hero_title_span" >Technology </span> Solutions
          </h2>
          <p className="hero_info">
          We are committed to develop innovative software solutions for leading enterprises in the world, helping them grow their businesses using latest technology solutions.
          </p>
          <div>
           
           
        </div>
        
            </div>
            <div className="hero_img">
              
              <img src={aboutImg} alt="" height="100%" width="100%" />
            </div>
        </div>
          
      </section>
      <section className="vision">
      <div className='details-card-container' >
              <DetailsCard DetailTitle="Our Vision" DetailDescription="Our vision is to spread the power of technology across the globe. We want to help companies grow their businesses through innovative software solutions and digital transformation using latest technological approaches." />
            </div>
      </section>
      <section className="values">
        <h3 className="values-heading">
        Our Core Values
        </h3>
        <br/>
        <p className="values-info">
        From The Last Ten Years, We Have Been Building Great Software Products For Our Clients.
        </p>
        <br/>
        <br/>
        <div className="values-flex">
          <div className="values-card">
            <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
            <br/>
            <br/>
            <h4 className="values-card-heading">
            Be Curious
            </h4>
            <br/>
            <p className="values-card-info">
            Learning never stops. Open your eyes and look around, the more curious you are, the more possibilities you will open throughout your lifetime.
            </p>
          </div>
          <div className="values-card">
          <FontAwesomeIcon icon={faHeartCircleBolt} size="3x" />
            <br/>
            <br/>
            <h4 className="values-card-heading">
            Be Empathetic
            </h4>
            <br/>
            <p className="values-card-info">
            We believe in the unique human ability to understand and relate to others. Empathy helps us create more collaborative and respectful workspaces.
            </p>
          </div>
          <div className="values-card">
          <FontAwesomeIcon icon={faCircleUser} size="3x" />
            <br/>
            <br/>
            <h4 className="values-card-heading">
            Take Ownership
            </h4>
            <br/>
            <p className="values-card-info">
            We have established a culture of personal accountability, where our employees possess the freedom and the courage to take initiatives.
            </p>
          </div>
          <div className="values-card">
          <FontAwesomeIcon icon={faCircleCheck} size="3x" />
            <br/>
            <br/>
            <h4 className="values-card-heading">
            Keep Promises
            </h4>
            <br/>
            <p className="values-card-info">
            We believe that trust is the key in all our relationships and we take pride in delivering with Quality, precision and integrity.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage