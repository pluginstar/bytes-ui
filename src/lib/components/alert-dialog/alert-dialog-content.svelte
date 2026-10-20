<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: AlertDialogPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<AlertDialogPrimitive.Portal>
	<AlertDialogPrimitive.Overlay
		class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-all duration-150 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
	/>
	<AlertDialogPrimitive.Content
		bind:ref
		class={cn(
			"fixed left-1/2 top-1/2 z-50 w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 sm:max-w-lg",
			"rounded-card-lg border border-border-card bg-background p-7 shadow-popover outline-hidden space-y-4",
			"transition-all duration-150 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</AlertDialogPrimitive.Content>
</AlertDialogPrimitive.Portal>
