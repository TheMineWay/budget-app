import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';
import { Languages } from '../types/i18n/languages.enum';
import { I18nNamespace } from '../types/i18n/i18n-namespace.enum';

import en_US_common from './locales/en_us/common.json';
import en_US_auth from './locales/en_us/auth.json';

i18next.init({
	lng: Languages.en_US,
	resources: {
		[Languages.en_US]: {
			translation: {
				[I18nNamespace.COMMON]: en_US_common,
				[I18nNamespace.AUTH]: en_US_auth
			}
		}
	}
});

export default () => {
	const i18n = createI18nStore(i18next);

	return i18n;
};
