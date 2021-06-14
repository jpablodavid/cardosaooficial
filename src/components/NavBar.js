import "./NavBar.scss";

import React, { useEffect, useState } from "react";

import {
	Navbar,
	Nav,
	Col,
	Container,
	Row,
	Button,
} from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
	const [navSize, setNavSize] = useState("nav-start");

	const navRef = React.useRef();
	navRef.current = navSize;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 310;
			if (show) {
				setNavSize("nav-final");
			} else {
				setNavSize("nav-start");
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Navbar className={navRef.current} expand="lg">
			<Container className='h-100'>
				<Navbar.Brand
					className="h-100 logo d-flex align-items-center justify-content-center"
					href="#home"
				>
					Cardosão
				</Navbar.Brand>
				<Navbar.Toggle className="align-items-center justify-content-center"
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse
					className="fw-bold py-2"
					id="basic-navbar-nav"
				>
					<Nav >
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#agenda">Agenda</Nav.Link>
						<Nav.Link href="#Gallery">Galeria</Nav.Link>
						<Nav.Link href="#Release">Release</Nav.Link>
						<Nav.Link href="#Contato">Contato</Nav.Link>
					</Nav>
					<Button className="text-uppercase fw-bold d-flex align-items-center justify-content-center">
						Loja
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
