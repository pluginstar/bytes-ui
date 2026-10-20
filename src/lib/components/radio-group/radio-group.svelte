<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className = "",
		children,
		...restProps
	}: RadioGroupPrimitive.RootProps & { children?: Snippet } = $props();
</script>

<RadioGroupPrimitive.Root
	bind:ref
	bind:value
	class={cn("grid gap-3", className)}
	{...restProps}
>
	{@render children?.()}
</RadioGroupPrimitive.Root>
