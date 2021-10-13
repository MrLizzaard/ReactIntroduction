import React from "react";

const Main = (props) => {
  return (
    <>
      <div className="main m1">
        <div className="topTitle">
          FR
          <span className="medium">ONT</span>
          <span className="light">END</span>
        </div>
        <div className="bottomTitle">
          <span className="light">DEV</span>
          <span className="medium">ELO</span>
          PER
        </div>
        <div className="mainImg"></div>
        <div className="introduction">
          <span>WEB FRONTEND DEVELOPER</span>
          <br />
          <span>프론트엔드 개발자 김도형입니다.</span>
        </div>
      </div>
      <div className="main m2"></div>
      <div className="main m3">maincontent</div>
      <div className="main m4">maincontent</div>
    </>
  );
};

export default Main;
