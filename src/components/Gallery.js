import microfone from "../assets/microfone.png";

const { Image } = require("react-bootstrap");

const Gallery = ({ fotos }) => {

	return (
		<section id="gallery" className="text-center mb-5">
			<Image className="microfone my-4" src={microfone} alt="icone" />
			<h2 className="mb-3 title">Gallery</h2>

			<article className="d-flex flex-wrap">

				{fotos.map(({ img }) => (
					<div className="w-25">
						<Image className="w-100" src={img} alt="icone" />
					</div>
				))}
				
			</article>
		</section>
	);
};

export default Gallery;
