import "./NavBar.scss";

import { Container } from "react-bootstrap";

const NavBar = () => (
	<section className="navBar">
		<Container className="navBar--container d-flex flex-row fw-bold">
			<div className="d-flex flex-row align-items-center">
				<h1>Cardosão</h1>
			</div>

			<nav className="d-flex flex-row justify-content-end">
				<ul className="d-flex flex-row ps-5 mb-0 mr-5">
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
						<a href="www.bit.com">Realese</a>
					</li>

					<li>
						<a href="www.bit.com">contato</a>
					</li>
				</ul>

				<a
					className="btn btn-primary fw-bold"
					role="button"
					data-bs-toggle="button"
					href="www.bit.com"
				>
					Loja
				</a>
			</nav>
		</Container>
	</section>
);

export default NavBar;
