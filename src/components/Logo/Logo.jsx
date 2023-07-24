import ethereumLogo from '../../assets/images/ethereum.svg';
import { Img } from './Logo.styled';

export const Logo = () => {
	return (
		<>
			<Img src={ethereumLogo} width={50} alt='Ethereum logo' />
		</>
	);
};
