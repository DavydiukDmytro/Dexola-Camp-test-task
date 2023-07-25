export const getAddress = async () => {
	let address = null;
	try {
		address = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
	} catch (error) {
		return {
			status: false,
			message: 'An available wallet could not be found',
		};
	}
	if (address) {
		return {
			status: true,
			address: address[0],
		};
	} else {
		return {
			status: false,
			message: 'An available wallet could not be found',
		};
	}
};
