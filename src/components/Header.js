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
	<section className="header">
		<Container>
			<header className="d-flex flex-row justify-content-between align-items-center">
				<div className="d-flex flex-row align-items-center">
					<FontAwesomeIcon className="me-3" icon={faEnvelope} color="#fff" />
					<h3 className="me-3">Assine a newsletter para conteúdo exclusivo</h3>
				</div>

				<div className="d-flex flex-row align-items-center">
					<h3>Redes Sociais:</h3>

					<ul className="d-flex flex-row align-items-center mb-0">
						<li>
							<a href="www.facebook.com.br">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						</li>

						<li>
							<a href="www.instagram.com.br">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>

						<li>
							<a href="www.twitter.com.br">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</li>

						<li>
							<a href="www.youtube.com.br">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>

						<li>
							<a href="www.spotify.com.br">
								<FontAwesomeIcon icon={faSpotify} />
							</a>
						</li>

						<li>
							<a href="www.deezer.com.br">
								<FontAwesomeIcon icon={faDeezer} />
							</a>
						</li>
					</ul>
				</div>
			</header>
		</Container>
	</section>
);

export default Header;
