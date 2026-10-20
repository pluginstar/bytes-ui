<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		sideOffset = 8,
		children,
		...restProps
	}: PopoverPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<PopoverPrimitive.Portal>
	<PopoverPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"z-50 w-72 rounded-card border border-border-card bg-background p-4 text-foreground shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</PopoverPrimitive.Content>
</PopoverPrimitive.Portal>
