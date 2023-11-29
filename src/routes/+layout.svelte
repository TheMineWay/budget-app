<script>
	import { setContext } from 'svelte';
	import getI18nStore from '../i18n/setup-i18n';
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { HomeSolid } from 'flowbite-svelte-icons';
	import { I18nNamespace } from '../types/i18n/i18n-namespace.enum';
	import '../app.pcss';

	const i18n = getI18nStore();
	setContext('i18n', i18n);
</script>

<div>
	<slot />

	<BottomNav position="absolute" classInner="grid-cols-4">
		<BottomNavItem btnName={$i18n.t(`${I18nNamespace.COMMON}.layout.bottom-navigation.Home`)}>
			<HomeSolid
				class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
			/>
		</BottomNavItem>
	</BottomNav>
</div>

<style>
</style>
