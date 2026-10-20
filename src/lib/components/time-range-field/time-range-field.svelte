<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: className = "",
		label = "",
		...restProps
	}: TimeRangeFieldPrimitive.RootProps & { label?: string } = $props();
</script>

<TimeRangeFieldPrimitive.Root
	bind:ref
	bind:value
	bind:placeholder
	class={cn("flex flex-col gap-1.5", className)}
	{...restProps}
>
	{#if label}
		<TimeRangeFieldPrimitive.Label class="block select-none text-sm font-medium text-foreground">
			{label}
		</TimeRangeFieldPrimitive.Label>
	{/if}
	<div
		class="flex h-10 w-full select-none items-center rounded-input border border-border-input bg-background px-3 py-2 text-sm text-foreground shadow-input transition-colors focus-within:border-ring focus-within:ring-1 focus-within:ring-ring"
	>
		{#each ["start", "end"] as const as type (type)}
			<TimeRangeFieldPrimitive.Input {type}>
				{#snippet children({ segments })}
					{#each segments as { part, value: segVal }, i (part + i)}
						{#if part === "literal"}
							<TimeRangeFieldPrimitive.Segment {part} class="p-0.5 text-muted-foreground select-none">
								{segVal}
							</TimeRangeFieldPrimitive.Segment>
						{:else}
							<TimeRangeFieldPrimitive.Segment
								{part}
								class="rounded-item px-1 py-0.5 outline-hidden transition-colors hover:bg-muted focus:bg-dark focus:text-background aria-[valuetext=Empty]:text-muted-foreground"
							>
								{segVal}
							</TimeRangeFieldPrimitive.Segment>
						{/if}
					{/each}
				{/snippet}
			</TimeRangeFieldPrimitive.Input>
			{#if type === "start"}
				<div aria-hidden="true" class="px-1.5 text-muted-foreground select-none">–</div>
			{/if}
		{/each}
	</div>
</TimeRangeFieldPrimitive.Root>
