import emailjs from "emailjs-com";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Radium, { StyleRoot } from "radium";
import { headShake, fadeInDown, bounceInUp } from "react-animations";

export default function ContactUs() {
  const [sendingEmail, setSendingEmail] = useState(false);
  let [loading, setLoading] = useState(false);

  const styles = {
    bounceInUp: {
      animation: "x 1s ",
      animationName: Radium.keyframes(bounceInUp, "bounceInUp"),
    },

    pulse: {
      width: "128px",
      ":hover": {
        animation: "x 1s infinite",
        animationName: Radium.keyframes(headShake, "headShake"),
      },
    },
    fadeIn: {
      animation: "x 1s ",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
  };

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_1fkg6hr",
        "template_0upwz27",
        e.target,
        "user_vlceGhlLWH1r9cftwlr8y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSendingEmail(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        {loading ? (
          <div className="clipLoader">
            <ClipLoader size={110} color={"#0d6bbd"} loading={loading} />
          </div>
        ) : (
          <form onSubmit={sendEmail}>
            <div className="row pt-3 mx-auto">
              <div className="col-8 form-group mx-auto">
                {sendingEmail ? (
                  <StyleRoot style={styles.fadeIn}>
                    <div className="thx-for-msg">
                      Thank you for your message!
                    </div>
                  </StyleRoot>
                ) : null}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="from_name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  required={true}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>

              <div className="col-8 pt-3 mx-auto">
                <StyleRoot style={styles.pulse}>
                  <input
                    type="submit"
                    className="btn btn-custom"
                    value="Send Message"
                  ></input>
                </StyleRoot>
              </div>
            </div>
            <StyleRoot style={styles.bounceInUp}>
              <div className="email-container righteous-font-ub">
                <a href="mailto:kasper.debicki92@gmail.com">
                  kasper.debicki92@gmail.com
                </a>
              </div>
            </StyleRoot>
          </form>
        )}
      </div>
    </div>
  );
}
