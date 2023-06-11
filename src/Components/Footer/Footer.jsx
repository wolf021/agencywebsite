import React, { useRef } from "react"
import "../../Scss/footer.scss"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"
import Logo from "../Assets/Images/deveclipselogo.png"
import Facebook from "../Assets/Images/facebook.png"
import Whatsapp from "../Assets/Images/whatsapp.png"
import Gmail from "../Assets/Images/gmail.png"

const Footer = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_1cy2l06",
        "template_zlwnyet",
        form.current,
        "f9mlc2XpJXwz0bUxr"
      )
      .then(
        (result) => {
          console.log(result.text)
          alert("Your Email Has been send to DevEclipse")
        },
        (error) => {
          console.log(error.text)
          alert("Something went wrong retry")
        }
      )
  }
  return (
    <footer className="footer" id="contact">
      <div></div>
      <br />
      <section className="contact-form">
        <h3 className="contactus-heading">
          <span style={{ color: "teal" }}>Contact</span> Us
        </h3>
        <br />
        <h4 className="contact-sub-heading">Let's Get Started!</h4>
        <div className="contact-form-wrapper">
          <div className="contact-form-container">
            <form action="submit" ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" name="user_email" placeholder="Email" />
              <textarea
                name="message"
                id="Message"
                placeholder="Message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="button_primary" value="send" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact-form-info">
            <div className="contact-logo">
              <img
                src={Logo}
                alt="deveclipse logo"
                height="100%"
                width="100%"
                loading="lazy"
              />
            </div>

            <div className="contact-number">
              <h4 className="number-heading"></h4>

              <h4 className="number"></h4>
            </div>
            <br />
            <div className="contact-email">
              <h4 className="email-heading">Address</h4>d
              <h4 className="email">17 Manor Road Medford NY,11763</h4>
            </div>
            <br />
            <div className="contact-email">
              <h4 className="email-heading">Email</h4>

              <h4 className="email">devonictek@gmail.com</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-container">
        <div className="navlinks_container">
          <div className="main-links">
            <ul className="navlinks" style={{ padding: "2rem 0rem" }}>
              <h3>Services</h3>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/services/custom-web-development"
              >
                <li id="nav_link">Custom Web Development</li>
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/services/custom-app-development"
              >
                <li id="nav_link">Custom App Development</li>
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/services/ui-ux-design"
              >
                <li id="nav_link">Ui/Ux Design</li>
              </Link>
            </ul>
          </div>
          <div className="main-links">
            <ul className="navlinks" style={{ padding: "2rem 0rem" }}>
              <h3>Main Links</h3>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                <li id="nav_link">Home</li>
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/services"
              >
                <li id="nav_link">Services</li>
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/about"
              >
                <li id="nav_link">Company</li>
              </Link>
            </ul>
          </div>

          <div className="social">
            <br />
            <a href="https://www.facebook.com/profile.php?id=100067988365451">
              <div
                className="facebook"
                style={{ height: "3rem", width: "3rem" }}
              >
                <img src={Facebook} alt="" height="100%" width="100%" />
              </div>
            </a>
            <br />
            <a href="mailto:tayyab9021@gmail.com?subject=SweetWords&body=hi, I have a Query about your web services.!">
              <div className="gmail" style={{ height: "3rem", width: "3rem" }}>
                <img src={Gmail} alt="" height="100%" width="100%" />
              </div>
            </a>
            <br />
            <a href="https://api.whatsapp.com/send?phone=+447899456642">
              <div
                className="facebook"
                style={{ height: "3rem", width: "3rem" }}
              >
                <img src={Whatsapp} alt="" height="100%" width="100%" />
              </div>
            </a>

            <br />
          </div>
        </div>
        <div className="company_banner">
          DevEclipse © 2022 | All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
