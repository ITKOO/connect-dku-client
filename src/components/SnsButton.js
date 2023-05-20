import React from "react";
import './css/SnsButton.css';
import {Link} from "react-router-dom";

const SnsButton = ({type}) => {
  const isKakao = type === 'KAKAO';
  const buttonColor = isKakao ? 'yellow' : 'green';
  const buttonImgUrl = isKakao ? 'kakao_logo.png' : 'naver_logo.png';
  const buttonText = isKakao ? '카카오' : '네이버';
  const linkPage = isKakao ? '' : '/standby';

  // TODO 추후 config 파일 분리
  const REST_API_KEY = 'e0c2a8eb689189ed5aee477f8677df37';
  const REDIRECT_URL = 'http://localhost:3000';
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  //TODO 임시 테스트 코드
  const loginWithSNS = () => {
    if (isKakao) {
      window.location.href = kakaoLoginUrl
    }
  }

  return (
    <div>
      <Link to={linkPage}>
        <button className={`sns-button ${buttonColor}`} onClick={loginWithSNS}>
          <img src={`../../img/${buttonImgUrl}`} alt="sns 이미지"/>
          {buttonText}로 로그인하기
        </button>
      </Link>
    </div>
  );
}

export default SnsButton;