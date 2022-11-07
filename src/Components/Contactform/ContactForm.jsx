import React from 'react'
import sou from './sound.mp3'

const ContactForm = () => {
  var sound = new Audio(sou)
  return (
    <div style={{backgroundColor:"black", height:"15rem", width:"40%"}} onMouseOver={function(){
        
          sound.play()
       
      
        
    }} >ContactForm</div>
  )
}

export default ContactForm