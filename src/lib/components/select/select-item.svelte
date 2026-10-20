<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		value,
		label,
		children,
		...restProps
	}: SelectPrimitive.ItemProps & { children?: Snippet<[any]> | Snippet } = $props();
</script>

<SelectPrimitive.Item
	bind:ref
	{value}
	{label}
	class={cn(
		"relative flex w-full cursor-pointer select-none items-center rounded-item px-3 py-2 text-sm outline-hidden transition-colors",
		"data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
		"data-disabled:pointer-events-none data-disabled:opacity-50",
		className
	)}
	{...restProps}
>
	{#snippet children(itemState)}
		<span class="truncate">
			{@render children?.(itemState)}
		</span>
		{#if itemState.selected}
			<span class="ml-auto flex items-center">
				<svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
				</svg>
			</span>
		{/if}
	{/snippet}
</SelectPrimitive.Item>
