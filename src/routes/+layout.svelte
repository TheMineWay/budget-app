<script lang="ts">
	import { setContext } from 'svelte';
	import getI18nStore from '../i18n/setup-i18n';
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { HomeSolid, PlusSolid } from 'flowbite-svelte-icons';
	import { I18nNamespace } from '../types/i18n/i18n-namespace.enum';
	import { page } from '$app/stores';
	import '../app.pcss';

	const i18n = getI18nStore();
	setContext('i18n', i18n);

	const {
		data: {
			props: { isAuthenticated: _isAuthenticated }
		}
	} = $page;
	const isAuthenticated: boolean = _isAuthenticated;
</script>

<div>
	{#if isAuthenticated}
		<slot />

		<BottomNav position="absolute" classInner="grid-cols-2">
			<BottomNavItem btnName={$i18n.t(`${I18nNamespace.COMMON}.layout.bottom-navigation.Home`)}>
				<HomeSolid
					class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
				/>
			</BottomNavItem>
			<BottomNavItem btnName={$i18n.t(`${I18nNamespace.COMMON}.layout.bottom-navigation.Register`)}>
				<PlusSolid
					class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
				/>
			</BottomNavItem>
		</BottomNav>
	{:else}
		<p></p>
	{/if}
</div>

<style>
</style>
