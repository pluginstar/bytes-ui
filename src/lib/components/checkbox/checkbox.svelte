<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		class: className = "",
		...restProps
	}: CheckboxPrimitive.RootProps = $props();
</script>

<CheckboxPrimitive.Root
	bind:ref
	bind:checked
	class={cn(
		"inline-flex size-5 items-center justify-center rounded-item border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-mini transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-dark disabled:cursor-not-allowed disabled:opacity-50",
		"data-[state=checked]:bg-dark data-[state=checked]:text-background data-[state=checked]:border-dark",
		className
	)}
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		{#if indeterminate}
			<div class="h-0.5 w-2.5 bg-current rounded-full"></div>
		{:else if checked}
			<svg class="size-3.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
			</svg>
		{/if}
	{/snippet}
</CheckboxPrimitive.Root>
