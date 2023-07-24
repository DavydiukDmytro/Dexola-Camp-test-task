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

import { useState } from 'react';

export const App = () => {
	const connect = () => {};
	return (
		<Container>
			{/* <Modal>
					<Loader />
				</Modal> */}
			<Header>
				<ContainerSection className='header'>
					<Logo />
					<SectionWallet>
						{/* <StatusWallet>
							Adress:
							<AdressText
								onClick={() => {
									console.log('aas');
								}}
							>
								<Img width={20} src={copyLogo} alt='Copy logo' />{' '}
								0x538f0c09b8a2DC10836885EdC5eF65BBAD7b918a
							</AdressText>
						</StatusWallet>

						<StatusWallet>Balance: </StatusWallet> */}
						<Button typeButton='button' text='Connect wallet' onClick={connect} />
					</SectionWallet>
				</ContainerSection>
			</Header>
			<MainContainer>
				<ContainerSection>
					<Title>Token transfer</Title>
					<Form balance={0.5} />
				</ContainerSection>
			</MainContainer>
			<Footer />
		</Container>
	);
};
