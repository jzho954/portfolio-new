import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/camp.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const EmailMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o64poel", "template_xuk9e9u", form.current, {
        publicKey: "RiW_GNYnMlAtQfL_f",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="email-me"id="email-me"> 
    <div className="form-container">
      <h1>Contact Me</h1>
      
      <div className="content-container">
       
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="submit-btn" type="submit" value="Send" />
        </form>
       
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={`image-container ${
                isVisible ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <img src={contactImg} alt="Contact" />
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
    </section>
  );
};

export default EmailMe;
