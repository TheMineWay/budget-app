import { parse } from 'cookie';

export function getCookieValue(cookieHeader: string, cookieName: string) {
	const cookies = parse(cookieHeader || '');
	return cookies[cookieName] || null;
}
