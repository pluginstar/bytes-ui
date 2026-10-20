<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { inputVariants, type InputSize } from "./input.js";
	import { cn } from "../../utils.js";

	type Props = Omit<HTMLInputAttributes, "size"> & {
		size?: InputSize;
		class?: string;
		value?: string | number;
		ref?: HTMLInputElement | null;
	};

	let {
		size = "default",
		class: className = "",
		value = $bindable(),
		ref = $bindable(null),
		...restProps
	}: Props = $props();
</script>

<input
	bind:this={ref}
	bind:value
	class={cn(inputVariants({ size }), className)}
	{...restProps}
/>
