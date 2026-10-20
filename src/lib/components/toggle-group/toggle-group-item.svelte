<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value,
		class: className = "",
		children,
		...restProps
	}: ToggleGroupPrimitive.ItemProps & { children?: Snippet } = $props();
</script>

<ToggleGroupPrimitive.Item
	bind:ref
	{value}
	class={cn(
		"inline-flex size-9 items-center justify-center rounded-item text-sm font-medium transition-all outline-hidden select-none",
		"text-muted-foreground hover:bg-muted/70 hover:text-foreground",
		"data-[state=on]:bg-muted data-[state=on]:text-foreground data-[state=on]:shadow-mini",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ToggleGroupPrimitive.Item>
