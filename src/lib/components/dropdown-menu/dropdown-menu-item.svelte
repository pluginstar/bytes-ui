<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: DropdownMenuPrimitive.ItemProps & { children?: Snippet } = $props();
</script>

<DropdownMenuPrimitive.Item
	bind:ref
	class={cn(
		"relative flex cursor-pointer select-none items-center rounded-item px-3 py-2 text-sm outline-hidden transition-colors",
		"data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
		"data-disabled:pointer-events-none data-disabled:opacity-50",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</DropdownMenuPrimitive.Item>
