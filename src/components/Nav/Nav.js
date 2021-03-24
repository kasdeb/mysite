import "./Nav.css";
import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import { headShake } from "react-animations";

function Nav() {
  const styles = {
    pulse: {
      ":hover": {
        animation: "x 1s",
        animationName: Radium.keyframes(headShake, "headShake"),
      },
    },
  };
  return (
    <div className="nav_wrapper">
      <div className="nav_menu">
        <ul>
          <Link to="/">
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font">My work</span>
            </StyleRoot>
          </Link>
          <Link to="/recent-work">
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font">Recent Work</span>
            </StyleRoot>
          </Link>
        </ul>
      </div>
      <div className="nav_menu">
        <ul>
          <Link to="/profile">
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font">Profile</span>
            </StyleRoot>
          </Link>
          <Link to="/contact">
            <StyleRoot style={styles.pulse}>
              <span className="righteous-font">Contact</span>
            </StyleRoot>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
