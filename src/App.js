// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>



    </div>
  );
}

export default App;
