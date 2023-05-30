import "./css/GroupIndex.css";

function GroupIndex({ selectedIndex }) {
	return (
		<div className="index textLeft boldTxt unselectedTxt">
			<span
				className={
					selectedIndex === "mission"
						? "selectedIndex indexTxt"
						: "indexTxt"
				}
			>
				미션기록
			</span>
			<span
				className={
					selectedIndex === "talk"
						? "selectedIndex indexTxt"
						: "indexTxt"
				}
			>
				잡담
			</span>
			<span
				className={
					selectedIndex === "member"
						? "selectedIndex indexTxt"
						: "indexTxt"
				}
			>
				멤버
			</span>
		</div>
	);
}

export default GroupIndex;
