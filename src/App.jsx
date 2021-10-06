import { infinity } from "check-types";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";

const App = (props) => {
  const contain = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const s = window.pageYOffset / bodyHeight;
      if (s !== infinity) {
        contain.current.style.transform = `translate3d(0px, -${
          (contain.current.scrollHeight - document.querySelector(".App").clientHeight) * s
        }px, 0px)`;
      }
      console.log(contain.current.scrollHeight);
    };
    setBodyHeight(document.body.scrollHeight - document.querySelector(".App").clientHeight);
    window.addEventListener("scroll", onScroll, true);
  }, [bodyHeight]);

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
