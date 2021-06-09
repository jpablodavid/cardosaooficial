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

	return (
		<header>
			<Container>
				<section className="header--section d-flex flex-row justify-content-between align-items-center">
					<div className="d-flex flex-row align-items-center p-xs-5">
						<FontAwesomeIcon className="me-3" icon={faEnvelope} color="#fff" />
						<div className="d-flex">
							<h3 className="d-lg-flex d-none">Assine a</h3>
							<h3 className="mx-lg-1">newsletter</h3>
							<h3 className="d-lg-flex d-none">para conteúdo exclusivo</h3>
						</div>
					</div>

					<div className="d-flex flex-row align-items-center">
						<h3 className="d-lg-flex d-none">Redes Sociais:</h3>

						<ul className="d-flex flex-row align-items-center mb-0">
							<li className="facebook">
								<a href="https://www.facebook.com.br" target="_blank">
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</li>

							<li className="instagram">
								<a href="https://www.instagram.com.br" target="_blank">
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
