import { ethers } from 'ethers';

export const getBalance = async (provider, adress) => {
	let balance;
	try {
		balance = ethers.formatEther(await provider.getBalance(adress));
	} catch (error) {
		return {
			status: false,
			message: 'Failed to get balance',
		};
	}

	return {
		status: true,
		balance,
	};
};
