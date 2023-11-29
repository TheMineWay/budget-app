<script lang="ts">
	import { Button, FloatingLabelInput } from 'flowbite-svelte';
	import { i18nGetContext } from '../../i18n/i18n-context';
	import { I18nNamespace } from '../../types/i18n/i18n-namespace.enum';
	import { LockOpenSolid } from 'flowbite-svelte-icons';

	const i18n = i18nGetContext();
</script>

<div class="cont grid grid-cols-1 gap-3">
	<form>
		<FloatingLabelInput style="outlined" id="password" name="password" type="password">
			{$i18n.t(`${I18nNamespace.AUTH}.form.Password`)}
		</FloatingLabelInput>
	</form>
	<Button ico class="login"
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
