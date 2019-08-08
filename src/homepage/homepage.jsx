import React, { Component } from "react";
import Card from "../cards/cardUI";
import Header from "../header/header";
import ImageTravelAlone from "../assets/travelling-alone.jpg";
import ImageTravelParents from "../assets/travel-parents.jpg";
import travelBuddies from "../assets/travel-buddies.jpg";
import canAccompany from "../assets/can-accompany.jpg";
import thinking from "../assets/thinking.jpg";
import Footer from "../footer/footer";

class Homepage extends Component {
  render() {
    return (
      <fragment>
        <Header />
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-center">
            <Card
              windowSize="col-md-2"
              imgsrc={ImageTravelParents}
              title="Parents travelling"
              desc="Are your parents seeking for a travel?"
            />
            <Card
              windowSize="col-md-2"
              imgsrc={ImageTravelAlone}
              title="Travelling alone?"
              desc="Do you need a company for your travel?"
            />
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-center">
            <Card
              windowSize="col-md-2"
              imgsrc={canAccompany}
              title="I can accompany"
              desc="Like to accompany others?"
            />
            <Card
              windowSize="col-md-2"
              imgsrc={travelBuddies}
              title="Search your accompany"
              desc="Want to search & select your company?"
            />
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-center">
            <Card
              windowSize="col-md-9"
              imgsrc={thinking}
              title="How it works?"
              desc="Interested to know how it works here?"
            />
          </div>
        </div>
        <Footer />
      </fragment>
    );
  }
}

export default Homepage;
