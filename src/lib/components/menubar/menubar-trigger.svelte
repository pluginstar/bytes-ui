<script lang="ts">
	import { Menubar as MenubarPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: MenubarPrimitive.TriggerProps & { children?: Snippet } = $props();
</script>

<MenubarPrimitive.Trigger
	bind:ref
	class={cn(
		"inline-flex h-8 cursor-pointer items-center justify-center rounded-item px-3 text-sm font-medium text-foreground outline-hidden transition-colors select-none",
		"hover:bg-muted data-[state=open]:bg-muted data-[highlighted]:bg-muted",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</MenubarPrimitive.Trigger>
