import React from 'react'
import '../Scss/servicesPage.scss'
import reactB from '../Components/Assets/iconblue/reactb.png'
import nextB from '../Components/Assets/iconblue/next.png'
import htmlB from '../Components/Assets/iconblue/html.png'
import cssB from '../Components/Assets/iconblue/css.png'
import jsB from '../Components/Assets/iconblue/js.png'
import mongoB from '../Components/Assets/iconblue/mongo.png'
import scssB from '../Components/Assets/iconblue/scss.png'
import nodeB from '../Components/Assets/iconblue/node.png'
import reduxB from '../Components/Assets/iconblue/redux.png'
import figmaB from '../Components/Assets/iconblue/figma.png'
import muiB from '../Components/Assets/iconblue/mui.png'
import tailwindB from '../Components/Assets/iconblue/tailwind.png'
import githubB from '../Components/Assets/iconblue/github.png'
import gitlabB from '../Components/Assets/iconblue/gitlab.png'
import DetailsCard from '../Components/DetailsCard/DetailsCard.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import UiImg from '../Components/Assets/Images/uiux.png'
import { faBrush,faLightbulb,faBinoculars,faSwatchbook, faLaptopCode, faBug, faCloudArrowUp, faGears} from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet-async'

const UiUx = () => {
  return (

<>
<Helmet>
    <title>
    UI/UX Design and Development Services - DevEclipse
    </title>
    <meta name='description' content='We offer best-in-class UI/UX Design and Development Services to improve your web and mobile apps that keeps your audience engaged.' />
    <link rel='canonical' href='/services/ui-ux-design' />
   </Helmet>




    <div className="ui-page">
  <div className="custom-web-dev">
           <div className="services-page">
        <section className="hero_container services-hero"  >
        <div className="hero_wrapper">
        <div className="info_container">
            <p>Ui/Ux Design</p>
            
          <h2 className="hero_title">
         
          We Create <span id="hero_title_span" >Progress</span> by  <span id="hero_title_span" >Building</span> Experiences
          </h2>
          <p className="hero_info">
          We believe in building interactive web applications, To create experiences beyond our clients’ expectations.
          </p>
          <div>
          <button className="button_primary">
           Lets Talk
          </button>
        </div>
            </div>
            <div className="hero_img">
              
              <img src={UiImg} alt="" loading='lazy' height="100%" width="100%" />
            </div>
                
            </div>
      </section>
      <section className='service-card-section' >
        <div className="service-card-heading">
          <h3>What We <span className="services_span" >Do</span> </h3>
          <br/>
         
          <h4 className="service-card-info">We Design Your Imagination</h4>
          <br/> 
        </div>
        <div>
          <DetailsCard DetailTitle="Ui/Ux Design" DetailIcon={faBrush} DetailDescription="When it comes to a good website, the most important thing is its design and overall structure. A UX/UI design is what makes a website the most appealing, and most catchy yet interesting. With an amazing user experience and user interface, your website or app can do wonders, just by the look and feel of it which can easily attract your target audience.

We make sure to build high-quality designs that are interactive for your target market and capture them while engaging them on your website, and this all depends on the look and feel of your website. We have a team that gives their best to make your website look perfect. The execution of the design is smooth and according to your needs and demands. Our team works tirelessly to provide you with the best user interface, user experience, and customer experience." />
        </div>
     
      </section>
      <section className="software-dev-process">
        <h4 className="dev-process-heading">
          End to End Software Development Methodologies
          </h4>
          <br/>
          
          <div className="software-dev-process-flex">

         
          <div className="requirements method-width ">
          <h4>Phase.<span style={{color:"teal", fontSize:"3rem"}} >1</span></h4> 
            <h4 className="requirent-heading">
              <span style={{color:"teal", fontSize:"2rem"}} >Requiremnet Gethering</span> 
            </h4>
            <br/>
            <div className="requirments-icons icon-flex">
              <div className="icon1"><FontAwesomeIcon icon={faLightbulb} size="2x" />
            <h5 className="icon-heading">Ideation</h5></div>
              <div className="icon1"><FontAwesomeIcon icon={faBinoculars} size="2x" />
            <h5 className="icon-heading">Stratagy</h5></div>
              <div className="icon1"><FontAwesomeIcon icon={faSwatchbook} size="2x" />
            <h5 className="icon-heading">Architecture</h5></div>
            
            </div>
            <div className="requirments-list list-line-height">
              <li>Work Breakdown Structure</li>
              <li>Project Plan</li>
              <li>Project Budget</li>
              <li>Requirements Docs</li>
              <li>Use Cases</li>
              <li>User Stories</li>
            </div>

          </div>
          <div className="design-development method-width">
          <h4>Phase.<span style={{color:"teal", fontSize:"3rem"}} >2</span></h4>
          <h4 className="requirent-heading ">
            <span style={{color:"teal", fontSize:"2rem"}} >Design & Development</span>
              
            </h4>
            <br/>
          <div className="design-icons icon-flex">
          <div className="icon1"><FontAwesomeIcon icon={faBrush} size="2x" />
            <h5 className="icon-heading">Design</h5></div>
              <div className="icon1"><FontAwesomeIcon icon={faLaptopCode} size="2x" />
            <h5 className="icon-heading">Development</h5></div>
              <div className="icon1"><FontAwesomeIcon icon={faBug} size="2x" />
            <h5 className="icon-heading">Testing</h5></div>
          </div>
          <div className="design-list list-line-height">
          
              <li>Low-Fi Design</li>
              <li>Hi-FI Design</li>
              <li>User Experience Design</li>
              <li>Source Code</li>
              <li>Compiled Code</li>
              <li>Code Documentation</li>
          </div>
          </div>
          <div className="delivery-support method-width ">
          <h4>Phase.<span style={{color:"teal", fontSize:"3rem"}} >3</span></h4>
          <h4 className="requirent-heading">
          <span style={{color:"teal", fontSize:"2rem"}} >Delivery & Support</span>
              
            </h4>
            <br/>
          <div className="delivery-icons icon-flex">
          <div className="icon1"><FontAwesomeIcon icon={faCloudArrowUp} size="2x" />
            <h5 className="icon-heading">Release</h5></div>
              <div className="icon1"><FontAwesomeIcon icon={faGears} size="2x" />
            <h5 className="icon-heading">Support</h5></div>
              <div className="icon1"><FontAwesomeIcon  size="2x" />
            <h5 className="icon-heading"></h5></div>
          </div>
          <div className="delivery-list list-line-height">
          <li>Release Management</li>
              <li>Change Management</li>
              <li>User Docs and Training</li>
              <li>Scheduled Maintenance</li>
              <li>Adaptive Maintenance</li>
              <li>Software Roadmap</li>
          </div>
          </div>
          </div>
       
      </section>
      <section className="tech-stacks">
      <h3>Technical <span className="services_span" >Experties</span> </h3>
      <br/>
        <h4 className="dev-process-heading">
        Tech Stacks For Effective & Up-To-Date Web Apps
          </h4>
          <div className="stacks-container-flex">
            <div className="tech">
              <img src={htmlB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                Html
              </h4>
            </div>
            <div className="tech">
              <img src={cssB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                Css
              </h4>
            </div>
            <div className="tech">
              <img src={jsB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                Js
              </h4>
            </div>
            <div className="tech">
              <img src={reactB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                React
              </h4>
            </div>
            <div className="tech">
              <img src={reduxB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
               Redux
              </h4>
            </div>
            <div className="tech">
              <img src={reactB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                React Native
              </h4>
            </div>
            <div className="tech">
              <img src={nextB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
              </h4>
            </div>
            <div className="tech">
              <img src={mongoB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                Mongo DB
              </h4>
            </div>
            <div className="tech">
              <img src={nodeB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                Node js
              </h4>
            </div>
            <div className="tech">
              <img src={scssB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                Scss
              </h4>
            </div>
            <div className="tech">
              <img src={muiB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                Material UI
              </h4>
            </div>
            <div className="tech">
              <img src={tailwindB} alt="" loading='lazy' />
              <br/>
              <br/>
              <br/>
              <h4 className="stack-icon-heading">
                Tailwind
              </h4>
            </div>
            <div className="tech">
              <img src={figmaB} alt="" loading='lazy' />
              <br/><br/>
              <h4 className="stack-icon-heading">
                Figma
              </h4>
            </div>
            <div className="tech">
              <img src={githubB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                GitHub
              </h4>
            </div>
            <div className="tech">
              <img src={gitlabB} alt="" loading='lazy' />
              <h4 className="stack-icon-heading">
                GitLab
              </h4>
            </div>
          </div>

      </section>
    </div>
    </div>
    </div>
    </>
  )
}

export default UiUx