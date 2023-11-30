<script lang="ts">
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import { transactionsQuery } from '../../../queries/transactions/transactions.query';
	import { ArrowDownSolid, ArrowUpSolid } from 'flowbite-svelte-icons';
	import { format } from 'date-fns';
	import { categoriesQuery } from '../../../queries/categories/categories.query';
	import classnames from 'classnames';

	$: limit = 20;
	$: offset = 0;

	const transactionsList = transactionsQuery({ limit, offset });

	const categories = categoriesQuery();
	$: rows = $transactionsList.data?.rows ?? [];
</script>

<div class="flex justify-center">
	<Timeline order="vertical">
		{#each rows as row}
			<TimelineItem
				title={$categories.isLoading
					? '...'
					: $categories.data?.data.find((c) => c.id === row.categoryId)?.name}
				date={format(row.transactionTime, 'dd/MM/yyyy')}
			>
				<svelte:fragment slot="icon">
					<span
						class={classnames(
							'flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900'
						)}
					>
						{#if row.amount > 0}<ArrowUpSolid
								class="w-3 h-3 text-green-600 dark:text-green-400"
							/>{:else}<ArrowDownSolid class="w-3 h-3 text-red-600 dark:text-red-400" />{/if}
					</span>
				</svelte:fragment>
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					<b>{row.amount}€</b>{#if row.description}{' - ' + row.description.trim()}{/if}
				</p>
			</TimelineItem>
		{/each}
	</Timeline>
</div>
