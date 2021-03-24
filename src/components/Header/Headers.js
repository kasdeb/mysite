import { ReactComponent as Kasdeb } from "../../img/svg/kasdeb.svg";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <div className="header_wrapper">
      <Kasdeb className="kasdeb-svg" />
      <Nav />
    </div>
  );
}

export default Header;
