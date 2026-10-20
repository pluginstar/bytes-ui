<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: NavigationMenuPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<NavigationMenuPrimitive.Root
	bind:ref
	class={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
	{...restProps}
>
	{@render children?.()}
</NavigationMenuPrimitive.Root>
