<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: CommandPrimitive.EmptyProps & { children?: Snippet } = $props();
</script>

<CommandPrimitive.Empty
	bind:ref
	class={cn("py-6 text-center text-sm text-muted-foreground", className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{:else}
		No results found.
	{/if}
</CommandPrimitive.Empty>
