<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		sideOffset = 6,
		children,
		...restProps
	}: TooltipPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<TooltipPrimitive.Portal>
	<TooltipPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"z-50 overflow-hidden rounded-item bg-dark px-3 py-1.5 text-xs font-medium text-background shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</TooltipPrimitive.Content>
</TooltipPrimitive.Portal>
