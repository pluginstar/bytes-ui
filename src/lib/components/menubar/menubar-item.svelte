<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: MenubarPrimitive.ItemProps & { children?: Snippet } = $props();
</script>

<MenubarPrimitive.Item
	bind:ref
	class={cn(
		"relative flex h-9 cursor-pointer select-none items-center rounded-item px-3 py-1.5 text-sm text-foreground outline-hidden transition-colors",
		"data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</MenubarPrimitive.Item>
