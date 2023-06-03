import Member from "./Member";
import "./css/Post.css";
import { Link } from "react-router-dom";

function Post({
	writerImg,
	writerName,
	writerIsmento,
	writeDate,
	postTitle,
	postTxt,
	postImage,
}) {
	const paddingBottom = {
		paddingBottom: "20px",
	};
	return (
		<div style={paddingBottom}>
			<Member
				imageSrc={writerImg}
				name={writerName}
				isMento={writerIsmento}
				assignDate={writeDate}
			></Member>
			<div className="postContent">
				<div className="ftLg regularTxt" style={paddingBottom}>
					{postTitle}
				</div>
				<div className="ftM" style={paddingBottom}>
					{postTxt}
				</div>
				<div>
					<img src={postImage} className="postImage" />
				</div>
			</div>
		</div>
	);
}

export default Post;
