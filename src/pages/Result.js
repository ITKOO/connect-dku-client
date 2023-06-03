import React from "react";
import "../css/Result.css";
import { Link } from "react-router-dom";

const Result = () => {
	return (
		<div className="page ftM">
			<div className="result">
				<p className="boldTxt textCenter wideLineHeight">
					지원님은 코천선배가 있는
					<br />
					<span className="blueTxt">1팀의 멘티</span>에요!
					<br />
				</p>
				<p className="ftTsm grayText mt2">
					팀끼리 미션을 수행해 회식비를 받아가세요 :)
				</p>
				<img src="/img/result-icon.png" alt="" className="resultIcon" />
				<div className="resultTeamType">
					<span className="ftXlg">코천 타입</span>
					<br />
					<span className="ft2Xlg boldTxt">1팀</span>
				</div>
				<Link to="/mission-posts">
					<button className="btnPrimary bottomBtn">
						1팀 그룹으로 이동
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Result;
