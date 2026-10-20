<script lang="ts">
	import { Slider as SliderPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(0),
		class: className = "",
		min = 0,
		max = 100,
		step = 1,
		disabled = false,
	}: {
		ref?: HTMLElement | null;
		value?: number;
		class?: string;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
	} = $props();
</script>

<SliderPrimitive.Root
	type="single"
	bind:ref
	bind:value
	{min}
	{max}
	{step}
	{disabled}
	class={cn("relative flex w-full touch-none select-none items-center", className)}
>
	<span class="relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full bg-muted">
		<SliderPrimitive.Range class="absolute h-full bg-dark" />
	</span>
	<SliderPrimitive.Thumb
		index={0}
		class="block size-5 cursor-pointer rounded-full border-2 border-dark bg-background shadow-mini transition-transform active:scale-95 outline-hidden focus-visible:ring-2 focus-visible:ring-dark disabled:pointer-events-none disabled:opacity-50"
	/>
</SliderPrimitive.Root>
