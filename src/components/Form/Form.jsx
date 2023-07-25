import { useFormik } from 'formik';
import { transferToken } from '../../ethereumWallet/transferToken';
import { useState } from 'react';
import { Btn, ErrorText, FormTransfer, Input, Label } from './Form.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';

export const Form = ({ provider = null, changeLoader, balance, updateBalance }) => {
	const [errorMessage, setErrorMessage] = useState(
		'Enter the address of the recipient and the number of tokens to transfer'
	);
	const formik = useFormik({
		initialValues: { tokenAmount: '', receiverAddress: '' },
		validate: (values) => {
			const errors = {};
			if (!provider) {
				errors.message = `First you need to connect`;
				return errors;
			}
			if (!values.receiverAddress) {
				errors.message = `You need to enter the recipient's address`;
				return errors;
			} else if (!/^(0x)?[0-9a-fA-F]{40}$/.test(values.receiverAddress)) {
				errors.message = 'Enter a valid address';
				return errors;
			} else if (!ethers.isAddress(values.receiverAddress)) {
				errors.message = `This address is not valid`;
				return errors;
			}
			if (!values.tokenAmount) {
				errors.message = `Enter the number of tokens to transfer`;
				return errors;
			} else if (isNaN(values.tokenAmount.replace(',', '.'))) {
				errors.message = `The number of tokens must be a number`;
				return errors;
			} else if (Number(values.tokenAmount) === 0) {
				errors.message = `Enter a number greater than 0`;
				return errors;
			} else if (Number(values.tokenAmount) < 0.000001 || Number(values.tokenAmount) > 100000) {
				errors.message = `The transfer amount must be between 0.000001 and 100000`;
				return errors;
			} else if (values.tokenAmount.replace(',', '.') > balance) {
				errors.message = `The transfer amount cannot be greater than the balance`;
				return errors;
			}
			return errors;
		},
		onSubmit: async (values) => {
			changeLoader(true);
			const result = await transferToken(provider, values.receiverAddress, values.tokenAmount);
			changeLoader(false);
			result.status
				? Notify.success(result.message, { position: 'center-top' })
				: Notify.failure(result.message, { position: 'center-top' });
			updateBalance();
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		formik.validateForm().then((errors) => {
			if (Object.keys(errors).length === 0) {
				formik.handleSubmit(e);
				setErrorMessage(null);
			}
			if (formik.errors.message) {
				setErrorMessage(formik.errors.message);
			}
		});
	};

	return (
		<FormTransfer onSubmit={handleSubmit}>
			<Label>
				Adress
				<Input
					name='receiverAddress'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.receiverAddress}
				/>
			</Label>
			<Label>
				Token Amount
				<Input
					name='tokenAmount'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.tokenAmount}
				/>
			</Label>
			<ErrorText>{errorMessage}</ErrorText>
			<Btn type='submit'>Submit</Btn>
		</FormTransfer>
	);
};

Form.propTypes = {
	provider: PropTypes.object,
	changeLoader: PropTypes.func.isRequired,
	balance: PropTypes.number,
	updateBalance: PropTypes.func.isRequired,
};
