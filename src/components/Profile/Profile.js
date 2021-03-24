import { useState } from "react";
import "./Profile.css";
import { ReactComponent as HTML5 } from "../../img/svg/html5-logo.svg";
import { ReactComponent as CSS3 } from "../../img/svg/css3-logo.svg";
import { ReactComponent as JS } from "../../img/svg/js-logo.svg";
import { ReactComponent as REACT } from "../../img/svg/react-logo.svg";
import { ReactComponent as BOOTSTRAP } from "../../img/svg/bootstrap-logo.svg";
import { ReactComponent as JQUERY } from "../../img/svg/jquery-logo.svg";
import { ReactComponent as MARKETO } from "../../img/svg/marketo-logo.svg";
import { ReactComponent as SALESFORCE } from "../../img/svg/salesforce-logo.svg";
import { ReactComponent as VELOCITY } from "../../img/svg/velocity-logo.svg";

function Profile() {
  const [svg, setSvg] = useState("js");
  const height = "150px";
  const width = "150px";

  const onToggle = (e) => {
    setSvg(e.target.id);
  };

  return (
    <div className="wrapper">
      <div className="profile_headline profile_headline_sm">
        <span>
          HELLO. I’M KASPER, A WEB DEVELOPER AND AUTOMATION SPECIALIST.
        </span>
      </div>
      <div className="bio_container">
        <div className="bio-left">
          <span className="bio-header righteous-font">
            <strong>About me</strong>
          </span>
          My name is Kasper and I live in Poznan. I've always been interested in
          Information Technology. I still remember how on my first computer I
          was inspecting websites using browser’s developer tools to check how
          websites are built or what html tags someone used. Understanding how
          websites are built and having capability to change the code through
          developer tools gave me super powers that I really enjoyed. Even
          changing a background color of a website or font size was cool for me
          😉. I wanted to know more. That curiosity eventually led me to study
          IT technology in electrical school complex where I became an IT
          technician. It is where I built my first websites and I learned how to
          write my first programs. I used to spend a lot of time in front of my
          computers and that’s why at some point I decided I will not go to
          university related with IT industry. I came back to the IT industry
          when I discovered that I can earn money by doing what I like. From
          that moment I’m professionally connected with IT. I worked as IT
          Specialist in small businesses, after that I worked as a freelancer
          and now I work as automation specialist in corporation where I’m
          responsible for creating, executing, and managing global campaigns and
          digital assets (such as emails, web cards, pop-ups, websites etc.) I
          have experience in building websites/apps using JS/react/bootstrap.
          I’m a detail oriented person as I think details are what set a project
          apart from mediocre work. Every day I'm broadening my skill sets by
          being exposed to new opportunities and challenges. It has made me a
          more confident and experienced professional. I spend my spare time
          bringing new ideas into browser and exercising.
        </div>
        <div className="bio-right">
          <div className="skill-container">
            <span className="exp-header righteous-font">
              <strong>Main skills</strong>
            </span>
            <div className="skillset">
              <ul className="ul-icons">
                <li onMouseEnter={onToggle} id="js">
                  JavaScript
                </li>
                <li onMouseEnter={onToggle} id="react">
                  React
                </li>
                <li onMouseEnter={onToggle} id="html5">
                  HTML
                </li>
                <li onMouseEnter={onToggle} id="css3">
                  CSS
                </li>
                <li onMouseEnter={onToggle} id="bootstrap">
                  Bootstrap
                </li>
                <li onMouseEnter={onToggle} id="jquery">
                  jQuery
                </li>
                <li onMouseEnter={onToggle} id="marketo">
                  Marketo
                </li>
                <li onMouseEnter={onToggle} id="salesforce">
                  Salesforce
                </li>
                <li onMouseEnter={onToggle} id="velocity">
                  Velocity
                </li>
              </ul>

              <div className="svg-container">
                {svg === "js" ? (
                  <JS width={width} height={height} />
                ) : svg === "react" ? (
                  <REACT width={width} height={height} />
                ) : svg === "html5" ? (
                  <HTML5 width={width} height={height} />
                ) : svg === "css3" ? (
                  <CSS3 width={width} height={height} />
                ) : svg === "bootstrap" ? (
                  <BOOTSTRAP width={width} height={height} />
                ) : svg === "jquery" ? (
                  <JQUERY width={width} height={height} />
                ) : svg === "marketo" ? (
                  <MARKETO width={width} height={height} />
                ) : svg === "salesforce" ? (
                  <SALESFORCE width={width} height={height} />
                ) : svg === "velocity" ? (
                  <VELOCITY width={width} height={height} />
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <span className="exp-header righteous-font">
              <strong>Experience</strong>
            </span>
            <ul className="ul-icons ul-icons-functions">
              <li>
                Automation Specialist &mdash; Franklin Templeton Investments
              </li>
              <li>Self-employed &mdash; Frontend Developer</li>
              <li>Ekotrade &mdash; IT Specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
