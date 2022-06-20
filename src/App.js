// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>



    </div>
  );
}

export default App;
