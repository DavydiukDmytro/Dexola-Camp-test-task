import styled from '@emotion/styled';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Header = styled.header`
	background-color: var(--color-secondary-bg);
	padding: 15px 0;
`;

export const SectionWallet = styled.section`
	margin-top: 20px;

	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StatusWallet = styled.p`
	font-size: 22px;
	width: 320px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media screen and (min-width: ${breakpoints.phone}) {
		width: ${breakpoints.phone};
	}
	@media screen and (min-width: ${breakpoints.tablet}) {
		width: auto;
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 30px;
	}
`;

export const AdressText = styled.span`
	padding: 0 5px;
	font-size: 16px;
	cursor: pointer;
	:hover,
	:focus {
		color: var(--color-sub-accent);
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 30px;
	}
`;

export const Img = styled.img`
	display: inline-block;
`;

export const MainContainer = styled.main`
	text-align: center;
	padding: 15px 0;

	@media screen and (min-width: ${breakpoints.tablet}) {
		padding: 30px 0;
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		padding: 80px 0;
	}
`;

export const Title = styled.h1`
	font-size: 30px;
	margin-bottom: 15px;

	@media screen and (min-width: ${breakpoints.phone}) {
		font-size: 36px;
		margin-bottom: 20px;
	}

	@media screen and (min-width: ${breakpoints.tablet}) {
		font-size: 40px;
		margin-bottom: 25px;
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 60px;
		margin-bottom: 30px;
	}
`;

export const ContainerSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 320px;
	padding: 0 5px;
	margin: 0 auto;
	@media screen and (min-width: ${breakpoints.phone}) {
		width: ${breakpoints.phone};
	}

	@media screen and (min-width: ${breakpoints.tablet}) {
		width: ${breakpoints.tablet};
		padding: 0 15px;
		&.header {
			flex-direction: row;
			justify-content: space-between;
			padding: 15px 70px;
		}
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		width: ${breakpoints.desktop};
	}
`;
