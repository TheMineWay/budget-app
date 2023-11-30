import { createQuery } from '@tanstack/svelte-query';
import axios from 'axios';
import { PUBLIC_SERVER_HOST } from '$env/static/public';

interface Category {
	id: number;
	name: string;
}

export const categoriesQuery = () =>
	createQuery({
		queryFn: async () =>
			await axios.get<Category[]>(`${PUBLIC_SERVER_HOST}/registry/categories`, {
				headers: { password: sessionStorage.getItem('password') }
			}),
		queryKey: ['categories']
	});
