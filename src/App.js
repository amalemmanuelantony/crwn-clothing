// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import SignInAndSignUpPage from './pages/sign-in/SignIn';
import ShopPage from "./pages/shop/Shop";
import React from 'react';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
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
            <Route exact path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </div >
      </div >
    );
  }

}

export default App;
