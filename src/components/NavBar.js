import "./NavBar.scss";

import { Container } from "react-bootstrap";

const NavBar = () => (
	<Container className="navbar d-flex flex-row">
		<div>
			<h1>Cardosão</h1>
		</div>

		<nav className="d-flex flex-row">
			<ul className="d-flex flex-row">
				<li>
					<a href="www.bit.com">Home</a>
				</li>

				<li>
					<a href="www.bit.com">Agenda</a>
				</li>

				<li>
					<a href="www.bit.com">Galeria</a>
				</li>

				<li>
					<a href="www.bit.com">Parcerias</a>
				</li>

				<li>
					<a href="www.bit.com">contato</a>
				</li>
			</ul>
			<a href="www.bit.com">Loja</a>
		</nav>
	</Container>
);

export default NavBar;
