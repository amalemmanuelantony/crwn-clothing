// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import SignInAndSignUpPage from './pages/sign-in/SignIn';
import ShopPage from "./pages/shop/Shop";
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      // console.log(user);
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(onSnapshot => {
          this.setState({
            currentUser: {
              id: onSnapshot.id,
              ...onSnapshot.data()
            }
          }, () => {
            // console.log(th is.state);
          });
        });
      }

      this.setState({ currentUser: userAuth });
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
