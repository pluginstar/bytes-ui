<script lang="ts">
	import { Combobox as ComboboxPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		value,
		label,
		children,
		...restProps
	}: ComboboxPrimitive.ItemProps = $props();
</script>

<ComboboxPrimitive.Item
	bind:ref
	{value}
	{label}
	class={cn(
		"relative flex h-9 w-full cursor-pointer select-none items-center rounded-item px-3 py-1.5 text-sm text-foreground outline-hidden transition-colors",
		"data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...restProps}
>
	{#snippet children(itemState)}
		<span class="flex-1 truncate">
			{#if children}
				{@render children(itemState)}
			{:else}
				{label ?? value}
			{/if}
		</span>
		{#if itemState.selected}
			<span class="ml-auto flex size-4 items-center justify-center">
				<svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<polyline points="20 6 9 17 4 12" />
				</svg>
			</span>
		{/if}
	{/snippet}
</ComboboxPrimitive.Item>
