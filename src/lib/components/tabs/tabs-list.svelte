<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: TabsPrimitive.ListProps & { children?: Snippet } = $props();
</script>

<TabsPrimitive.List
	bind:ref
	class={cn(
		"inline-flex items-center justify-center rounded-input bg-muted/80 p-1 text-muted-foreground",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.List>
