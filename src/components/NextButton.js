import "./css/NextButton.css";

function NextButton({ clickEvent }) {
	return (
		<div>
			<button className="NextBtn" onClick={clickEvent}>
				다음
			</button>
		</div>
	);
}

export default NextButton;
