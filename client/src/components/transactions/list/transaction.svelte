<script lang="ts">
	import { TimelineItem } from 'flowbite-svelte';
	import type { Transaction } from '../../../queries/transactions/transactions.query';
	import { format } from 'date-fns';
	import classnames from 'classnames';
	import { ArrowDownSolid, ArrowUpSolid } from 'flowbite-svelte-icons';

	export let transaction: Transaction;
	export let categoryName: string;
</script>

<TimelineItem title={categoryName.trim()} date={format(transaction.transactionTime, 'dd/MM/yyyy')}>
	<svelte:fragment slot="icon">
		<span
			class={classnames(
				'flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900'
			)}
		>
			{#if transaction.amount > 0}<ArrowUpSolid
					class="w-3 h-3 text-green-600 dark:text-green-400"
				/>{:else}<ArrowDownSolid class="w-3 h-3 text-red-600 dark:text-red-400" />{/if}
		</span>
	</svelte:fragment>
	<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
		<b>{transaction.amount}€</b>{#if transaction.description}{' - ' +
				transaction.description.trim()}{/if}
	</p>
</TimelineItem>
