<script lang="ts">
	import { RangeCalendar, ComponentPreview } from "#lib";
	import type { DateRange } from "bits-ui";

	let range = $state<DateRange>();

	const codeExample = `<script lang="ts">
  import { RangeCalendar } from "bytes-ui";
  let range = $state();
<\/script>

<RangeCalendar bind:value={range} />`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Range Calendar
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Enables selection of contiguous date ranges with keyboard navigation and internationalized formatting.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="range-calendar-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-4">
					<RangeCalendar bind:value={range} />
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
