<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		sideOffset = 6,
		children,
		...restProps
	}: SelectPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<SelectPrimitive.Portal>
	<SelectPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"relative z-50 min-w-[8rem] overflow-hidden rounded-card border border-border-card bg-background p-1.5 shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		<SelectPrimitive.Viewport class="p-0.5">
			{@render children?.()}
		</SelectPrimitive.Viewport>
	</SelectPrimitive.Content>
</SelectPrimitive.Portal>
