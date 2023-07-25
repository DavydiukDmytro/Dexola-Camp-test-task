import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children }) => {
	document.body.classList.add('modal-open');
	return createPortal(
		<Overlay>
			<ModalDiv>{children}</ModalDiv>
		</Overlay>,
		modalRoot
	);
};
