<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: any = $props();
</script>

<ToolbarPrimitive.Button
	bind:ref
	class={cn(
		"inline-flex size-9 items-center justify-center rounded-item text-sm font-medium transition-all outline-hidden select-none",
		"text-muted-foreground hover:bg-muted hover:text-foreground",
		"data-[state=on]:bg-muted data-[state=on]:text-foreground",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ToolbarPrimitive.Button>
