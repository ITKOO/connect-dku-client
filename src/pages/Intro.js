import React from "react";
import "../css/Intro.css";
import NextButton from "../components/NextButton";
import Avatar from "../components/Avatar";

function Intro() {
  const images = [
    "/img/profile1.jpg",
    "/img/profile2.png",
    "/img/profile3.png",
    "/img/profile4.png",
    "/img/profile5.png",
    "/img/profile6.png",
    "/img/profile7.png",
    "/img/profile8.png",
  ];

  return (
    <div className="App Intro">
      <div className="Intro title">
        <div className="Intro-greeting sub">환영해요! 지투님</div>
        <div className="Intro-greeting main">편리하고 빠른 멘토멘티 매칭</div>
      </div>
      <p className="Intro description">
        여러 학생들이 커넥트 DKU를 통해
        <p className="Intro description-sub">멘토 매칭을 하고 있어요</p>
      </p>
      <div className="slider">
        <div className="profiles">
          {images.map((source, idx) => (
            <Avatar ImageSrc={source}/>
          ))}
          {images.map((source, idx) => (
            <Avatar ImageSrc={source}/>
          ))}
        </div>
      </div>
      <div className="NextBtn">
        <NextButton/>
      </div>
    </div>
  );
}

export default Intro;
