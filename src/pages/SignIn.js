import React from "react";
import SnsButton from "../components/SnsButton";
import '../css/SignIn.css';

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="SnsButtons">
        <SnsButton type="KAKAO"/>
        <SnsButton type="NAVER"/>
      </div>
    </div>
  );
};

export default SignIn;