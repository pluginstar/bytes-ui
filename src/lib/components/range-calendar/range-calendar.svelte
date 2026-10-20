<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
	import type { DateRange } from "bits-ui";
	import type { DateValue } from "@internationalized/date";
	import { cn } from "../../utils.js";

	type Props = {
		value?: DateRange;
		placeholder?: DateValue;
		class?: string;
		weekdayFormat?: "narrow" | "short" | "long";
		fixedWeeks?: boolean;
		ref?: HTMLElement | null;
	};

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: className = "",
		weekdayFormat = "short",
		fixedWeeks = true,
	}: Props = $props();
</script>

<RangeCalendarPrimitive.Root
	bind:ref
	bind:value
	bind:placeholder
	{weekdayFormat}
	{fixedWeeks}
	class={cn(
		"rounded-card border border-border-card bg-background p-5 text-foreground shadow-card select-none w-fit",
		className
	)}
>
	{#snippet children({ months, weekdays })}
		<RangeCalendarPrimitive.Header class="flex items-center justify-between pb-4">
			<RangeCalendarPrimitive.PrevButton
				class="inline-flex size-8 items-center justify-center rounded-item border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-btn hover:bg-muted/50 transition-all active:scale-95"
			>
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</RangeCalendarPrimitive.PrevButton>

			<RangeCalendarPrimitive.Heading class="text-sm font-semibold tracking-tight" />

			<RangeCalendarPrimitive.NextButton
				class="inline-flex size-8 items-center justify-center rounded-item border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-btn hover:bg-muted/50 transition-all active:scale-95"
			>
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</RangeCalendarPrimitive.NextButton>
		</RangeCalendarPrimitive.Header>

		<div class="flex flex-col space-y-4 pt-1 sm:flex-row sm:space-x-4 sm:space-y-0">
			{#each months as month}
				<RangeCalendarPrimitive.Grid class="w-full border-collapse space-y-1">
					<RangeCalendarPrimitive.GridHead>
						<RangeCalendarPrimitive.GridRow class="mb-2 flex w-full justify-between">
							{#each weekdays as day}
								<RangeCalendarPrimitive.HeadCell class="w-9 text-center text-xs font-medium text-muted-foreground">
									{day.slice(0, 2)}
								</RangeCalendarPrimitive.HeadCell>
							{/each}
						</RangeCalendarPrimitive.GridRow>
					</RangeCalendarPrimitive.GridHead>

					<RangeCalendarPrimitive.GridBody>
						{#each month.weeks as weekDates}
							<RangeCalendarPrimitive.GridRow class="flex w-full justify-between">
								{#each weekDates as date}
									<RangeCalendarPrimitive.Cell
										{date}
										month={month.value}
										class="relative size-9 text-center text-sm p-0 flex items-center justify-center"
									>
										<RangeCalendarPrimitive.Day
											class={cn(
												"inline-flex size-8 items-center justify-center rounded-item text-xs font-medium transition-all outline-hidden select-none",
												"hover:bg-muted hover:text-foreground",
												"data-[selection-start]:bg-dark data-[selection-start]:text-background data-[selection-start]:font-semibold",
												"data-[selection-end]:bg-dark data-[selection-end]:text-background data-[selection-end]:font-semibold",
												"data-[highlighted]:bg-muted data-[selected]:bg-muted",
												"data-[disabled]:text-muted-foreground/40 data-[disabled]:pointer-events-none",
												"data-[outside-month]:text-muted-foreground/30 data-[outside-month]:pointer-events-none"
											)}
										>
											{date.day}
										</RangeCalendarPrimitive.Day>
									</RangeCalendarPrimitive.Cell>
								{/each}
							</RangeCalendarPrimitive.GridRow>
						{/each}
					</RangeCalendarPrimitive.GridBody>
				</RangeCalendarPrimitive.Grid>
			{/each}
		</div>
	{/snippet}
</RangeCalendarPrimitive.Root>
