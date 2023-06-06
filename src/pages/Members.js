import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Members.css";
import { Link } from "react-router-dom";
import GroupIndex from "../components/GroupIndex";
import Member from "../components/Member";
import FloatingBtn from "../components/FloatingBtn";
import GroupProfile from "../components/GroupProfile";
import GroupIntroduce from "../components/GroupIntroduce";
import moment from "moment";

const Members = () => {
	const [membersData, setMembersData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				var members = [];

				for (var userId = 1; userId < 5; userId++) {
					var member = axios
						.get(`http://itkoo.kr:8080/api/user/${userId}`)
						.then((response) => {
							var memberData = {
								name: response.data["name"],
								userType: response.data["userType"],
								assignDate: moment(
									response.data["createdAt"]
								).format("YYYY년 MM월 DD일"),
								imageSrc: "/img/profile2.png",
							};
							return memberData;
						})
						.catch((error) => {
							console.log(error);
							return null;
						});
					members.push(member);
				}

				const resolvedPromises = await Promise.all(members);
				setMembersData(
					resolvedPromises.filter((data) => data !== null)
				);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	}, []);

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
							isMento={item.userType}
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
