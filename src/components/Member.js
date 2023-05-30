import Avatar from "./Avatar";
import "./css/Member.css";

function Member({ ImageSrc, name, isMento, assignDate }) {
	const gap5px = {
		marginRight: "5px",
	};
	const gap3 = {
		marginLeft: "3%",
	};

	return (
		<div className="member">
			<Avatar ImageSrc={ImageSrc} size="25%" />
			<div className="textLeft textMiddle " style={gap3}>
				<div className="paddingText">
					<span className=" boldTxt" style={gap5px}>
						{name}
					</span>
					<span>{isMento === true ? "멘토" : "멘티"}</span>
				</div>
				<div className="paddingText unselectedTxt ftTsm">
					{assignDate}
				</div>
			</div>
		</div>
	);
}

export default Member;
