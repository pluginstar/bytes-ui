<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: AccordionPrimitive.TriggerProps & { children?: Snippet } = $props();
</script>

<AccordionPrimitive.Header class="flex">
	<AccordionPrimitive.Trigger
		bind:ref
		class={cn(
			"flex flex-1 items-center justify-between py-4 text-[15px] font-medium transition-all outline-hidden select-none",
			"[&[data-state=open]>svg]:rotate-180",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		<svg
			class="size-4 shrink-0 transition-transform duration-200 text-muted-foreground"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
