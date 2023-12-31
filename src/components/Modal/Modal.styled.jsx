import styled from '@emotion/styled';

export const Overlay = styled.div`
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 1200;
`;

export const ModalDiv = styled.div`
	max-width: calc(100vw - 48px);
	max-height: calc(100vh - 24px);
	border-radius: 10px;
	overflow: hidden;
	background-color: var(--color-accent);
	padding: 30px;
`;
