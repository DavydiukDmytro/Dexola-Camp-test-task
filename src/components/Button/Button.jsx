import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ text, typeButton, onClick }) => {
	return (
		<Btn type={typeButton} onClick={() => onClick()}>
			{text}
		</Btn>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	typeButton: PropTypes.string.isRequired,
};
