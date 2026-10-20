<script lang="ts">
	import { Switch as SwitchPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		class: className = "",
		...restProps
	}: SwitchPrimitive.RootProps = $props();
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	class={cn(
		"peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
		"bg-muted shadow-mini-inset data-[state=checked]:bg-dark",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		class={cn(
			"pointer-events-none block size-5 rounded-full bg-background shadow-mini transition-transform",
			"data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
		)}
	/>
</SwitchPrimitive.Root>
