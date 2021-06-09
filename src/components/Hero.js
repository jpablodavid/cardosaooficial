import { Container } from 'react-bootstrap';
import './Hero.scss';

const Hero = () => (
	<section id="home" className="hero mb-5">
		<Container className='h-100 pb-5 d-flex justify-content-center align-items-end'>
			<h1 className="title pb-5">Cardosão</h1>
		</Container>
	</section>
);

export default Hero;