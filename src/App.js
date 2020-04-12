import React from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ContactUs from "./components/contact-us/contact-us.compoenent";
import Authentication from "./components/authentication/authentication.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/authentication"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Authentication />
            }
          />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
