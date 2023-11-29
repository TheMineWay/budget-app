<script lang="ts">
	import { Button, FloatingLabelInput } from 'flowbite-svelte';
	import { i18nGetContext } from '../../i18n/i18n-context';
	import { I18nNamespace } from '../../types/i18n/i18n-namespace.enum';
	import { LockOpenSolid } from 'flowbite-svelte-icons';
	import { setCookie } from '../../utils/cookies/set-cookie';
	import { testAuthMutation } from '../../mutations/auth/test-auth.mutation';

	export let setAuthenticated: (authenticated: boolean) => void;

	const i18n = i18nGetContext();

	$: passwordState = '';

	const onValueChange = (e: EventTarget | null) => {
		passwordState = (e as HTMLInputElement)?.value ?? '';
	};

	const mutation = testAuthMutation();

	const onLogin = () => {
		$mutation.mutate(passwordState, {
			onSuccess: () => {
				setCookie('password', passwordState, 1);
				setAuthenticated(true);
			}
		});
	};
</script>

<div class="cont grid grid-cols-1 gap-3">
	<FloatingLabelInput
		style="outlined"
		id="password"
		type="password"
		on:change={(e) => onValueChange(e.target)}
	>
		{$i18n.t(`${I18nNamespace.AUTH}.form.Password`)}
	</FloatingLabelInput>
	<Button ico on:click={onLogin}
		><LockOpenSolid class="w-3.5 h-3.5 mr-2" />{$i18n.t(`${I18nNamespace.AUTH}.form.Login`)}</Button
	>
</div>

<style lang="postcss">
	div.cont {
		width: 20em;
	}
</style>
