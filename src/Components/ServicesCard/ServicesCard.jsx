import React from 'react'
import {Link} from 'react-router-dom'
import '../../Scss/servicesCard.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const ServicesCard = ({STitle,SDescription, SImage,Linkss}) => {
  return (
    <>
    
    
    <Link  to={Linkss} className="service-card">
        <FontAwesomeIcon icon={SImage} size="2x"  />
        <h4 className="service-card-title">{STitle}</h4>
        <p className="service-card-description">{SDescription}</p>
    </Link>
    
    
    </>
  )
}

export default ServicesCard