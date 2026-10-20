<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: TabsPrimitive.ContentProps & { children?: Snippet } = $props();
</script>

<TabsPrimitive.Content
	bind:ref
	class={cn("mt-4 outline-hidden", className)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.Content>
