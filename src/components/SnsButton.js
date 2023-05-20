import React from "react";
import './css/SnsButton.css';

const SnsButton = ({type}) => {
  const buttonColor = type === 'KAKAO' ? 'yellow' : 'green';
  const buttonImgUrl = type === 'KAKAO' ? 'kakao_logo.png' : 'naver_logo.png';
  const buttonText = type === 'KAKAO' ? '카카오' : '네이버';

  // TODO 추후 config 파일 분리
  const REST_API_KEY = 'e0c2a8eb689189ed5aee477f8677df37';
  const REDIRECT_URL = 'http://localhost:3000';
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  const loginWithKakao = () => {
    window.location.href = kakaoLoginUrl
  }

  return (
    <div>
      <button className={buttonColor} onClick={loginWithKakao}>
        <img src={`../../img/${buttonImgUrl}`} alt="sns 이미지"/>
        {buttonText}로 로그인하기
      </button>
    </div>
  );
}

export default SnsButton;