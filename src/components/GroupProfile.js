import "./css/GroupProfile.css";

function GroupProfile({ imageSrc, groupMajor, groupName, groupMembers }) {
	return (
		<>
			<div className="groupProfile">
				<img src={imageSrc} className="backgroundImg" />
				<div className="profileContent">
					<img src={imageSrc} className="profileImg" />
					<div className="whiteTxt contentTxt">
						<div className="major ftTsm">{groupMajor}</div>
						<div className="ftM boldTxt">{groupName}</div>
						<div className="ftTsm">{groupMembers} members</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default GroupProfile;
