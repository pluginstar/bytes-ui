<script lang="ts">
	import { Label as LabelPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: LabelPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<LabelPrimitive.Root
	bind:ref
	class={cn(
		"text-sm font-medium leading-none select-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</LabelPrimitive.Root>
