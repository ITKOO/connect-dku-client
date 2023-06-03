import React from "react";
import "../css/Members.css";
import { Link } from "react-router-dom";
import GroupIndex from "../components/GroupIndex";
import FloatingBtn from "../components/FloatingBtn";
import GroupProfile from "../components/GroupProfile";
import GroupIntroduce from "../components/GroupIntroduce";
import Post from "../components/Post";

const MissionPosts = () => {
	const postData = [
		{
			writerImg: "/img/profile1.jpg",
			writerName: "김준영",
			writerIsmento: true,
			writeDate: "2023년 6월 14일",
			postTitle: "미션 1 완료! 인생네컷 찍기",
			postTxt: "단대 앞에서 사진 찍었는데 너무 좋아요!",
			postImage: "/img/mission1.jpeg",
		},
		{
			writerImg: "/img/profile2.png",
			writerName: "구지원",
			writerIsmento: false,
			writeDate: "2023년 2월 28일",
			postTitle: "미션 2 완료! 헤나 타투 받기",
			postTxt: "홍대입구역에서 각자 좋아하는 캐릭터로 타투를 받았어요",
			postImage: "/img/mission2.jpeg",
		},
		{
			writerImg: "/img/profile3.png",
			writerName: "윤태호",
			writerIsmento: true,
			writeDate: "2023년 10월 28일",
			postTitle: "미션 3! 스키장 다녀오기",
			postTxt:
				"평창에 1박2일로 스키를 타고 왔는데 사이가 더 돈독해졌어요",
			postImage: "/img/mission3.jpeg",
		},
		{
			writerImg: "/img/profile4.png",
			writerName: "박현찬",
			writerIsmento: false,
			writeDate: "2023년 6월 3일",
			postTitle: "미션 4! 같이 저녁먹기",
			postTxt: "모두 함께 맛있는 고기를 먹으러 다녀왔습니당",
			postImage: "/img/mission4.jpeg",
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
			<GroupIndex selectedIndex="mission" />
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

export default MissionPosts;
