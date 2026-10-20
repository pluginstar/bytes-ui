<script lang="ts">
	import { Combobox as ComboboxPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		...restProps
	}: ComboboxPrimitive.InputProps = $props();
</script>

<ComboboxPrimitive.Input
	bind:ref
	class={cn(
		"flex h-10 w-full rounded-input border border-border-input bg-background px-3 py-2 text-sm text-foreground shadow-input transition-colors outline-hidden placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	{...restProps}
/>
