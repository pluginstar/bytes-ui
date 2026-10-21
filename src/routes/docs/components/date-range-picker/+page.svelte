<script lang="ts">
	import { DateRangePicker, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { DateRangePicker } from "bytes-ui";
<\/script>

<div class="grid w-full max-w-sm gap-1.5">
  <DateRangePicker.Label class="text-sm font-medium">Trip Dates</DateRangePicker.Label>
  <DateRangePicker.Root weekdayFormat="short" fixedWeeks={true}>
    <div class="flex h-10 w-full items-center rounded-input border border-border-input bg-background px-3 py-2 text-sm shadow-input">
      {#each ["start", "end"] as const as type}
        <DateRangePicker.Input {type}>
          {#snippet children({ segments })}
            {#each segments as { part, value }}
              <DateRangePicker.Segment {part} class="rounded-item px-1 py-0.5 outline-hidden hover:bg-muted focus:bg-dark focus:text-background">
                {value}
              </DateRangePicker.Segment>
            {/each}
          {/snippet}
        </DateRangePicker.Input>
        {#if type === "start"}
          <span class="px-1 text-muted-foreground">–</span>
        {/if}
      {/each}
      <DateRangePicker.Trigger class="ml-auto inline-flex size-7 items-center justify-center rounded-item hover:bg-muted text-xs">
        📅
      </DateRangePicker.Trigger>
    </div>
  </DateRangePicker.Root>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Date Range Picker
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Combines start and end date inputs with a dual or single range calendar popover for easy date span selection.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="date-range-picker-demo" code={codeExample}>
			{#snippet preview()}
				<DateRangePicker.Root weekdayFormat="short" fixedWeeks={true} class="grid w-full max-w-sm gap-2">
					<DateRangePicker.Label class="text-sm font-medium text-foreground">Trip Dates</DateRangePicker.Label>
					<div class="flex h-10 w-full items-center rounded-input border border-border-input bg-background px-3 py-2 text-sm shadow-input">
						{#each ["start", "end"] as const as type}
							<DateRangePicker.Input {type}>
								{#snippet children({ segments })}
									{#each segments as { part, value }}
										{#if part === "literal"}
											<DateRangePicker.Segment {part} class="p-0.5 text-muted-foreground">
												{value}
											</DateRangePicker.Segment>
										{:else}
											<DateRangePicker.Segment
												{part}
												class="rounded-item px-1 py-0.5 outline-hidden transition-colors hover:bg-muted focus:bg-dark focus:text-background"
											>
												{value}
											</DateRangePicker.Segment>
										{/if}
									{/each}
								{/snippet}
							</DateRangePicker.Input>
							{#if type === "start"}
								<span class="px-1 text-muted-foreground select-none">–</span>
							{/if}
						{/each}
						<DateRangePicker.Trigger class="ml-auto inline-flex size-7 items-center justify-center rounded-item hover:bg-muted text-xs">
							📅
						</DateRangePicker.Trigger>
					</div>
				</DateRangePicker.Root>
			{/snippet}
		</ComponentPreview>
</div>
