import styled from '@emotion/styled';
import { breakpoints } from '../../utils/breakpoints';

export const FormTransfer = styled.form`
	display: inline-block;
	padding: 10px;
	border: 5px outset var(--color-sub-accent);
	width: 100%;

	@media screen and (min-width: ${breakpoints.tablet}) {
		padding: 25px 15px;
	}
`;
export const Label = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 25px;
	padding-bottom: 10px;
	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 40px;
	}
`;
export const Input = styled.input`
	margin-top: 10px;
	font-size: 25px;
	font-family: 'Pompiere', cursive;
	background-color: var(--color-sub-secondary-bg);
	border: 3px outset var(--color-sub-accent);
	color: var(--color-accent);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 40px;
	}
`;

export const ErrorText = styled.p`
	color: #ea0b0b;
	display: block;
	height: 100px;
	font-size: 18px;

	@media screen and (min-width: ${breakpoints.tablet}) {
		height: 130px;
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 35px;
	}
`;

export const Btn = styled.button`
	position: relative;
	height: 100%;
	padding: 10px 25px;
	cursor: pointer;
	transition: all 0.3s ease;
	display: inline-block;
	font-weight: 500;
	font-size: 25px;
	border: none;
	color: var(--color-accent);
	font-family: 'Pompiere', cursive;
	background: transparent;
	z-index: 2;

	@media screen and (min-width: ${breakpoints.desktop}) {
		font-size: 50px;
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
