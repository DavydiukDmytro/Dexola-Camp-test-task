import { ethers } from 'ethers';

export const connectProvider = () => {
	let provider = null;
	if (window.ethereum) {
		try {
			provider = new ethers.BrowserProvider(window.ethereum);
		} catch (error) {
			return {
				status: false,
				message: 'Failed to connect to MetaMask',
			};
		}
	} else {
		return {
			status: false,
			message: 'Failed to connect to MetaMask',
		};
	}
	return {
		status: true,
		provider,
	};
};
