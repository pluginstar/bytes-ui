<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: NavigationMenuPrimitive.TriggerProps & { children?: Snippet } = $props();
</script>

<NavigationMenuPrimitive.Trigger
	bind:ref
	class={cn(
		"group inline-flex h-8 w-max items-center justify-center rounded-item px-3 py-1 text-sm font-medium transition-colors select-none outline-hidden",
		"hover:bg-muted text-foreground data-[state=open]:bg-muted",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<svg
		class="relative top-px ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
	>
		<polyline points="6 9 12 15 18 9" />
	</svg>
</NavigationMenuPrimitive.Trigger>
