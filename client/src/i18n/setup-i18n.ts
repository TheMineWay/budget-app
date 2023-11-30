import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';
import { Languages } from '../types/i18n/languages.enum';
import { I18nNamespace } from '../types/i18n/i18n-namespace.enum';

import en_US_common from './locales/en_us/common.json';
import en_US_auth from './locales/en_us/auth.json';
import en_US_register_transaction from './locales/en_us/register_transaction.json';
import en_US_transactions_list from './locales/en_us/transactions_list.json';

i18next.init({
	lng: Languages.en_US,
	resources: {
		[Languages.en_US]: {
			translation: {
				[I18nNamespace.COMMON]: en_US_common,
				[I18nNamespace.AUTH]: en_US_auth,
				[I18nNamespace.REGISTER_TRANSACTION]: en_US_register_transaction,
				[I18nNamespace.TRANSACTIONS_LIST]: en_US_transactions_list
			}
		}
	}
});

export default () => {
	const i18n = createI18nStore(i18next);

	return i18n;
};
