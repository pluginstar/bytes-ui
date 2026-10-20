<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: CommandPrimitive.ListProps & { children?: Snippet } = $props();
</script>

<CommandPrimitive.List
	bind:ref
	class={cn("max-h-72 overflow-y-auto overflow-x-hidden p-1.5", className)}
	{...restProps}
>
	<CommandPrimitive.Viewport>
		{@render children?.()}
	</CommandPrimitive.Viewport>
</CommandPrimitive.List>
