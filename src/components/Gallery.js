import microfone from "../assets/microfone.png";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";

const { Image } = require("react-bootstrap");

const Gallery = () => (
	<section id='gallery' className="text-center mb-5">
		<Image className="microfone my-4" src={microfone} alt="icone" />
		<h2 className="mb-3 title">Gallery</h2>

		<article className="d-flex flex-wrap">
			<div className="w-25">
				<Image className="w-100" src={foto1} alt="icone" />
			</div>
			<div className="w-25 h-25 bg-primary">
				<Image className="w-100" src={foto4} alt="icone" fluid />
			</div>
			<div className="w-25 h-25">
				<Image className="w-100" src={foto3} alt="icone" fluid />
			</div>
			<div className="w-25 h-25 bg-primary">
				<Image className="w-100" src={foto2} alt="icone" fluid />
			</div>
			<div className="w-25">
				<Image className="w-100" src={foto2} alt="icone" />
			</div>
			<div className="w-25 h-25 bg-primary">
				<Image className="w-100" src={foto3} alt="icone" fluid />
			</div>
			<div className="w-25 h-25">
				<Image className="w-100" src={foto4} alt="icone" fluid />
			</div>
			<div className="w-25 h-25 bg-primary">
				<Image className="w-100" src={foto1} alt="icone" fluid />
			</div>
			<div className="w-25">
				<Image className="w-100" src={foto4} alt="icone" />
			</div>
			<div className="w-25 h-25 bg-primary">
				<Image className="w-100" src={foto2} alt="icone" fluid />
			</div>
			<div className="w-25 h-25">
				<Image className="w-100" src={foto1} alt="icone" fluid />
			</div>
			<div className="w-25 h-25 bg-primary">
				<Image className="w-100" src={foto3} alt="icone" fluid />
			</div>
		</article>
	</section>
);

export default Gallery;
