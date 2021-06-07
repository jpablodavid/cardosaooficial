import "./Welcome.scss";
import microfone from "../assets/microfone.png";

const { Button, Image } = require("react-bootstrap");

const Welcome = () => (
	<section className="welcome mb-5">
		<Image className="microfone my-4" src={microfone} alt="icone" />
		<h2 className="mb-5 title">Seja Bemvindo</h2>
		<iframe
			className="mb-5"
			width="780"
			height="438.9"
			src="https://www.youtube.com/embed/jkZk3MBNh2c"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>

		<Button className='btn px-5' variant="danger" size="lg">
			Inscreva-se no canal
		</Button>
	</section>
);

export default Welcome;
