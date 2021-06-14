import './App.scss';

import React, { useEffect, useState } from "react";

import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Agenda from './components/Agenda';
import Gallery from "./components/Gallery";
import Release from "./components/Release";
import Contato from "./components/Contato";
import Footer from './components/Footer';

import fotos from "./data/fotos";
import shows from './data/shows';

const App = () => {

	const [navSize, setNavSize] = useState("nav-start");

	const [headerBackground, setHeaderBackground] = useState("header-start");

	const navRef = React.useRef();
	navRef.current = navSize;

	const headerRef = React.useRef();
	headerRef.current = headerBackground;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 310;
			if (show) {
				setHeaderBackground("header-final");
				setNavSize("nav-final");
			} else {
				setHeaderBackground("header-start");
				setNavSize("nav-start");
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

  	return (
		<>
			<section className='fixed-top'>
				<Header />

				<NavBar />
			</section>

			<Hero />

			<Welcome />

			<Agenda shows={shows} />

			<Gallery fotos={fotos} />

			<Release />

			<Contato />

			<Footer />
		</>
	);
}

export default App;
