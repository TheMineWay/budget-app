import { getCookieValue } from '../utils/cookies/get-cookie-value';
import { PASSWORD } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ request }) {
	const cookieHeader = request.headers.get('cookie');

	if (!cookieHeader)
		return {
			props: {
				isAuthenticated: false
			}
		};

	const cookieValue = getCookieValue(cookieHeader, 'password') || '';

	return {
		props: {
			isAuthenticated: cookieValue === PASSWORD
		}
	};
}

export const ssr = true;
