import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <a href="#" class="design-less-a">
        <div className="overflow">
          <img
            src={props.imgsrc}
            alt="Are you travelling alone?"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <b className="card-title">{props.title}</b>
          <p className="card-text text-secondary">{props.desc}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
