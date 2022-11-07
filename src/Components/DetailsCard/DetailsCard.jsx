import React from 'react'
import '../../Scss/detailsCard.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const DetailsCard = ({DetailTitle,DetailDescription,DetailIcon}) => {
  return (
    <div className="details-card">
      <div className="details-icon">
        <FontAwesomeIcon icon={DetailIcon} size="3x" />
      </div>
      <br/>
        <div className="details-title">
          {DetailTitle}
        </div>
        <br/>
        <div className="detail-description">
          {DetailDescription}
        </div>
    </div>
  )
}

export default DetailsCard