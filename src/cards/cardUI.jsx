import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className={props.windowSize}>
      <div className="card shadow text-center">
        <a href="#" class="design-less-a">
          <img src={props.imgsrc} className="card-img" />
          <div className="card-body card-img-overlay">
            <div className="card-title text-center">{props.title}</div>
            <p className="card-text">{props.desc}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
