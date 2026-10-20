<script lang="ts">
	import { Meter as MeterPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = 0,
		min = 0,
		max = 100,
		class: className = "",
		indicatorClass = "",
		children,
		...restProps
	}: MeterPrimitive.RootProps & {
		indicatorClass?: string;
		children?: Snippet;
	} = $props();

	const percentage = $derived(
		Math.min(100, Math.max(0, (((value ?? 0) - min) / (max - min)) * 100))
	);
</script>

<MeterPrimitive.Root
	bind:ref
	{value}
	{min}
	{max}
	class={cn(
		"relative h-2.5 w-full overflow-hidden rounded-full bg-muted shadow-mini-inset",
		className
	)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{:else}
		<div
			class={cn("h-full w-full flex-1 bg-dark transition-all duration-300 rounded-full", indicatorClass)}
			style={`transform: translateX(-${100 - percentage}%)`}
		></div>
	{/if}
</MeterPrimitive.Root>
