<script lang="ts">
	import { DatePicker, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { DatePicker } from "bytes-ui";
<\/script>

<div class="grid w-full max-w-xs gap-1.5">
  <DatePicker.Label class="text-sm font-medium">Select Date</DatePicker.Label>
  <DatePicker.Root weekdayFormat="short" fixedWeeks={true}>
    <DatePicker.Input class="flex h-10 w-full items-center rounded-input border border-border-input bg-background px-3 py-2 text-sm shadow-input">
      {#snippet children({ segments })}
        {#each segments as { part, value }}
          <DatePicker.Segment {part} class="rounded-item px-1 py-0.5 outline-hidden hover:bg-muted focus:bg-dark focus:text-background">
            {value}
          </DatePicker.Segment>
        {/each}
        <DatePicker.Trigger class="ml-auto inline-flex size-7 items-center justify-center rounded-item hover:bg-muted">
          📅
        </DatePicker.Trigger>
      {/snippet}
    </DatePicker.Input>
  </DatePicker.Root>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Date Picker
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Combines a segmented date input field with an interactive calendar popover for intuitive date selection.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="date-picker-demo" code={codeExample}>
			{#snippet preview()}
				<DatePicker.Root weekdayFormat="short" fixedWeeks={true}>
					<div class="grid w-full max-w-xs gap-2">
						<DatePicker.Label class="text-sm font-medium text-foreground">Select Date</DatePicker.Label>
						<DatePicker.Input class="flex h-10 w-full items-center rounded-input border border-border-input bg-background px-3 py-2 text-sm shadow-input">
							{#snippet children({ segments })}
								{#each segments as { part, value }}
									{#if part === "literal"}
										<DatePicker.Segment {part} class="p-0.5 text-muted-foreground">
											{value}
										</DatePicker.Segment>
									{:else}
										<DatePicker.Segment
											{part}
											class="rounded-item px-1 py-0.5 outline-hidden transition-colors hover:bg-muted focus:bg-dark focus:text-background"
										>
											{value}
										</DatePicker.Segment>
									{/if}
								{/each}
								<DatePicker.Trigger class="ml-auto inline-flex size-7 items-center justify-center rounded-item hover:bg-muted text-xs">
									📅
								</DatePicker.Trigger>
							{/snippet}
						</DatePicker.Input>
					</div>
				</DatePicker.Root>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
