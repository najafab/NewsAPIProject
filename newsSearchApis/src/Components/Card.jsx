import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((currItems, index) => {
        return (
          <div className="card" key={index}>
            <img src={currItems.urlToImage} alt={currItems.title} />
            <div className="cardContent">
              <a href={currItems.urlToImage} className="cardTitle">
                {currItems.title}
              </a>
              <p className="cardDescription">{currItems.description}</p>
              <button className="readMoreButton">Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
