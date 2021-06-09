import "./NavBar.scss";

import { Col, Container, Row, Button } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => (
	<nav>
		<Container>
			<Row className='fw-bold'>
				<Col className="d-flex justify-content-start">
					<h1>Cardosão</h1>
				</Col>

				<Col
					lg={8}
					className="d-lg-flex d-none  align-items-center justify-content-between"
				>
					<ul className="d-flex mb-0">
						<li>
							<AnchorLink href="#home">Home</AnchorLink>
						</li>

						<li>
							<AnchorLink href="#agenda" offset="100">
								Agenda
							</AnchorLink>
						</li>

						<li>
							<AnchorLink href="#gallery" offset="100">
								Galeria
							</AnchorLink>
						</li>

						<li>
							<AnchorLink href="#release" offset="100">
								Release
							</AnchorLink>
						</li>

						<li>
							<AnchorLink href="#contato" offset="100">
								contato
							</AnchorLink>
						</li>
					</ul>

					<Button className="text-uppercase fw-bold d-flex align-items-center justify-content-center">
						Loja
					</Button>
				</Col>
			</Row>
		</Container>
	</nav>
);

export default NavBar;
