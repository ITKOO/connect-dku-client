import React from "react";
import './css/SnsButton.css';

const SnsButton = ({type}) => {
  const buttonColor = type === 'KAKAO' ? 'yellow' : 'green';
  const buttonImgUrl = type === 'KAKAO' ? 'kakao_logo.png' : 'naver_logo.png';
  const buttonText = type === 'KAKAO' ? '카카오' : '네이버';

  return (
    <div>
      <button className={buttonColor}>
        <img src={`../../img/${buttonImgUrl}`} alt="sns 이미지"/>
        {buttonText}로 로그인하기
      </button>
    </div>
  );
}

export default SnsButton;