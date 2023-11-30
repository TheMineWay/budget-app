import { createMutation } from '@tanstack/svelte-query';
import axios from 'axios';
import { PUBLIC_SERVER_HOST } from '$env/static/public';

interface RegisterTransactionDTO {
	amount: number;
	description?: string;
	categoryId: number;
	transactionTime: Date;
}

export const registerTransactionMutation = () =>
	createMutation({
		mutationKey: ['registry', 'new'],
		mutationFn: async (data: RegisterTransactionDTO) =>
			await axios.post(`${PUBLIC_SERVER_HOST}/registry`, data, {
				headers: { password: sessionStorage.getItem('password') }
			})
	});
