<script lang="ts">
	import { Button, FloatingLabelInput } from 'flowbite-svelte';
	import { i18nGetContext } from '../../i18n/i18n-context';
	import { I18nNamespace } from '../../types/i18n/i18n-namespace.enum';
	import { LockOpenSolid } from 'flowbite-svelte-icons';

	const i18n = i18nGetContext();

	$: passwordState = '';

	const onValueChange = (e: EventTarget | null) => {
		passwordState = (e as HTMLInputElement)?.value ?? '';
	};

	const onLogin = () => {};
</script>

<div class="cont grid grid-cols-1 gap-3">
	<form>
		<FloatingLabelInput
			style="outlined"
			id="password"
			name="password"
			type="password"
			on:change={(e) => onValueChange(e.target)}
		>
			{$i18n.t(`${I18nNamespace.AUTH}.form.Password`)}
		</FloatingLabelInput>
	</form>
	<Button ico class="login" on:click={onLogin}
		><LockOpenSolid class="w-3.5 h-3.5 mr-2" />{$i18n.t(`${I18nNamespace.AUTH}.form.Login`)}</Button
	>
</div>

<style lang="postcss">
	div.cont {
		width: 20em;
	}

	.login {
		width: 100%;
	}
</style>
