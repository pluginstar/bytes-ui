<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: NavigationMenuPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<NavigationMenuPrimitive.Content
	bind:ref
	class={cn(
		"left-0 top-0 w-full md:absolute md:w-auto",
		"rounded-card border border-border-card bg-background p-3 shadow-popover outline-hidden",
		"data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</NavigationMenuPrimitive.Content>
