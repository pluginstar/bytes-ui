<script lang="ts">
	import { RatingGroup as RatingGroupPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(0),
		max = 5,
		class: className = "",
		children,
		...restProps
	}: RatingGroupPrimitive.RootProps = $props();
</script>

<RatingGroupPrimitive.Root
	bind:ref
	bind:value
	{max}
	class={cn("flex items-center gap-1", className)}
	{...restProps}
>
	{#snippet children({ items })}
		{#each items as item (item.index)}
			<RatingGroupPrimitive.Item
				index={item.index}
				class="group size-8 cursor-pointer rounded-item p-1 transition-all text-foreground hover:scale-110 active:scale-95 outline-hidden data-[state=inactive]:text-muted-foreground/30 data-[highlighted]:text-foreground"
			>
				{#snippet children({ state })}
					<svg
						class={cn(
							"size-full transition-colors",
							state === "active" ? "fill-current text-foreground" : "fill-muted-foreground/20 text-muted-foreground/30"
						)}
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
						/>
					</svg>
				{/snippet}
			</RatingGroupPrimitive.Item>
		{/each}
	{/snippet}
</RatingGroupPrimitive.Root>
