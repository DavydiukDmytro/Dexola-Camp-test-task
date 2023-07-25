import { ethers } from 'ethers';

export const transferToken = async (provider, address, amount) => {
	let signer;
	const transaction = {
		to: address,
		value: ethers.parseEther(amount),
	};
	let transactionReceipt;
	try {
		signer = await provider.getSigner();
		const tran = await signer.sendTransaction(transaction);
		transactionReceipt = await tran.wait();
	} catch (error) {
		return {
			status: false,
			message: 'Transmission failed',
		};
	}

	if (transactionReceipt.status === 1) {
		return {
			status: true,
			message: 'The transfer was successful',
		};
	} else {
		return {
			status: false,
			message: 'Transmission failed',
		};
	}
};
