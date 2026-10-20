<script lang="ts">
	import { Progress as ProgressPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(0),
		max = 100,
		class: className = "",
		...restProps
	}: ProgressPrimitive.RootProps = $props();
</script>

<ProgressPrimitive.Root
	bind:ref
	{value}
	{max}
	class={cn(
		"relative h-2.5 w-full overflow-hidden rounded-full bg-muted shadow-mini-inset",
		className
	)}
	{...restProps}
>
	<div
		class="h-full w-full flex-1 bg-dark transition-all duration-300 rounded-full"
		style={`transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 100)}%)`}
	></div>
</ProgressPrimitive.Root>
