import React, { useState } from "react";
import "../css/SignUp.css";
import NextButton from "../components/NextButton";
import AcceptButton from "../components/AcceptButton";
import Modal from "react-modal";

function SignUp() {
	const [activeModal, setActiveModal] = useState(false);

	const mento_types = [
		"/img/mento_type1.png",
		"/img/mento_type2.png",
		"/img/mento_type3.png",
		"/img/mento_type4.png",
	];

	return (
		<div className="page ftM">
			<div className="signup">
				<p className="boldTxt textCenter wideLineHeight ftLg">
					멘토링 신청을 위해
					<br />
					몇가지 정보 입력이 필요해요!
				</p>
				<p className="grayTxt">
					한 번만 입력하면, 다음번에는 자동으로 가져올게요!
				</p>

				<form className="SignUp-form">
					<div>
						<input type="text" placeholder="  이름" className="input" />
					</div>
					<div>
						<input type="text" placeholder="  학번" className="input"></input>
					</div>
					<div className="input-gender">
						<input type="button" value="남자" className="input male" />
						<input type="button" value="여자" className="input female" />
					</div>
					<div>
						<input type="text" placeholder="  나이" className="input"></input>
					</div>
					<div className="input-phone">
						<input type="text" placeholder="  휴대폰 번호" className="input" />
						<input type="button" value="인증받기" className="input" />
					</div>
					<div>
						<input type="text" placeholder="  인증번호" className="input" />
					</div>
				</form>

				<button
					className="btnPrimary bottomBtn"
					onClick={() => {
						setActiveModal(true);
						console.log(activeModal);
					}}
				>
					다음
				</button>

				<Modal
					className="modal"
					isOpen={activeModal}
					onRequestClose={() => setActiveModal(false)}
					style={{
						overlay: {
							position: "fixed",
							height: "100%",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.3)",
						},
						content: {
							position: "absolute",
							top: "30%",
							left: 0,
							right: 0,
							bottom: 0,
							border: "1px solid #ccc",
							background: "#fff",
							overflow: "auto",
							WebkitOverflowScrolling: "touch",
							borderRadius: "20px 20px 0 0",
							outline: "none",
							padding: "20px",
						},
					}}
				>
					<div className="modal-title">원하는 멘토가 있나요?</div>
					<div className="mento-types">
						{mento_types.map((source, idx) => (
							<img src={source} className={idx} />
						))}
					</div>
					<AcceptButton clickEvent={() => setActiveModal(false)} />
				</Modal>
			</div>
		</div>
	);
}

export default SignUp;
