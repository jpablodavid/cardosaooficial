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
	<section className="contatos mb-5">
		<Container>
			<div className="text-center mb-5">
				<Image className="microfone my-4 " src={microfone} alt="icone" />

				<h2 className="title">Contato</h2>
			</div>
			<Row className="px-5 mx-5 mt-3">
				<Col>
					<div className="d-flex">
						<FontAwesomeIcon icon={faPhone} size="2x" />
						<h3>Telefone</h3>
					</div>
					<p>+55 21 987456321</p>

					<div className="d-flex">
						<FontAwesomeIcon icon={faEnvelope} size="2x" />

						<h3>Email</h3>
					</div>
					<p>CardosaoOficial@gmail.com</p>

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
				</Col>
				<Col className="form p-2 rounded">
					<Form>
						<Form.Group className="m-3" controlId="formBasicName">
							<Form.Control type="name" placeholder="Nome Completo" />
						</Form.Group>

						<Form.Group className="m-3" controlId="formGroupTel">
							<Form.Control type="telefone" placeholder="Telefone" />
						</Form.Group>

						<Form.Group className="mx-3" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group
							className="mx-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Control as="textarea" rows={3} placeholder="Mensagem" />
						</Form.Group>

						<Button className="btn-form" variant="primary" type="submit">
							Enviar Mensagem
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Contato;
