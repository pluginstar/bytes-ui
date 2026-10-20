<script lang="ts">
	import { Pagination as PaginationPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		count = 0,
		perPage = 10,
		page = $bindable(1),
		siblingCount = 1,
		class: className = "",
		...restProps
	}: PaginationPrimitive.RootProps = $props();
</script>

<PaginationPrimitive.Root
	bind:ref
	{count}
	{perPage}
	bind:page
	{siblingCount}
	class={cn("flex flex-col items-center gap-2", className)}
	{...restProps}
>
	{#snippet children({ pages, range })}
		<div class="flex items-center gap-1.5">
			<PaginationPrimitive.PrevButton
				class="inline-flex size-9 items-center justify-center rounded-item border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-btn hover:bg-muted/50 disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
			>
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</PaginationPrimitive.PrevButton>

			{#each pages as p (p.key)}
				{#if p.type === "ellipsis"}
					<div class="flex size-9 items-center justify-center text-xs font-mono text-muted-foreground">
						...
					</div>
				{:else}
					<PaginationPrimitive.Page
						page={p}
						class={cn(
							"inline-flex size-9 items-center justify-center rounded-item text-xs font-semibold transition-all outline-hidden select-none",
							"hover:bg-muted text-foreground",
							"data-[selected]:bg-dark data-[selected]:text-background data-[selected]:shadow-mini"
						)}
					>
						{p.value}
					</PaginationPrimitive.Page>
				{/if}
			{/each}

			<PaginationPrimitive.NextButton
				class="inline-flex size-9 items-center justify-center rounded-item border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-btn hover:bg-muted/50 disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
			>
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</PaginationPrimitive.NextButton>
		</div>
		<p class="text-xs text-muted-foreground font-mono">
			Showing {range.start} – {range.end} of {count}
		</p>
	{/snippet}
</PaginationPrimitive.Root>
