import "./Release.scss";
import { Parallax } from "react-parallax";

import test from "../assets/test.jpg";
import face from "../assets/face.jpg";

const { Container, Row, Col, Image } = require("react-bootstrap");

const Release = () => (
	<Parallax className="release bg-dark" bgImage={test} strength={500}>
		<Container>
			<Row className="py-5">
				<Col className="d-flex justify-content-center py-5">
					<Image src={face} roundedCircle></Image>
				</Col>
				<Col className="py-5 " xs={5}>
					<h2 className="title py-3">Release</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</Col>
				<Col xs={2}></Col>
			</Row>
		</Container>
	</Parallax>
);

export default Release;
