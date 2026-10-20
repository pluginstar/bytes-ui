<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		...restProps
	}: CommandPrimitive.InputProps = $props();
</script>

<div class="flex items-center border-b border-border-card px-3">
	<svg class="mr-2 size-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		<circle cx="11" cy="11" r="8" />
		<line x1="21" y1="21" x2="16.65" y2="16.65" />
	</svg>
	<CommandPrimitive.Input
		bind:ref
		class={cn(
			"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-foreground",
			className
		)}
		{...restProps}
	/>
</div>
