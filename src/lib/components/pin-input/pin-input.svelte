<script lang="ts">
	import { PinInput as PinInputPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(""),
		maxlength = 6,
		class: className = "",
		onComplete,
		...restProps
	}: PinInputPrimitive.RootProps = $props();
</script>

<PinInputPrimitive.Root
	bind:ref
	bind:value
	{maxlength}
	{onComplete}
	class={cn("flex items-center", className)}
	{...restProps}
>
	{#snippet children({ cells })}
		{#if cells.length === 6}
			<div class="flex items-center">
				<div class="flex items-center gap-2 sm:gap-2.5">
					{#each cells.slice(0, 3) as cell, i (i)}
						{@render Cell(cell)}
					{/each}
				</div>

				<div class="flex w-8 sm:w-10 items-center justify-center">
					<div class="h-1 w-3 rounded-full bg-foreground/20"></div>
				</div>

				<div class="flex items-center gap-2 sm:gap-2.5">
					{#each cells.slice(3, 6) as cell, i (i + 3)}
						{@render Cell(cell)}
					{/each}
				</div>
			</div>
		{:else}
			<div class="flex items-center gap-2 sm:gap-2.5">
				{#each cells as cell, i (i)}
					{@render Cell(cell)}
				{/each}
			</div>
		{/if}
	{/snippet}
</PinInputPrimitive.Root>

{#snippet Cell(cell: PinInputPrimitive.CellProps["cell"])}
	<PinInputPrimitive.Cell
		{cell}
		class={cn(
			"relative flex size-12 items-center justify-center rounded-input border border-border-input bg-background text-base font-semibold transition-all outline-hidden select-none",
			"hover:border-border-input-hover",
			"data-[active]:border-foreground data-[active]:ring-2 data-[active]:ring-foreground/15"
		)}
	>
		{#if cell.char !== null}
			<span class="font-mono text-xl font-semibold text-foreground">{cell.char}</span>
		{:else if cell.hasFakeCaret}
			<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
				<div class="h-6 w-[1.5px] bg-foreground animate-caret-blink rounded-full"></div>
			</div>
		{/if}
	</PinInputPrimitive.Cell>
{/snippet}
