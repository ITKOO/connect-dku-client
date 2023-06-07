import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../css/Members.css";
import { Link } from "react-router-dom";
import GroupIndex from "../components/GroupIndex";
import FloatingBtn from "../components/FloatingBtn";
import GroupProfile from "../components/GroupProfile";
import GroupIntroduce from "../components/GroupIntroduce";
import Post from "../components/Post";

const MissionPosts = () => {
	const [postsData, setPostsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://itkoo.kr:8080/api/post"
				);
				const data = response.data;
				const post = data.map((item) => {
					return {
						writerImg: "/img/profile1.jpg",
						writerName: "김준영",
						writerIsmento: "MENTOR",
						writeDate: moment(item["createdAt"]).format(
							"YYYY년 MM월 DD일"
						),
						postTitle: item["title"],
						postTxt: item["content"],
						postImage: item["imgUrl"],
					};
				});
				setPostsData(post);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="pageNoPadding ftM">
			<GroupProfile
				imageSrc="/img/group_profile.jpeg"
				groupMajor="소프트웨어학과"
				groupName="멘토멘티 코딩 1팀"
				groupMembers="4"
			/>
			<GroupIntroduce introducingText="우리는 개발 러버들!" />
			<GroupIndex selectedIndex="mission" />
			{postsData.map((item, idx) => (
				<Post
					writerImg={item.writerImg}
					writerName={item.writerName}
					writerIsmento={item.writerIsmento}
					writeDate={item.writeDate}
					postTitle={item.postTitle}
					postTxt={item.postTxt}
					postImage={item.postImage}
				/>
			))}

			<Link to="/write">
				<FloatingBtn />
			</Link>
		</div>
	);
};

export default MissionPosts;
