<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: ToolbarPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<ToolbarPrimitive.Root
	bind:ref
	class={cn(
		"flex h-12 items-center gap-1 rounded-input border border-border-card bg-background p-1 shadow-mini",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ToolbarPrimitive.Root>
