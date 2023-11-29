<script lang="ts">
	import { setContext } from 'svelte';
	import getI18nStore from '../i18n/setup-i18n';
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { CloseSolid, HomeSolid, PlusSolid } from 'flowbite-svelte-icons';
	import { I18nNamespace } from '../types/i18n/i18n-namespace.enum';
	import '../app.pcss';
	import Authenticate from '../components/auth/authenticate.svelte';
	import { clearAllCookies } from '../utils/cookies/clear-all-cookies';

	const isAuthenticated = false;

	const i18n = getI18nStore();
	setContext('i18n', i18n);

	const logout = () => {
		clearAllCookies();
		window.location.reload();
	};
</script>

<div>
	{#if isAuthenticated}
		<div class="container mx-auto">
			<slot />

			<BottomNav position="absolute" classInner="grid-cols-3">
				<BottomNavItem btnName={$i18n.t(`${I18nNamespace.COMMON}.layout.bottom-navigation.Home`)}>
					<HomeSolid
						class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
					/>
				</BottomNavItem>
				<BottomNavItem
					btnName={$i18n.t(`${I18nNamespace.COMMON}.layout.bottom-navigation.Register`)}
				>
					<PlusSolid
						class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
					/>
				</BottomNavItem>
				<BottomNavItem
					on:click={logout}
					btnName={$i18n.t(`${I18nNamespace.COMMON}.layout.bottom-navigation.Exit`)}
				>
					<CloseSolid
						class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
					/>
				</BottomNavItem>
			</BottomNav>
		</div>
	{:else}
		<div class="flex justify-center align-center w-screen h-screen">
			<div class="flex flex-col align-center justify-center"><Authenticate /></div>
		</div>
	{/if}
</div>

<style>
</style>
