import "./Contato.scss";

import { Col, Container, Row, Image, Form, Button } from "react-bootstrap";

import microfone from "../assets/microfone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLocationArrow,
	faMapMarkerAlt,
	faPhone,
	faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";

const Contato = () => (
	<section id="contato" className="contatos mb-5">
		<Container>
			<div className="text-center mb-5">
				<Image className="microfone my-4 " src={microfone} alt="icone" />

				<h2 className="title">Contato</h2>
			</div>
			<Row className="d-flex justify-content-evenly">
				<Col md={1} lg={2}></Col>
				<Col xs={12} md={5} lg={4}>
					<Row>
						<div className="d-flex">
							<FontAwesomeIcon icon={faPhone} size="2x" />
							<h3>Telefone</h3>
						</div>
						<p>+55 21 987456321</p>
					</Row>

					<Row>
						<div className="d-flex">
							<FontAwesomeIcon icon={faEnvelope} size="2x" />
							<h3>Email</h3>
						</div>
						<p>CardosaoOficial@gmail.com</p>
					</Row>

					<Row className="">
						<div className="d-flex">
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								size="2x"
								className="iconAlt"
							/>
							<h3>Caixa Postal</h3>
						</div>
						<p className="mb-0">Rua: Marape, 450</p>
						<p>Marechal Hermes</p>
					</Row>
				</Col>
				<Col xs={12} md={5}>
					<div className="form w-100 rounded p-4">
						<Form>
							<Form.Group className="mb-2" controlId="formBasicName">
								<Form.Control type="name" placeholder="Nome Completo" />
							</Form.Group>
							<Form.Group className="mb-2" controlId="formGroupTel">
								<Form.Control type="telefone" placeholder="Telefone" />
							</Form.Group>
							<Form.Group className="mb-2" controlId="formBasicEmail">
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>
							<Form.Group
								className="mb-4"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Control as="textarea" rows={3} placeholder="Mensagem" />
							</Form.Group>
							<Button>Enviar Mensagem</Button>
						</Form>
					</div>
				</Col>
				<Col md={1}></Col>
			</Row>
		</Container>
	</section>
);

export default Contato;
