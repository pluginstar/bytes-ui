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
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Range Calendar
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Enables selection of contiguous date ranges with keyboard navigation and internationalized formatting.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="range-calendar-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-4">
					<RangeCalendar bind:value={range} />
				</div>
			{/snippet}
		</ComponentPreview>
</div>
