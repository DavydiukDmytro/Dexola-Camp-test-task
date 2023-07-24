import styled from '@emotion/styled';
import { breakpoints } from '../../utils/breakpoints';

export const ContainerFooter = styled.footer`
	text-align: center;
	padding: 20px 0;

	background-color: red;
	background-color: var(--color-secondary-bg);

	@media screen and (min-width: ${breakpoints.desktop}) {
		padding: 40px 0;
	}
`;

export const Link = styled.a`
	position: relative;

	padding: 20px 25px;
	cursor: pointer;
	transition: all 0.3s ease;
	display: inline-block;
	font-weight: 500;
	font-size: 15px;
	border: none;
	color: var(--color-accent);
	font-family: 'Pompiere', cursive;
	background: transparent;
	z-index: 2;

	@media screen and (min-width: ${breakpoints.phone}) {
		font-size: 22px;
	}

	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 40px;
		padding: 10px 55px;
	}

	:before,
	:after {
		position: absolute;
		content: '';
		width: 20%;
		height: 20%;
		border: 3px solid;

		z-index: -1;
		transition: all 0.3s ease;
	}
	:before {
		top: 0;
		left: 0;
		border-bottom-color: transparent;
		border-right-color: transparent;
		border-top-color: var(--color-sub-accent);
		border-left-color: var(--color-sub-accent);
	}
	:after {
		bottom: 0;
		right: 0;
		border-top-color: transparent;
		border-left-color: transparent;
		border-bottom-color: var(--color-sub-accent);
		border-right-color: var(--color-sub-accent);
	}
	:hover:before,
	:hover:after {
		border-color: var(--color-sub-accent);
		height: 100%;
		width: 100%;
		box-shadow: 0 0 5px var(--color-sub-accent), 0 0 5px var(--color-sub-accent) inset;
	}
`;
