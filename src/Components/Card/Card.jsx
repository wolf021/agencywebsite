import React from 'react'
import '../../Scss/card.scss'


const Card = ({Image, Title,Info }) => {
  return (
    <div className="card" >
        <div className="card_image">
            <img src={Image} alt="" width="100%" height="100%" style={{borderTopLeftRadius:"0.2rem",borderTopRightRadius:"0.2rem"}} loading="lazy" />
        </div>
        <div className="card_info">
            <h4>{Title}</h4>
            <br/>
            <p>{Info}</p>
        </div>
    </div>
  )
}

export default Card