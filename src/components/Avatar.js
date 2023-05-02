import "./css/Avatar.css";

function Avatar({ ImageSrc }) {
	return (
		<div>
			<img className="Avatar" src={ImageSrc} />
		</div>
	);
}

export default Avatar;
