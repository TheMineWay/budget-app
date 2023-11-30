<script lang="ts">
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { CloseSolid, HomeSolid, PlusSolid } from 'flowbite-svelte-icons';
	import { I18nNamespace } from '../../types/i18n/i18n-namespace.enum';
	import { i18nGetContext } from '../../i18n/i18n-context';
	import RegisterTransactionModal from '../transactions/register/register-transaction-modal.svelte';

	export let setAuthenticated: (authenticated: boolean) => void;

	const i18n = i18nGetContext();

	$: isRegisterTransactionVisible = false;

	const logout = () => {
		sessionStorage.removeItem('password');
		setAuthenticated(false);
	};
</script>

<div class="container mx-auto">
	<slot />

	<RegisterTransactionModal
		onClose={() => (isRegisterTransactionVisible = false)}
		visible={isRegisterTransactionVisible}
	/>

	<BottomNav position="absolute" classInner="grid-cols-3">
		<BottomNavItem btnName={$i18n.t(`${I18nNamespace.COMMON}.layout.bottom-navigation.Home`)}>
			<HomeSolid
				class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
			/>
		</BottomNavItem>
		<BottomNavItem
			on:click={() => (isRegisterTransactionVisible = true)}
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
