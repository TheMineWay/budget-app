<script lang="ts">
	import { setContext } from 'svelte';
	import getI18nStore from '../i18n/setup-i18n';
	import Authenticate from '../components/auth/authenticate.svelte';
	import NavLayout from '../components/navigation/nav-layout.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.pcss';

	$: isAuthenticated = false;

	const i18n = getI18nStore();
	setContext('i18n', i18n);

	const queryClient = new QueryClient();
</script>

<div>
	<QueryClientProvider client={queryClient}>
		{#if isAuthenticated}
			<NavLayout setAuthenticated={(auth) => (isAuthenticated = auth)}><slot /></NavLayout>
		{:else}
			<div class="flex justify-center align-center w-screen h-screen">
				<div class="flex flex-col align-center justify-center">
					<Authenticate setAuthenticated={(auth) => (isAuthenticated = auth)} />
				</div>
			</div>
		{/if}</QueryClientProvider
	>
</div>

<style>
</style>
