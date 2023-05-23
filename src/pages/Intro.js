import React from "react";
import "../css/Intro.css";
import Avatar from "../components/Avatar";
import {Link} from "react-router-dom";

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
    <div className="page ftM scrollNone">
      <div className="intro">
        <p className="boldTxt textCenter wideLineHeight lightGrayTxt ftLg">
          환영해요! 지투님
        </p>
        <p className="boldTxt textCenter wideLineHeight ftLg">
          편리하고 빠른 멘토멘티 매칭
        </p>

        <p className="textCenter blueTxt ftSm boldTxt">
          여러 학생들이 커넥트 DKU를 통해
          <br/>
          멘토 매칭을 하고 있어요.
        </p>

        <div className="profiles">
          {images.map((source, idx) => (
            <Avatar ImageSrc={source}/>
          ))}
          {images.map((source, idx) => (
            <Avatar ImageSrc={source}/>
          ))}
        </div>

        <Link to="/signup">
          <button className="btnPrimary bottomBtn">다음</button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
