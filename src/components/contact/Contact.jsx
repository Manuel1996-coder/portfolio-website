import "./contact.css";
import Phone from "../../img/phone-black.png";
import Email from "../../img/email-black.png";
import Address from "../../img/address-black.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9pyw94b",
        "template_bx7ly29",
        formRef.current,
        "Kw3ytOTp4N1my3q9q"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Let's discuss your project </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +49 176 55609001
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              manuel@worlitzer.de
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Sternweg 6, 85598 Baldham, Germany
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            ></input>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            ></input>
            <textarea className="test-area" style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Thank you."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
