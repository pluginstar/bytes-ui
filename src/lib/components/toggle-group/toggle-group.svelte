<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className = "",
		children,
		...restProps
	}: any = $props();
</script>

<ToggleGroupPrimitive.Root
	bind:ref
	bind:value
	class={cn(
		"inline-flex items-center gap-1 rounded-input border border-border-card bg-background p-1 shadow-mini",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ToggleGroupPrimitive.Root>
