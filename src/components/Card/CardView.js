import { allCardsInfo } from "./allCards";
import { useParams } from "react-router-dom";
import "./CardView.css";

function CardView() {
  const idFromUrl = useParams();
  let viewedItem = allCardsInfo.find((x) => x.title === idFromUrl.id);

  return (
    <div className="wrapper">
      <div className="profile_headline">{viewedItem.h2}</div>

      <div className="card-view-container">
        <div className="card-view-left">
          <p className="product-description righteous-font">Introduction</p>
          {viewedItem.description.introduction}
          <p className="product-description righteous-font">Purpose</p>
          {viewedItem.description.purpose}
          <p className="product-description righteous-font">
            Major Product Functions
          </p>
          <ul className="ul-icons ul-icons-functions">
            {viewedItem.description.majorProductFunctions.map(
              (productFunction, index) => {
                return <li key={index}>{productFunction}</li>;
              }
            )}
          </ul>
          <div className="product-description righteous-font">
            Link: {""}
            <a href={viewedItem.description.webLink}>
              {viewedItem.description.webMessage}
            </a>
          </div>
        </div>
        <div className="card-view-right">
          <div className="cardImageSmall">
            <img
              className="cardImg"
              src={viewedItem.cardImageSmall.default}
              alt={viewedItem.h2}
            />
          </div>
        </div>

        <div className="flexcolumn"></div>
      </div>
      <div className="cardImageMedium">
        <img
          className="cardImg"
          src={viewedItem.cardImageMedium.default}
          alt={viewedItem.h2}
        />
      </div>
      <div className="cardImageBig">
        <img
          className="cardImg"
          src={viewedItem.cardImageBig.default}
          alt={viewedItem.h2}
        />
      </div>
    </div>
  );
}

export default CardView;
