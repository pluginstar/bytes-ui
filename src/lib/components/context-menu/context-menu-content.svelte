<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: ContextMenuPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<ContextMenuPrimitive.Portal>
	<ContextMenuPrimitive.Content
		bind:ref
		class={cn(
			"z-50 min-w-[12rem] overflow-hidden rounded-card border border-border-card bg-background p-1.5 shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</ContextMenuPrimitive.Content>
</ContextMenuPrimitive.Portal>
