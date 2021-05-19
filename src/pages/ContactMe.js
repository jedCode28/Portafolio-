import emailjs from "emailjs-com";
import React from 'react';
import '../App.css';

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vegfs7l', 'template_iqd0hli', e.target, 'user_uJk94mnrPJx66EYU5TG7w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
  
  return(
    <div className="formTop">
      <div className="emailForm">
        <h1>Feel Free To Contact Me</h1>
        <form onSubmit={sendEmail}>
          <div className="formMid">
            <div className="innerForm">
              <input type="text" className="formControl" placeholder="Subject" name="subject"/>
            </div>
            <div className="innerForm">
              <input type="text" className="formControl" placeholder="Your Name" name="name"/>
            </div>
            <div className="innerForm">
              <input type="email" className="formControl" placeholder="Your Email Address" name="email"/>
            </div>
            <div className="innerForm">
              <textarea className="formControl" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
            </div>
            <div className="asapForm">
              <input type="submit" className="formButton" value="Send Message"></input>
              <h5 id="asap">I will reply ASAP!</h5>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ContactMe;