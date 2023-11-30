<script lang="ts">
	import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import { CloseSolid, PlusSolid } from 'flowbite-svelte-icons';
	import RegisterTransactionModal from '../transactions/register/register-transaction-modal.svelte';

	export let setAuthenticated: (authenticated: boolean) => void;

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

	<SpeedDial defaultClass="absolute right-6 bottom-6">
		<SpeedDialButton on:click={() => (isRegisterTransactionVisible = true)} name="Register">
			<PlusSolid class="w-5 h-5" />
		</SpeedDialButton>
		<SpeedDialButton on:click={logout} name="Exit">
			<CloseSolid class="w-5 h-5" />
		</SpeedDialButton>
	</SpeedDial>
</div>
