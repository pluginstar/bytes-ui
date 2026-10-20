<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: DialogPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<DialogPrimitive.Portal>
	<DialogPrimitive.Overlay
		class="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-all duration-150 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
	/>
	<DialogPrimitive.Content
		bind:ref
		class={cn(
			"fixed left-1/2 top-1/2 z-50 w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 sm:max-w-[490px]",
			"rounded-card-lg border border-border-card bg-background p-7 shadow-popover outline-hidden",
			"transition-all duration-150 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</DialogPrimitive.Content>
</DialogPrimitive.Portal>
