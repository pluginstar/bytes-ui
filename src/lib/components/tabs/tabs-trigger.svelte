<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: TabsPrimitive.TriggerProps & { children?: Snippet } = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	class={cn(
		"inline-flex items-center justify-center whitespace-nowrap rounded-item px-3.5 py-1.5 text-sm font-medium transition-all outline-hidden select-none",
		"text-muted-foreground hover:text-foreground",
		"data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-mini font-semibold",
		"disabled:pointer-events-none disabled:opacity-50",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.Trigger>
