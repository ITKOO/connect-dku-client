import "./css/Avatar.css";

function Avatar({ imageSrc, size }) {
	const imageSize = {
		width: size,
		height: size,
	};
	return (
		<>
			<img className="Avatar" src={imageSrc} style={imageSize} />
		</>
	);
}

export default Avatar;
