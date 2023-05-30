import React from "react";
import "../css/Members.css";
import { Link } from "react-router-dom";
import GroupIndex from "../components/GroupIndex";
import Member from "../components/Member";

const Members = () => {
	const membersData = [
		{
			name: "구지원",
			isMento: false,
			ImageSrc: "/img/profile2.png",
			assignDate: "2023년 9월 9일 가입",
		},
		{
			name: "박현찬",
			isMento: true,
			ImageSrc: "/img/profile4.png",
			assignDate: "2023년 9월 9일 가입",
		},
		{
			name: "김준영",
			isMento: true,
			ImageSrc: "/img/profile1.jpg",
			assignDate: "2023년 9월 8일 가입",
		},
		{
			name: "윤태호",
			isMento: false,
			ImageSrc: "/img/profile3.png",
			assignDate: "2023년 9월 8일 가입",
		},
	];
	return (
		<div className="page ftM">
			<div className="members">
				<GroupIndex selectedIndex="member" />
				<div className="memberList">
					{membersData.map((item, idx) => (
						<Member
							ImageSrc={item.ImageSrc}
							name={item.name}
							isMento={item.isMento}
							assignDate={item.assignDate}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Members;
