import React, { useState } from "react";
import "../css/SignUp.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function SignUp() {
	const [activeModal, setActiveModal] = useState(false);
	const [name, setName] = useState("");
	const [studentId, setStudentId] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [mentoType, setMentoType] = useState("");
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const mento_types = [
		"/img/mento_type1.png",
		"/img/mento_type2.png",
		"/img/mento_type3.png",
		"/img/mento_type4.png",
	];

	const mentoTypeValues = [
		"코천 선배",
		"인싸 선배",
		"활동러 선배",
		"모범생 선배",
	];

	const validateInputs = () => {
		if (!name.trim()) {
			alert("이름을 입력해주세요.");
			return false;
		}
		if (!/^\d{8}$/.test(studentId)) {
			alert("학번은 8자리 숫자로 입력해주세요.");
			return false;
		}
		if (!gender) {
			alert("성별을 선택해주세요."); // 성별 선택 검사 추가
			return false;
		}
		if (!/^\d{1,2}$/.test(age) || age < 1 || age > 99) {
			alert("나이는 1에서 99 사이의 숫자로 입력해주세요.");
			return false;
		}
		if (!/^\d{11}$/.test(phoneNumber)) {
			alert("휴대폰 번호는 11자리 숫자로 입력해주세요.");
			return false;
		}
		if (!/^\d+$/.test(verificationCode)) {
			alert("인증번호는 숫자로 입력해주세요.");
			return false;
		}
		return true;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateInputs()) {
			setActiveModal(true);
		}
	};

	return (
		<div className="page ftM">
			<div className="signup">
				<p className="boldTxt textCenter wideLineHeight ftLg">
					멘토링 신청을 위해
					<br />몇 가지 정보 입력이 필요해요!
				</p>
				<p className="grayTxt">
					한 번만 입력하면, 다음 번에는 자동으로 가져올게요!
				</p>

				<form className="SignUp-form" onSubmit={handleSubmit}>
					<div>
						<input
							type="text"
							placeholder="  이름"
							className="input"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="  학번"
							className="input"
							value={studentId}
							onChange={(event) =>
								setStudentId(event.target.value)
							}
						></input>
					</div>
					<div className="input-gender">
						<input
							type="button"
							value="남자"
							className="input male"
							onClick={() => setGender("남자")}
						/>
						<input
							type="button"
							value="여자"
							className="input female"
							onClick={() => setGender("여자")}
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="  나이"
							className="input"
							value={age}
							onChange={(event) => setAge(event.target.value)}
						></input>
					</div>
					<div className="input-phone">
						<input
							type="text"
							placeholder="  휴대폰 번호"
							className="input"
							value={phoneNumber}
							onChange={(event) =>
								setPhoneNumber(event.target.value)
							}
						/>
						<input
							type="button"
							value="인증받기"
							className="input"
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="  인증번호"
							className="input"
							value={verificationCode}
							onChange={(event) =>
								setVerificationCode(event.target.value)
							}
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="  멘토타입"
							className="input"
							value={mentoTypeValues[mentoType]}
							readOnly
						/>
					</div>
				</form>

				<button
					className="btnPrimary bottomBtn stickyBtn"
					onClick={handleSubmit}
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
							top: "35%",
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
					<div className="boldTxt wideLineHeight ftLg stickyTxt">
						원하는 멘토가 있나요?
					</div>
					<div className="mento-types">
						{mento_types.map((source, idx) => (
							<img
								src={source}
								className={
									idx === selectedImageIndex ? "selected" : ""
								}
								onClick={() => {
									setSelectedImageIndex(idx);
									setMentoType(idx);
								}}
							/>
						))}
					</div>
					<Link to="/standby">
						<button
							className="btnPrimary bottomBtn stickyBtn"
							onClick={() => {
								setActiveModal(false);
							}}
						>
							확인
						</button>
					</Link>
				</Modal>
			</div>
		</div>
	);
}

export default SignUp;
