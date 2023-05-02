import React from "react";
import "../css/Intro.css";
import NextButton from "../components/NextButton";
import Avatar from "../components/Avatar";
import { useEffect } from "react";

function Intro() {
	// 사용자 접속 시 사용자의 뷰포트 높이 계산후 css 변수에 저장
	function setScreenSize() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	}

	useEffect(() => {
		setScreenSize();
	});

	const images = [
		"/img/profile1.jpg",
		"/img/profile2.png",
		"/img/profile3.png",
		"/img/profile4.png",
		"/img/profile5.png",
		"/img/profile6.png",
		"/img/profile7.png",
		"/img/profile8.png",
	];

	return (
		<div className="App Intro">
			<div className="Intro title">
				<div className="Intro-greeting sub">환영해요! 지투님</div>
				<div className="Intro-greeting main">편리하고 빠른 멘토멘티 매칭</div>
			</div>
			<p className="Intro description">
				여러 학생들이 커넥트 DKU를 통해
				<p className="Intro description-sub">멘토 매칭을 하고 있어요</p>
			</p>
			<div className="slider">
				<div className="profiles">
					{images.map((source, idx) => (
						<Avatar ImageSrc={source} />
					))}
					{images.map((source, idx) => (
						<Avatar ImageSrc={source} />
					))}
				</div>
			</div>
			<div className="NextBtn">
				<NextButton />
			</div>
		</div>
	);
}

export default Intro;
