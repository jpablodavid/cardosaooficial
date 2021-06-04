import './App.scss';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const App = () => {
  return (
		<>
			<section className='fixed-top'>
				<Header />

				<NavBar />
			</section>

			<Hero />
		</>
	);
}

export default App;
