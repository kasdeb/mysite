import { allCardsInfo } from "./allCards";
import { Fragment } from "react";
import Radium, { StyleRoot } from "radium";
import { zoomOut, zoomIn } from "react-animations";
import { Link } from "react-router-dom";
import { ReactComponent as RibbonNew } from "../../img/svg/ribbon_new.svg";

function Card() {
  const styles = {
    zoomOut: {
      animation: "x .3s linear 1 forwards",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
      ":hover": {
        animation: "x .3s linear 1 forwards",
        animationName: Radium.keyframes(zoomOut, "zoomOut"),
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <Fragment>
      {allCardsInfo.map((x, index) => {
        return (
          <StyleRoot key={index}>
            <Link
              to={{
                pathname: `my-work/${x.title}`,
              }}
            >
              <div
                key={index}
                className="card"
                style={{ border: "1px solid black", borderRadius: "7px" }}
              >
                <div className="hex-wrapper">
                  <div className="title_wrapper" style={styles.zoomOut}>
                    <h2>{x.h2}</h2>
                    <h3>{x.type}</h3>
                  </div>
                </div>
                <img
                  src={x.cardImageSmall.default}
                  className="cardImgInViewMode"
                  alt={x.h2}
                />
                {x.new ? (
                  <span className="ribbon-new">
                    <RibbonNew />
                  </span>
                ) : null}
              </div>
            </Link>
          </StyleRoot>
        );
      })}
    </Fragment>
  );
}

export default Card;
