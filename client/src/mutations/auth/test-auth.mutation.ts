import { createMutation } from '@tanstack/svelte-query';
import axios from 'axios';
import { PUBLIC_SERVER_HOST } from '$env/static/public';

export const testAuthMutation = () =>
	createMutation({
		mutationKey: ['auth', 'test'],
		mutationFn: async (password: string) =>
			await axios.get(`${PUBLIC_SERVER_HOST}/auth/test`, { headers: { password } })
	});
