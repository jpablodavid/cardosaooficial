import "./Agenda.scss";

import microfone from "../assets/microfone.png";
import foto1 from "../assets/foto1.jpg";

import { faClock } from "@fortawesome/free-solid-svg-icons";
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const { Button, Image, Container, Row, Col } = require("react-bootstrap");

const Agenda = () => (
	<section id="agenda" className="text-center mb-5">
		<Image className="microfone my-4" src={microfone} alt="icone" />

		<h2 className="mb-3 title">Agenda</h2>

		<Container>
			<Row className="item mb-5">
				<Col className="mb-3" xs={12} md={4}>
					<Image src={foto1} alt="icone" />
				</Col>
				<Col
					className="d-flex flex-column justify-content-center"
					xs={12}
					md={4}
				>
					<h2>Show Cardosão</h2>
					<h3>
						<FontAwesomeIcon icon={faClock} />
						12 de setembro às 20H
					</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
						quam obcaecati voluptas magnam consequatur.
					</p>
				</Col>
				<Col
					className="d-flex flex-column justify-content-center align-items-center mb-sm-5"
					xs={12}
					md={4}
				>
					<Button className="w-md-25" size="sm">
						Saiba Mais
					</Button>
				</Col>
			</Row>

			<Row className="item mb-5">
				<Col xs={12} md={4}>
					<Image className="mb-3" src={foto1} alt="icone" />
				</Col>
				<Col
					className="d-flex flex-column justify-content-center align-items-center"
					xs={12}
					md={4}
				>
					<h2>Show Cardosão</h2>
					<h3>
						<FontAwesomeIcon icon={faClock} />
						12 de setembro às 20H
					</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
						quam obcaecati voluptas magnam consequatur.
					</p>
				</Col>
				<Col
					className="d-flex flex-column justify-content-center align-items-center"
					xs={12}
					md={4}
				>
					<Button className="w-md-25" size="sm">
						Saiba Mais
					</Button>
				</Col>
			</Row>

			<Row className="item mb-5">
				<Col xs={12} md={4}>
					<Image className="mb-3" src={foto1} alt="icone" />
				</Col>
				<Col
					className="d-flex flex-column justify-content-center"
					xs={12}
					md={4}
				>
					<h2>Show Cardosão</h2>
					<h3>
						<FontAwesomeIcon icon={faClock} />
						12 de setembro às 20H
					</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
						quam obcaecati voluptas magnam consequatur.
					</p>
				</Col>
				<Col
					className="d-flex flex-column justify-content-center align-items-center"
					xs={12}
					md={4}
				>
					<Button className="w-md-25" size="sm">
						Saiba Mais
					</Button>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Agenda;
