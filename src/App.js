// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import SignInAndSignUpPage from './pages/sign-in/SignIn';
import ShopPage from "./pages/shop/Shop";
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import CheckoutPage from './pages/checkout/Checkout';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      // console.log(user);
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(onSnapshot => {
          setCurrentUser({
            id: onSnapshot.id,
            ...onSnapshot.data()
          })
        });
      }
      // console.log("Reached");
      // console.log(userAuth)
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        {/* <HomePage /> */}
        < div >
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
          </Switch>
        </div >
      </div >
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
