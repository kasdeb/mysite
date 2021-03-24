import "./Footer.css";
import { ReactComponent as Kasdeb } from "../../img/svg/kasdeb.svg";

function Footer() {
  return (
    <div className="footer_wrapper">
      <span className="footer_note">&copy; 2021 by Kasper Debicki</span>
      <span className="footer_kasdeb">
        <Kasdeb height="10" width="45" />
      </span>
    </div>
  );
}

export default Footer;
