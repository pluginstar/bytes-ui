<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		sideOffset = 6,
		children,
		...restProps
	}: DatePickerPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<DatePickerPrimitive.Portal>
	<DatePickerPrimitive.Content
		bind:ref
		{sideOffset}
		class={cn(
			"z-50 overflow-hidden rounded-card border border-border-card bg-background p-3 shadow-popover outline-hidden",
			"transition-all data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</DatePickerPrimitive.Content>
</DatePickerPrimitive.Portal>
