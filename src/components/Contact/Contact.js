import "./Contact.css";
import ContactUs from "./ContactForm";

function Contact() {
  return (
    <div className="wrapper">
      <div
        className="profile_headline profile_headline_sm"
        style={{ textAlign: "center" }}
      >
        <span>CONTACT ME</span>
      </div>
      <ContactUs />
    </div>
  );
}

export default Contact;
