import React from 'react'
import '../../Scss/testimonialCard.scss';

const TestimonialCard = ({Name, Info,Image,Rating}) => {
  return (
    <div className="t_card" >
        <div className="t_img_container" >
        <div className="t_card_image">
            <img src={Image}  alt="" width="100%" height="100%" style={{borderTopLeftRadius:"0.2rem",borderTopRightRadius:"0.2rem"}} loading="lazy"/>
        </div>
        <div className="t_icon">
        <h4 style={{marginTop:"-3rem"}}>Rating <br/> <br/> <strong>{Rating}</strong></h4>
        </div>
        </div>
        <div className="t_card_info">
            <h4 style={{color:"rgb(39, 160, 134)"}}>{Name}</h4>
            <br/>
            <p>{Info}</p>
        </div>
    </div>
  )
}

export default TestimonialCard