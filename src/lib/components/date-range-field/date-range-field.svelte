<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from "bits-ui";
	import type { DateRange } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: className = "",
		label = "",
		...restProps
	}: DateRangeFieldPrimitive.RootProps & { label?: string } = $props();
</script>

<DateRangeFieldPrimitive.Root
	bind:ref
	bind:value
	bind:placeholder
	class={cn("flex flex-col gap-1.5", className)}
	{...restProps}
>
	{#if label}
		<DateRangeFieldPrimitive.Label class="block select-none text-sm font-medium text-foreground">
			{label}
		</DateRangeFieldPrimitive.Label>
	{/if}
	<div
		class="flex h-10 w-full select-none items-center rounded-input border border-border-input bg-background px-3 py-2 text-sm text-foreground shadow-input transition-colors focus-within:border-ring focus-within:ring-1 focus-within:ring-ring"
	>
		{#each ["start", "end"] as const as type (type)}
			<DateRangeFieldPrimitive.Input {type}>
				{#snippet children({ segments })}
					{#each segments as { part, value: segVal }, i (part + i)}
						{#if part === "literal"}
							<DateRangeFieldPrimitive.Segment {part} class="p-0.5 text-muted-foreground select-none">
								{segVal}
							</DateRangeFieldPrimitive.Segment>
						{:else}
							<DateRangeFieldPrimitive.Segment
								{part}
								class="rounded-item px-1 py-0.5 outline-hidden transition-colors hover:bg-muted focus:bg-dark focus:text-background aria-[valuetext=Empty]:text-muted-foreground"
							>
								{segVal}
							</DateRangeFieldPrimitive.Segment>
						{/if}
					{/each}
				{/snippet}
			</DateRangeFieldPrimitive.Input>
			{#if type === "start"}
				<div aria-hidden="true" class="px-1.5 text-muted-foreground select-none">–</div>
			{/if}
		{/each}
	</div>
</DateRangeFieldPrimitive.Root>
