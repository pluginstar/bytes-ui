<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: NavigationMenuPrimitive.ListProps & { children?: Snippet } = $props();
</script>

<NavigationMenuPrimitive.List
	bind:ref
	class={cn(
		"group flex flex-1 list-none items-center justify-center gap-1 rounded-input border border-border-card bg-background p-1 shadow-mini",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</NavigationMenuPrimitive.List>
