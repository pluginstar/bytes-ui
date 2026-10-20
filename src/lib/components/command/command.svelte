<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: CommandPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<CommandPrimitive.Root
	bind:ref
	class={cn(
		"flex h-full w-full flex-col overflow-hidden rounded-card border border-border-card bg-background shadow-popover",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</CommandPrimitive.Root>
