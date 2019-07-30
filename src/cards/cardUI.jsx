import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <a href="#">
        <div className="overflow">
          <img
            src={props.imgsrc}
            alt="Are you travelling alone?"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.desc}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
