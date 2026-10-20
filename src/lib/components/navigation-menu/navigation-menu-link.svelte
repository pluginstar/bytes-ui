<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: NavigationMenuPrimitive.LinkProps & { children?: Snippet } = $props();
</script>

<NavigationMenuPrimitive.Link
	bind:ref
	class={cn(
		"block select-none rounded-item p-3 leading-none no-underline outline-hidden transition-colors hover:bg-muted text-foreground focus:bg-muted",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</NavigationMenuPrimitive.Link>
