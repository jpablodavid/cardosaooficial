import './Agenda.scss';
import microfone from "../assets/microfone.png";
import foto1 from "../assets/foto1.jpg";


const { Button, Image } = require("react-bootstrap");

const Agenda = () => (
	<section className="text-center mb-5">
		<Image className="microfone my-4" src={microfone} alt="icone" />

		<h2 className="mb-3 title">Agenda</h2>

		<div id="events__list">
			<div class="container events__list__div">
				<div class="show__brazuca">
					<div>
						<Image src={foto1} alt="icone" />
					</div>
					<div>
						<h2>Show Cardosão</h2>
						<h3>
							<i class="far fa-clock"></i>12 de setembro às 20H
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
							quam obcaecati voluptas magnam consequatur.
						</p>
					</div>
					<div class="brazuca__button">
						<Button class="btn btn--institutional">Saiba Mais</Button>
					</div>
				</div>

				<div class="show__brazuca">
					<div>
						<Image src={foto1} alt="icone" />
					</div>
					<div>
						<h2>Show Cardosão</h2>
						<h3>
							<i class="far fa-clock"></i>12 de setembro às 20H
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
							quam obcaecati voluptas magnam consequatur.
						</p>
					</div>
					<div class="brazuca__button">
						<Button class="btn btn--institutional">Saiba Mais</Button>
					</div>
				</div>

				<div class="show__brazuca">
					<div>
						<Image src={foto1} alt="icone" />
					</div>
					<div>
						<h2>Show Cardosão</h2>
						<h3>
							<i class="far fa-clock"></i>12 de setembro às 20H
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
							quam obcaecati voluptas magnam consequatur.
						</p>
					</div>
					<div class="brazuca__button">
						<Button class="btn btn--institutional">Saiba Mais</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Agenda;
