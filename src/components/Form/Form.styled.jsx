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
