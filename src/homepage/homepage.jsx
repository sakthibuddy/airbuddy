import React, { Component } from "react";
import Card from "../cards/cardUI";
import Header from "../header/header";
import ImageTravelAlone from "../assets/travelling-alone.jpg";
import ImageTravelParents from "../assets/travel-parents.jpg";
import travelBuddies from "../assets/travel-buddies.jpg";
import canAccompany from "../assets/can-accompany.jpg";
import Footer from "../footer/footer";
import "./homepage.css";

class Homepage extends Component {
  render() {
    return (
      <fragment>
        <Header />
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-center">
            <Card
              windowSize="col-md-3"
              imgsrc={ImageTravelParents}
              title="Parents travelling? Need company?"
            />
            <Card
              windowSize="col-md-3"
              imgsrc={ImageTravelAlone}
              title="Travelling alone? Need company?"
            />
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-center">
            <Card
              windowSize="col-md-3"
              imgsrc={travelBuddies}
              title="Want to search & select your company?"
            />
            <Card
              windowSize="col-md-3"
              imgsrc={canAccompany}
              title="Like to give company?"
            />
          </div>
        </div>
        <Footer />
      </fragment>
    );
  }
}

export default Homepage;
