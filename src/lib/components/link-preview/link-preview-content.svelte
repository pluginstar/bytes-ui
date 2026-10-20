<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		sideOffset = 8,
		children,
		...restProps
	}: LinkPreviewPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<LinkPreviewPrimitive.Portal>
	<LinkPreviewPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"z-50 w-80 rounded-card border border-border-card bg-background p-4 shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</LinkPreviewPrimitive.Content>
</LinkPreviewPrimitive.Portal>
