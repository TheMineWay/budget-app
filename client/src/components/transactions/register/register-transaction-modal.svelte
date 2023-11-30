<script lang="ts">
	import { Button, FloatingLabelInput, Modal } from 'flowbite-svelte';
	import { i18nGetContext } from '../../../i18n/i18n-context';
	import { I18nNamespace } from '../../../types/i18n/i18n-namespace.enum';
	import { object, type InferType, number, string, date } from 'yup';
	import { registerTransactionMutation } from '../../../mutations/transactions/register-transaction.mutation';

	export let visible: boolean;
	export let onClose: () => void;

	const formSchema = object({
		amount: number().required(),
		categoryId: number().required(),
		description: string().optional(),
		transactionTime: date().required()
	});

	const i18n = i18nGetContext();

	$: formData = {} as Record<string, unknown>;

	const handleValueChange = (
		target: EventTarget | null,
		field: keyof InferType<typeof formSchema>
	) => {
		formData[field] = (target as HTMLInputElement).value;
	};

	const registerMutation = registerTransactionMutation();

	const onRegister = () => {
		try {
			$registerMutation.mutate(
				formSchema.cast({
					...formData
				}),
				{
					onSuccess: () => {
						formData = {};
						onClose();
					}
				}
			);
		} catch (e) {}
	};
</script>

<div>
	<Modal
		title={$i18n.t(`${I18nNamespace.REGISTER_TRANSACTION}.Title`)}
		bind:open={visible}
		on:close={onClose}
	>
		<form class="grid grid-cols-1 gap-3" on:submit={onRegister}>
			<div class="grid grid-cols-2 gap-3">
				<FloatingLabelInput
					on:change={(e) => handleValueChange(e.target, 'amount')}
					style="filled"
					id="form_amount"
					name="amount"
					type="number"
				>
					{$i18n.t(`${I18nNamespace.REGISTER_TRANSACTION}.fields.amount.Label`)}
				</FloatingLabelInput>
				<FloatingLabelInput
					on:change={(e) => handleValueChange(e.target, 'categoryId')}
					style="filled"
					id="form_categoryId"
					name="categoryId"
					type="text"
				>
					{$i18n.t(`${I18nNamespace.REGISTER_TRANSACTION}.fields.category.Label`)}
				</FloatingLabelInput>
				<FloatingLabelInput
					style="filled"
					id="form_transactionTime"
					name="transactionTime"
					type="date"
					on:change={(e) => handleValueChange(e.target, 'transactionTime')}
				>
					{$i18n.t(`${I18nNamespace.REGISTER_TRANSACTION}.fields.transactionTime.Label`)}
				</FloatingLabelInput>
			</div>
			<FloatingLabelInput
				style="filled"
				id="form_description"
				name="description"
				type="text"
				on:change={(e) => handleValueChange(e.target, 'description')}
			>
				{$i18n.t(`${I18nNamespace.REGISTER_TRANSACTION}.fields.description.Label`)}
			</FloatingLabelInput>
		</form>
		<svelte:fragment slot="footer">
			<Button on:click={onRegister}
				>{$i18n.t(`${I18nNamespace.REGISTER_TRANSACTION}.actions.Register`)}</Button
			>
		</svelte:fragment>
	</Modal>
</div>
