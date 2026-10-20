<script lang="ts">
	import { Toggle as TogglePrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		pressed = $bindable(false),
		class: className = "",
		children,
		...restProps
	}: TogglePrimitive.RootProps & { children?: Snippet } = $props();
</script>

<TogglePrimitive.Root
	bind:ref
	bind:pressed
	class={cn(
		"inline-flex h-10 items-center justify-center rounded-input px-3 text-sm font-medium transition-all outline-hidden select-none active:scale-[0.98]",
		"border border-transparent hover:bg-muted text-muted-foreground",
		"data-[state=on]:bg-muted data-[state=on]:text-foreground data-[state=on]:border-border-input shadow-mini",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</TogglePrimitive.Root>
