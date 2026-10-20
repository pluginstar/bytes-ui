<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		value,
		...restProps
	}: RadioGroupPrimitive.ItemProps = $props();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	{value}
	class={cn(
		"aspect-square size-4.5 rounded-full border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-mini transition-all outline-hidden focus-visible:ring-2 focus-visible:ring-dark disabled:cursor-not-allowed disabled:opacity-50",
		"flex items-center justify-center data-[state=checked]:border-dark data-[state=checked]:bg-dark",
		className
	)}
	{...restProps}
>
	<div class="size-2 rounded-full bg-background data-[state=unchecked]:hidden"></div>
</RadioGroupPrimitive.Item>
