import React from "react";
import "../css/SignUp.css";
import NextButton from "../components/NextButton";
import AcceptButton from "../components/AcceptButton";
import { useEffect, useState } from "react";
import Modal from "react-modal";

function SignUp() {
	// 사용자 접속 시 사용자의 뷰포트 높이 계산후 css 변수에 저장
	function setScreenSize() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}

	useEffect(() => {
		setScreenSize();
	});

	const [activeModal, setActiveModal] = useState(false);

	const mento_types = [
		"/img/mento_type1.png",
		"/img/mento_type2.png",
		"/img/mento_type3.png",
		"/img/mento_type4.png",
	];

	return (
		<div className="App SignUp">
			<p className="SignUp title">
				멘토링 신청을 위해
				<p>몇가지 정보 입력이 필요해요!</p>
			</p>
			<div className="SignUp description">
				한 번만 입력하면, 다음번에는 자동으로 가져올게요!
			</div>

			<form className="SignUp-form">
				<input type="text" placeholder="이름" className="input name" />
				<input
					type="text"
					placeholder="학번"
					className="input studentID"
				></input>
				<div className="input-gender">
					<input type="button" value="남자" className="input male" />
					<input type="button" value="여자" className="input female" />
				</div>
				<input type="text" placeholder="나이" className="input age"></input>
				<div className="input-phone">
					<input
						type="text"
						placeholder="휴대폰 번호"
						className="input phonenum"
					/>
					<input type="button" value="인증받기" />
				</div>
				<input type="text" placeholder="인증번호" className="input validnum" />
			</form>

			<div className="NextBtn">
				<NextButton
					clickEvent={() => {
						setActiveModal(true);
						console.log(activeModal);
					}}
				/>
			</div>

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
						top: "300px",
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
						<a>
							<img src={source} className={idx} />
						</a>
					))}
				</div>
				<AcceptButton clickEvent={() => setActiveModal(false)} />
			</Modal>
		</div>
	);
}

export default SignUp;
