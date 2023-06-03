import "./css/GroupIndex.css";
import { Link } from "react-router-dom";

function GroupIndex({ selectedIndex }) {
	return (
		<div className="index textLeft boldTxt unselectedTxt">
			<Link to="/mission-posts" className="unselectedTxt">
				<span
					className={
						selectedIndex === "mission"
							? "selectedIndex indexTxt"
							: "indexTxt"
					}
				>
					미션기록
				</span>
			</Link>
			<Link to="/chatter-posts" className="unselectedTxt">
				<span
					className={
						selectedIndex === "chatter"
							? "selectedIndex indexTxt"
							: "indexTxt"
					}
				>
					잡담
				</span>
			</Link>
			<Link to="/members" className="unselectedTxt">
				<span
					className={
						selectedIndex === "member"
							? "selectedIndex indexTxt"
							: "indexTxt"
					}
				>
					멤버
				</span>
			</Link>
		</div>
	);
}

export default GroupIndex;
