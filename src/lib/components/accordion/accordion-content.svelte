<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: AccordionPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	class={cn(
		"overflow-hidden text-sm text-foreground-alt transition-all",
		"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		className
	)}
	{...restProps}
>
	<div class="pb-4 pt-1">
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
