import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Router>


        <Switch>
          <Route exact path="/saved">
            {/* saved components go here */}
          </Route>
          <Route exact path="/" component= {Search}>
            {/* search componenets go here */}
            
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
