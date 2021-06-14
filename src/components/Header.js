import React, { useEffect, useState } from "react";
import "./Header.scss";

const {
	faFacebook,
	faInstagram,
	faYoutube,
	faTwitter,
	faSpotify,
	faDeezer,
} = require("@fortawesome/free-brands-svg-icons");
const { faEnvelope } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { Container } = require("react-bootstrap");

const Header = () => {
    
	const [headerBackground, setHeaderBackground] = useState("header-start");

	const headerRef = React.useRef();
	headerRef.current = headerBackground;
    
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 310
			if (show) {
				setHeaderBackground('header-final')
			}else {
				setHeaderBackground('header-start')
			}
		}
		document.addEventListener("scroll", handleScroll)
		return() => {
			document.removeEventListener("scroll", handleScroll);
		}
	}, [])


	return (
		<header className={headerRef.current}>
			<Container>
				<section className="header--section d-flex flex-row justify-content-between align-items-center">
					<div className="d-flex flex-row align-items-center">
						<FontAwesomeIcon className="me-3" icon={faEnvelope} color="#fff" />
						<div className="d-flex">
							<h3 className="d-lg-flex d-none">Assine a</h3>
							<h3 className="mx-lg-1">
								<a href="https://www.gmail.com" target="_blank">
									newsletter
								</a>
							</h3>
							<h3 className="d-lg-flex d-none">para conteúdo exclusivo</h3>
						</div>
					</div>

					<div className="d-flex flex-row align-items-center">
						<h3 className="d-lg-flex d-none">Redes Sociais:</h3>

						<ul className="d-flex flex-row align-items-center mb-0">
							<li className="facebook">
								<a
									href="https://https://web.facebook.com/cardosaocantor"
									target="_blank"
								>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</li>

							<li className="instagram">
								<a
									href="https://https://www.instagram.com/cardosaocantor/"
									target="_blank"
								>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>

							<li className="twitter">
								<a href="https://www.twitter.com.br" target="_blank">
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>

							<li className="youtube">
								<a href="https://www.youtube.com.br" target="_blank">
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</li>

							<li className="spotify">
								<a href="https://www.spotify.com.br" target="_blank">
									<FontAwesomeIcon icon={faSpotify} />
								</a>
							</li>

							<li className="deezer">
								<a href="https://www.deezer.com" target="_blank">
									<FontAwesomeIcon icon={faDeezer} />
								</a>
							</li>
						</ul>
					</div>
				</section>
			</Container>
		</header>
	);
};

export default Header;
