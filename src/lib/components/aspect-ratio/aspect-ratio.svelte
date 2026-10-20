<script lang="ts">
	import { AspectRatio as AspectRatioPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		ratio = 16 / 9,
		class: className = "",
		children,
		...restProps
	}: AspectRatioPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<AspectRatioPrimitive.Root
	bind:ref
	{ratio}
	class={cn("relative w-full overflow-hidden", className)}
	{...restProps}
>
	{@render children?.()}
</AspectRatioPrimitive.Root>
