import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';
import { Languages } from '../types/i18n/languages.enum';
import en_US_common from './locales/en_us/common.json';

i18next.init({
	lng: Languages.en_US,
	resources: {
		[Languages.en_US]: {
			translation: en_US_common
		}
	}
});

export default () => createI18nStore(i18next);
