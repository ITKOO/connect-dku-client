import React from "react";
import '../css/StandBy.css';
import {Link} from "react-router-dom";

const StandBy = () => {
  return (
    <div className="page ftM">
      <div className="standby">
        <p className="boldTxt textCenter wideLineHeight">
          멘티 · 멘토 매칭을 위해<br/>
          <span className="blueTxt">커넥트 DKU봇</span>이<br/>
          열심히 일하고 있어요!
        </p>
        <p className="ftTsm grayText mt2 wideLineHeight">
          평균적으로 10~30분 정도가 소요돼요!<br/>
          조금만 기다려주세요 :)
        </p>
        <img src="/img/loading.gif" alt="" className="standbyLoading"/>
        <Link to="/result">
          <button className="btnPrimary bottomBtn">결과 확인하러 가기</button>
        </Link>
      </div>
    </div>
  );
};

export default StandBy;