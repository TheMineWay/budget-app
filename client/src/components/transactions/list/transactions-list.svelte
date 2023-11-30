<script lang="ts">
	import { Pagination, Timeline } from 'flowbite-svelte';
	import { transactionsQuery } from '../../../queries/transactions/transactions.query';
	import { categoriesQuery } from '../../../queries/categories/categories.query';
	import Transaction from './transaction.svelte';
	import { i18nGetContext } from '../../../i18n/i18n-context';
	import { I18nNamespace } from '../../../types/i18n/i18n-namespace.enum';

	const i18n = i18nGetContext();

	$: limit = 10;
	$: offset = 0;

	$: transactionsList = transactionsQuery({ limit, offset });
	$: total = $transactionsList.data?.count ?? 0;

	const categories = categoriesQuery();
	$: rows = $transactionsList.data?.rows ?? [];

	const onNext = () => {
		if (total > offset + limit) offset += limit;
	};
	const onPrevious = () => {
		let newOffset = offset - limit;
		if (newOffset < 0) newOffset = 0;
		offset = newOffset;
	};
</script>

<div class="h-screen">
	<div class="flex justify-center">
		<Timeline order="vertical" class="">
			{#each rows as row}
				<Transaction
					categoryName={$categories.data?.data.find((c) => c.id === row.categoryId)?.name ?? '...'}
					transaction={row}
				/>
			{/each}
		</Timeline>
	</div>
	<div class="flex flex-col items-center justify-center gap-2">
		<div class="text-sm text-gray-700 dark:text-gray-400">
			{$i18n.t(`${I18nNamespace.TRANSACTIONS_LIST}.pagination.Message`, {
				from: offset,
				to: offset + limit,
				count: $transactionsList.data?.count ?? 0
			})}
		</div>

		<Pagination table on:next={onNext} on:previous={onPrevious}>
			<span slot="prev">{$i18n.t(`${I18nNamespace.TRANSACTIONS_LIST}.pagination.Previous`)}</span>
			<span slot="next">{$i18n.t(`${I18nNamespace.TRANSACTIONS_LIST}.pagination.Next`)}</span>
		</Pagination>
	</div>
</div>

<style lang="postcss">
</style>
