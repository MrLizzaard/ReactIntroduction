import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="popInfo mainPage"></div>
        <div className="scrollContainer" data-scroll="true">
          <div className="contentsWrap">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
