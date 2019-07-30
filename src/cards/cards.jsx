import React, { Component } from "react";
import Card from "./cardUI";
import ImageTravelAlone from "../assets/travelling-alone.jpg";
import ImageTravelParents from "../assets/travel-parents.jpg";
import travelBuddies from "../assets/travel-buddies.jpg";
import canAccompany from "../assets/can-accompany.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <Card
              imgsrc={ImageTravelAlone}
              title="Travelling alone?"
              desc="Do you need a company for your travel?"
            />
          </div>
          <div className="col-md-3">
            <Card
              imgsrc={ImageTravelParents}
              title="Parents travelling"
              desc="Are your parents seeking for a travel?"
            />
          </div>
          <div className="col-md-3">
            <Card
              imgsrc={canAccompany}
              title="I can accompany"
              desc="Like to accompany others?"
            />
          </div>
          <div className="col-md-3">
            <Card
              imgsrc={travelBuddies}
              title="Search your accompany"
              desc="Want to search & select your company?"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
