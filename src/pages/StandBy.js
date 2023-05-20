import React from "react";
import '../css/StandBy.css';

const StandBy = () => {
  return (
    <div className="page ftM">
      <div className="standby">
        <p className="boldTxt textCenter wideLineHeight">
          멘티 · 멘토 매칭을 위해<br/>
          <span className="blueTxt">커넥트 DKU봇</span>이<br/>
          열심히 일하고 있어요!
        </p>
        <img src="/img/loading.gif" alt="" className="standbyLoading"/>
        <button className="btnPrimary standbyBtn">결과 확인하러 가기</button>
      </div>
    </div>
  );
};

export default StandBy;