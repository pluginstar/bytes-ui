<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: CollapsiblePrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<CollapsiblePrimitive.Content
	bind:ref
	class={cn(
		"overflow-hidden transition-all",
		"data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</CollapsiblePrimitive.Content>
