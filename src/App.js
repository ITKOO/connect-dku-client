import './App.css';
import {useEffect} from "react";

function App() {


  // 사용자 접속 시 사용자의 뷰포트 높이 계산후 css 변수에 저장
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App Login">
      <div className="Login-title">
        <p className="Login-title-sub">단국대학교 SW융대<br/>학생들을 위한</p>
        <p>커넥트<br/>DKU</p>
      </div>
      <div className="Login-icon">
        <img src="img/login-icon.png" alt=""/>
      </div>
      <div className="Login-buttons">
        <button className="kakao" type="button">
          <img src="img/kakao_logo.png"/>
          카카오로 로그인
        </button>
        <button className="naver" type="button">
          <img src="img/naver_logo.png"/>
          네이버로 로그인
        </button>
      </div>
    </div>
  );
}

export default App;
