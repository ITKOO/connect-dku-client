import "./css/GroupIntroduce.css";

function GroupIntroduce({ introducingText }) {
	return (
		<div class="ftSm introducingTxt">
			<div className="textLeft">
				<span className="icon">🤓</span> {introducingText}
			</div>
		</div>
	);
}

export default GroupIntroduce;
