<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: MenubarPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<MenubarPrimitive.Root
	bind:ref
	class={cn(
		"flex h-10 items-center gap-1 rounded-input border border-border-card bg-background p-1 shadow-mini",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</MenubarPrimitive.Root>
