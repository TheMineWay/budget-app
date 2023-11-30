import { createQuery } from '@tanstack/svelte-query';
import axios from 'axios';
import { PUBLIC_SERVER_HOST } from '$env/static/public';

export interface Transaction {
	id: number;
	amount: number;
	description: string;
	createdAt: Date;
	categoryId: number;
	transactionTime: Date;
}

type Options = {
	limit?: number;
	offset?: number;

	text?: string;
};

export const transactionsQuery = ({ limit, offset, text }: Options) =>
	createQuery({
		queryFn: async () => {
			const response = (
				await axios.get<{ count: number; rows: Transaction[] }>(`${PUBLIC_SERVER_HOST}/registry`, {
					headers: { password: sessionStorage.getItem('password') },
					params: {
						limit: limit ?? 20,
						offset: offset ?? 0,
						text
					}
				})
			).data;

			return {
				...response,
				rows: response.rows.map((r) => ({
					...r,
					transactionTime: new Date(r.transactionTime),
					createdAt: new Date(r.createdAt)
				}))
			};
		},
		queryKey: ['transactions', limit, offset, { text }]
	});
