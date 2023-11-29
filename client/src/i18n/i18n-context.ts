import { getContext } from 'svelte';
import type { i18n } from 'i18next';

const i18nGetContext = () => getContext<SvelteStore<i18n>>('i18n');

export { i18nGetContext };
