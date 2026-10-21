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
		<div class="flex items-center">
			{#each cells as cell, i (i)}
				<PinInputPrimitive.Cell
					{cell}
					class={cn(
						"relative flex size-12 items-center justify-center -ml-px first:ml-0 border border-border-input bg-background text-base font-semibold shadow-mini transition-all outline-hidden select-none",
						"first:rounded-l-input last:rounded-r-input",
						"hover:border-border-input-hover",
						"data-[active]:z-10 data-[active]:border-foreground data-[active]:ring-1 data-[active]:ring-foreground/20"
					)}
				>
					{#if cell.char !== null}
						<span class="font-mono text-lg font-semibold text-foreground">{cell.char}</span>
					{:else if cell.hasFakeCaret}
						<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
							<div class="h-6 w-[1.5px] bg-foreground animate-caret-blink rounded-full"></div>
						</div>
					{/if}
				</PinInputPrimitive.Cell>
			{/each}
		</div>
	{/snippet}
</PinInputPrimitive.Root>
