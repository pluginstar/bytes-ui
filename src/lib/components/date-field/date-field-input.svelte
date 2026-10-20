<script lang="ts">
	import { DateField as DateFieldPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children: childrenProp,
		...restProps
	}: DateFieldPrimitive.InputProps & { children?: Snippet<[{ segments: any[] }]> } = $props();
</script>

<DateFieldPrimitive.Input
	bind:ref
	class={cn(
		"flex h-10 w-full select-none items-center rounded-input border border-border-input bg-background px-3 py-2 text-sm text-foreground shadow-input transition-colors",
		"focus-within:border-ring focus-within:ring-1 focus-within:ring-ring",
		className
	)}
	{...restProps}
>
	{#snippet children({ segments })}
		{#if childrenProp}
			{@render childrenProp({ segments })}
		{:else}
			{#each segments as { part, value }, i (part + i)}
				{#if part === "literal"}
					<DateFieldPrimitive.Segment {part} class="p-0.5 text-muted-foreground select-none">
						{value}
					</DateFieldPrimitive.Segment>
				{:else}
					<DateFieldPrimitive.Segment
						{part}
						class="rounded-item px-1 py-0.5 outline-hidden transition-colors hover:bg-muted focus:bg-dark focus:text-background aria-[valuetext=Empty]:text-muted-foreground"
					>
						{value}
					</DateFieldPrimitive.Segment>
				{/if}
			{/each}
		{/if}
	{/snippet}
</DateFieldPrimitive.Input>
