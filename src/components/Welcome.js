import "./Welcome.scss";
import microfone from "../assets/microfone.png";

const { Container, Button, Image, Row, Col } = require("react-bootstrap");

const Welcome = () => (
	<section id="welcome">
		<Container className="welcome mb-5">
			<Image className="microfone my-4" src={microfone} alt="icone" />
			<h2 className="mb-5 title">Seja Bemvindo</h2>

			<div className="ratio ratio-16x9 mb-5 video">
				<iframe
					src="https://www.youtube.com/embed/jkZk3MBNh2c"
					title="YouTube video"
					allowfullscreen
				></iframe>
			</div>

			<Button className="btn px-md-5" variant="danger">
				Inscreva-se no canal
			</Button>
		</Container>
	</section>
);

export default Welcome;
