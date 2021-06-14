import "./Agenda.scss";
import AgendaModal from "./AgendaModal";

import microfone from "../assets/microfone.png";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { Button, Image, Container, Row, Col } = require("react-bootstrap");



const Agenda = ({ shows }) => {

	return (
		<section id="agenda" className="text-center mb-5">
			<Image className="microfone my-4" src={microfone} alt="icone" />
			<h2 className="mb-3 title">Agenda</h2>
			<Container>
				{shows.map(({ id, image, title, icon, data, desc, local, more }) => (
					<Row className="item mb-5">
						<Col className="mb-3" xs={12} md={4}>
							<Image src={image} alt="icone" />
						</Col>
						<Col
							className="d-flex flex-column justify-content-center"
							xs={12}
							md={4}
						>
							<h2>{title}</h2>
							<h3>
								<FontAwesomeIcon icon={icon} />
								{data}
							</h3>
							<p>{desc}</p>
						</Col>
						<Col
							className="d-flex flex-column justify-content-center align-items-center mb-sm-5"
							xs={12}
							md={4}
						>
							<AgendaModal title={title} data={data} more={more} id={id} local={local}/>
						</Col>
					</Row>
				))}
			</Container>
		</section>
	);
};

export default Agenda;
