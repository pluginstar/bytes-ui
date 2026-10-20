<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: AccordionPrimitive.ItemProps & { children?: Snippet } = $props();
</script>

<AccordionPrimitive.Item
	bind:ref
	class={cn("border-b border-border-card", className)}
	{...restProps}
>
	{@render children?.()}
</AccordionPrimitive.Item>
