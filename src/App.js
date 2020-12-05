import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Router>


        <Switch>
          <Route path="/saved">
            {/* saved components go here */}
          </Route>
          <Route path="/">
            {/* search componenets go here */}
            <Form />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
