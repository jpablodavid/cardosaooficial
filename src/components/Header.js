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

const Header = () => (
	<header>
		<Container>
			<section className="header--section d-flex flex-row justify-content-between align-items-center">
				<div className="d-flex flex-row align-items-center">
					<FontAwesomeIcon className="me-3" icon={faEnvelope} color="#fff" />
					<h3 className="me-3">Assine a newsletter para conteúdo exclusivo</h3>
				</div>

				<div className="d-flex flex-row align-items-center">
					<h3>Redes Sociais:</h3>

					<ul className="d-flex flex-row align-items-center mb-0">
						<li className="facebook">
							<a href="www.facebook.com.br">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						</li>

						<li className="instagram">
							<a href="www.instagram.com.br">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>

						<li className="twitter">
							<a href="www.twitter.com.br">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</li>

						<li className="youtube">
							<a href="www.youtube.com.br">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>

						<li className="spotify">
							<a href="www.spotify.com.br">
								<FontAwesomeIcon icon={faSpotify} />
							</a>
						</li>

						<li className="deezer">
							<a href="www.deezer.com.br">
								<FontAwesomeIcon icon={faDeezer} />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</Container>
	</header>
);

export default Header;
