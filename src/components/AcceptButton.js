import "./css/AcceptButton.css";

function AcceptButton({ clickEvent }) {
	return (
		<div>
			<button className="AcceptButton" onClick={clickEvent}>
				확인
			</button>
		</div>
	);
}

export default AcceptButton;
