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
	class={cn("flex items-center gap-2", className)}
	{...restProps}
>
	{#snippet children({ cells })}
		<div class="flex items-center">
			{#each cells as cell, i}
				<PinInputPrimitive.Cell
					{cell}
					class={cn(
						"relative flex size-12 items-center justify-center border-y border-r border-border-input bg-background text-lg font-bold shadow-mini transition-colors outline-hidden select-none",
						"first:rounded-l-input first:border-l last:rounded-r-input",
						"focus:border-dark data-[active]:border-dark data-[active]:ring-1 data-[active]:ring-dark"
					)}
				>
					{#if cell.char !== null}
						<span>{cell.char}</span>
					{:else if cell.hasFakeCaret}
						<span class="pointer-events-none animate-caret-blink">|</span>
					{/if}
				</PinInputPrimitive.Cell>
			{/each}
		</div>
	{/snippet}
</PinInputPrimitive.Root>
