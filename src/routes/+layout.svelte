<script>
	import { setContext } from 'svelte';
	import getI18nStore from '../i18n/setup-i18n';
	import '../app.pcss';

	setContext('i18n', getI18nStore());
</script>

<div class="app">
	<slot />
</div>

<style>
</style>
