import React from "react";
import "../css/Write.css";
import { Link } from "react-router-dom";

const Write = () => {
	const missionList = [
		"멘토멘티가 함께 저녁먹기",
		"광교 호수공원 산책하기",
		"멘티들이 멘토에게 커피한잔 사주기",
		"모든 팀원이 함께 밤새 공부하기",
	];
	return (
		<div className="pageNoPadding ftM">
			<div className="write">
				<div className="headerWrite">
					<Link to="/mission-posts">
						<button className="noneBorder regularTxt ftM">
							취소
						</button>
					</Link>
					<select name="postType" className="noneBorder ftM boldTxt">
						<option value="미션기록">미션기록</option>
						<option value="잡담">잡담</option>
					</select>
					<button className="noneBorder regularTxt blueTxt ftM">
						등록
					</button>
				</div>
				<div className="contentHeaderWrite">
					<select
						name="missionType"
						className="ftM lightGrayTxt missionType"
					>
						<option value="default">미션 선택</option>
						{missionList.map((mission, idx) => (
							<option value={idx}>{mission}</option>
						))}
					</select>
					<div className="checkboxSet">
						<input type="checkbox" name="photoExistence" />
						<label
							for="photoExistence"
							className="checkboxLabel ftSm"
						>
							인증사진
						</label>
					</div>
				</div>
				<div className="writeContentDiv ">
					<textarea
						placeholder="인증사진 첨부 및 내용을 기입해주세요"
						className="writeContent noneBorder ftM"
					></textarea>
				</div>

				<div className="medias ftTsm">
					<span>사진</span>
					<span>동영상</span>
					<span>스트리밍</span>
					<span>설문조사</span>
				</div>
			</div>
		</div>
	);
};

export default Write;
