import React from "react";
import "../css/Members.css";
import { Link } from "react-router-dom";
import GroupIndex from "../components/GroupIndex";
import FloatingBtn from "../components/FloatingBtn";
import GroupProfile from "../components/GroupProfile";
import GroupIntroduce from "../components/GroupIntroduce";
import Post from "../components/Post";

const ChatterPosts = () => {
	const postData = [
		{
			writerImg: "/img/profile1.jpg",
			writerName: "김준영",
			writerIsmento: true,
			writeDate: "2023년 6월 14일",
			postTitle: "안녕하세요",
			postTxt: "안녕하세요~~ 1팀의 멘토 김준영입니다 잘 지내봐요!",
			postImage: "/img/chatter1.jpeg",
		},
		{
			writerImg: "/img/profile2.png",
			writerName: "구지원",
			writerIsmento: false,
			writeDate: "2023년 2월 28일",
			postTitle: "반가워요!",
			postTxt: "저는 개발천재 구지원이라고 합니다!! 잘 부탁드려요 :)",
			postImage: "/img/chatter2.jpeg",
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
			<GroupIndex selectedIndex="chatter" />
			{postData.map((item, idx) => (
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

export default ChatterPosts;
