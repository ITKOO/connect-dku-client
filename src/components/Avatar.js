import "./css/Avatar.css";

function Avatar({ ImageSrc, size }) {
	const imageSize = {
		width: size,
		height: size,
	};
	return (
		<>
			<img className="Avatar" src={ImageSrc} style={imageSize} />
		</>
	);
}

export default Avatar;
