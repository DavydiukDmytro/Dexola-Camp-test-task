import { Button } from '../Button';
import { Footer } from '../Footer';
import { Form } from '../Form';
import { Loader } from '../Loader';
import { Logo } from '../Logo';
import { Modal } from '../Modal';
import copyLogo from '../../assets/images/copy.svg';
import {
	AdressText,
	Container,
	ContainerSection,
	Header,
	Img,
	MainContainer,
	SectionWallet,
	StatusWallet,
	Title,
} from './App.styled';

import { useEffect, useState } from 'react';
import { getAddress } from '../../ethereumWallet/getAddress';
import { connectProvider } from '../../ethereumWallet/connectProvider';
import { getBalance } from '../../ethereumWallet/getBalance';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { formatAddress } from '../../ethereumWallet/formatAddress';
import { roundToThreeDecimals } from '../../ethereumWallet/roundToThreeDecimals';

export const App = () => {
	const [address, setAddress] = useState(null);
	const [provider, setProvider] = useState(null);
	const [balance, setBalance] = useState(null);
	const [isLoader, setIsLoader] = useState(false);

	useEffect(() => {
		if (address && provider) {
			saveBalance();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [address, provider]);

	useEffect(() => {
		isLoader
			? document.body.classList.add('modal-open')
			: document.body.classList.remove('modal-open');
	}, [isLoader]);

	const connect = async () => {
		setIsLoader(true);
		const resultAddress = await getAddress();
		if (resultAddress.status) {
			setAddress(resultAddress.address);
		} else {
			Notify.failure(resultAddress.message, { position: 'center-top' });
			setAddress(null);
			setBalance(null);
			setIsLoader(false);
			return;
		}
		const resultProvider = connectProvider();
		if (resultProvider.status) {
			setProvider(resultProvider.provider);
		} else {
			Notify.failure(resultProvider.message, { position: 'center-top' });
			setAddress(null);
			setBalance(null);
			setIsLoader(false);
			return;
		}
	};
	const saveBalance = async () => {
		setBalance(null);
		const resultBalance = await getBalance(provider, address);

		if (resultBalance.status) {
			setBalance(resultBalance.balance);
		} else {
			Notify.failure(resultBalance.message, { position: 'center-top' });
			setAddress(null);
			setBalance(null);
			setIsLoader(false);
			return;
		}

		setIsLoader(false);
	};

	return (
		<Container>
			<Header>
				<ContainerSection className='header'>
					<Logo />
					<SectionWallet>
						{address ? (
							<>
								<StatusWallet>
									Adress:
									<AdressText
										onClick={() => {
											navigator.clipboard.writeText(address).then(() => {
												Notify.success('The address is copied', { position: 'center-top' });
											});
										}}
									>
										<Img width={20} src={copyLogo} alt='Copy logo' /> {formatAddress(address)}
									</AdressText>
								</StatusWallet>

								<div style={{ display: 'flex' }}>
									<StatusWallet className='balance'>
										Balance: {balance && roundToThreeDecimals(balance)}
									</StatusWallet>
									{!balance && <Loader />}
								</div>
							</>
						) : (
							<Button typeButton='button' text='Connect wallet' onClick={connect} />
						)}
					</SectionWallet>
				</ContainerSection>
			</Header>
			<MainContainer>
				<ContainerSection>
					<Title>Token transfer</Title>
					<Form
						provider={provider}
						changeLoader={setIsLoader}
						balance={balance ? Number(balance) : 0}
						updateBalance={saveBalance}
					/>
				</ContainerSection>
			</MainContainer>
			<Footer />
			{isLoader && (
				<Modal>
					<Loader progress={true} />
				</Modal>
			)}
		</Container>
	);
};
