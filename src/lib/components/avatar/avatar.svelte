<script lang="ts">
	import { Avatar as AvatarPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		delayMs = 0,
		children,
		...restProps
	}: AvatarPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<AvatarPrimitive.Root
	bind:ref
	{delayMs}
	class={cn(
		"relative flex size-10 shrink-0 overflow-hidden rounded-full border border-border-card bg-muted text-muted-foreground",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</AvatarPrimitive.Root>
