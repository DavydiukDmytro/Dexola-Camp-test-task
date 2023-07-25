import { ProgressBar, RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';
import PropTypes from 'prop-types';

export const Loader = ({ progress = false }) => {
	return (
		<Container>
			{progress ? (
				<ProgressBar
					height='90'
					width='90'
					ariaLabel='progress-bar-loading'
					wrapperStyle={{}}
					wrapperClass='progress-bar-wrapper'
					borderColor='#1c1e21'
					barColor='#1c1e21'
				/>
			) : (
				<RotatingLines
					strokeColor='#fdb833'
					strokeWidth='5'
					animationDuration='0.75'
					width='30'
					visible={true}
				/>
			)}
		</Container>
	);
};

Loader.propTypes = {
	progress: PropTypes.bool,
};
