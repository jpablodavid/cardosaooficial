import './App.scss';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Agenda from './components/Agenda';
import Gallery from "./components/Gallery";
import Release from "./components/Release";
import Contato from "./components/Contato";
import Footer from './components/Footer';

const App = () => {
  return (
		<>
			<section className='fixed-top'>
				<Header />

				<NavBar />
			</section>

			<Hero />

			<Welcome />

			<Agenda />

			<Gallery />

			<Release />

			<Contato />

			<Footer />
		</>
	);
}

export default App;
