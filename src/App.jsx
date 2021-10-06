import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";

const App = (props) => {
  const contain = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const bodyHeight = document.body.scrollHeight;
  const [YOffset, setYOffset] = useState(0);
  // contain.current.scrollHeight

  const onScroll = () => {
    console.log(bodyHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="popInfo mainPage"></div>
        <div className="scrollContainer" data-scroll="true" ref={contain}>
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
