import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className={props.windowSize}>
      <div className="card shadow text-center">
        <a href="#" class="design-less-a">
          <img
            src={props.imgsrc}
            alt="Are you travelling alone?"
            className="card-img"
          />
          <div className="text-center card-body card-img-overlay">
            <b className="card-title">{props.title}</b>
            <p className="card-text">{props.desc}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
