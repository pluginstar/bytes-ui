<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		sideOffset = 6,
		align = "start",
		children,
		...restProps
	}: MenubarPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<MenubarPrimitive.Portal>
	<MenubarPrimitive.Content
		bind:ref
		{sideOffset}
		{align}
		class={cn(
			"z-50 min-w-[12rem] overflow-hidden rounded-card border border-border-card bg-background p-1.5 shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</MenubarPrimitive.Content>
</MenubarPrimitive.Portal>
