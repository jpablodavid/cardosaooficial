import foto1 from "../assets/foto1.jpg";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const rios =(
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117643.23850553881!2d-43.32043027688914!3d-22.863481247189203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62ba0a4406dafdc4!2sBoate%20azul!5e0!3m2!1spt-BR!2sbr!4v1623349528838!5m2!1spt-BR!2sbr"
	
);

const artChopp = (
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.7218651798826!2d-43.3797840850616!3d-22.923627485003294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8ef7abc89f7%3A0xdd65acd5569e0f2c!2sArt%20Chopp!5e0!3m2!1spt-BR!2sbr!4v1623349051350!5m2!1spt-BR!2sbr"	
		
);

const quiosque = (
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2523536019207!2d-43.30482558505983!3d-23.014504784957065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd19f74e25071%3A0xb0f082a6d7b8227d!2sQuiosque%204%20Elementos!5e0!3m2!1spt-BR!2sbr!4v1623349167247!5m2!1spt-BR!2sbr"

);

const shows = [
	{
		id: 1,
		image: foto1,
		title: "Cabaré do cardosão",
		icon: faClock,
		data: "Quinta-feira às 17H",
		desc: "Todas as quintas a Boate Rio's recebe o Cabaré do cardosão",
		more: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae",
		local: rios,

	},
	{
		id: 2,
		image: foto1,
		title: 'Cardosão e Andre gyrota',
		icon: faClock,
		data: "Sabados às 19H",
		desc: "Todos os sabados o Restaurante Art Chopp apresenta cardosão e gyrota com o melhor da MPB",
		more: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae",
		local: artChopp,
	},
	{
		id: 3,
		image: foto1,
		title: "Dia dos Namorados",
		icon: faClock,
		data: "12 de junho às 14H",
		desc: "Show na praia pra comemorar os dias dos namorados com cardosão e gyrota",
		more: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae",
		local: quiosque,
	}
];

export default shows;
