<script lang="ts">
	import { Combobox as ComboboxPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		sideOffset = 6,
		children,
		...restProps
	}: ComboboxPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<ComboboxPrimitive.Portal>
	<ComboboxPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"relative z-50 min-w-[8rem] max-h-72 overflow-y-auto rounded-card border border-border-card bg-background p-1.5 shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		<ComboboxPrimitive.Viewport class="p-0.5">
			{@render children?.()}
		</ComboboxPrimitive.Viewport>
	</ComboboxPrimitive.Content>
</ComboboxPrimitive.Portal>
