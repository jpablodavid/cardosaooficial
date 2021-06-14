import react, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

const AgendaModal = ({local, title, more, data, id}) => {

	const MostrarModal = (props) => (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					{data}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-center">
				<h4>{title}</h4>
				<p>{more}</p>

				<iframe src={local}></iframe>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Voltar</Button>
			</Modal.Footer>
		</Modal>
	);

	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<Button
				className="w-md-25"
				size="sm"
				variant="primary"
				onClick={() => setModalShow(true)}
			>
				Saiba Mais
			</Button>

			<MostrarModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

export default AgendaModal;
