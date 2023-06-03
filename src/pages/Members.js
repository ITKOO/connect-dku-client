import React from "react";
import "../css/Members.css";
import { Link } from "react-router-dom";
import GroupIndex from "../components/GroupIndex";
import Member from "../components/Member";
import FloatingBtn from "../components/FloatingBtn";
import GroupProfile from "../components/GroupProfile";
import GroupIntroduce from "../components/GroupIntroduce";

const Members = () => {
	const membersData = [
		{
			name: "구지원",
			isMento: false,
			imageSrc: "/img/profile2.png",
			assignDate: "2023년 9월 9일 가입",
		},
		{
			name: "박현찬",
			isMento: true,
			imageSrc: "/img/profile4.png",
			assignDate: "2023년 9월 9일 가입",
		},
		{
			name: "김준영",
			isMento: true,
			imageSrc: "/img/profile1.jpg",
			assignDate: "2023년 9월 8일 가입",
		},
		{
			name: "윤태호",
			isMento: false,
			imageSrc: "/img/profile3.png",
			assignDate: "2023년 9월 8일 가입",
		},
		{
			name: "윤태호",
			isMento: false,
			imageSrc: "/img/profile3.png",
			assignDate: "2023년 9월 8일 가입",
		},
	];
	return (
		<div className="pageNoPadding ftM">
			<GroupProfile
				imageSrc="/img/group_profile.jpeg"
				groupMajor="소프트웨어학과"
				groupName="개발을 사랑하는 1팀"
				groupMembers="4"
			/>
			<GroupIntroduce introducingText="우리는 개발 러버들!" />
			<div className="members">
				<GroupIndex selectedIndex="member" />
				<div className="memberList">
					{membersData.map((item, idx) => (
						<Member
							imageSrc={item.imageSrc}
							name={item.name}
							isMento={item.isMento}
							assignDate={item.assignDate}
						/>
					))}
				</div>
			</div>
			<Link to="/write">
				<FloatingBtn />
			</Link>
		</div>
	);
};

export default Members;
