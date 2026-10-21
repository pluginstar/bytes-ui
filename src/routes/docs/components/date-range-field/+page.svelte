<script lang="ts">
	import { DateRangeField, ComponentPreview } from "#lib";
	import type { DateRange } from "bits-ui";

	let range = $state<DateRange>();

	const codeExample = `<script lang="ts">
  import { DateRangeField } from "bytes-ui";
  import type { DateRange } from "bits-ui";

  let range = $state<DateRange>();
<\/script>

<div class="w-full max-w-xs">
  <DateRangeField label="Booking Window" bind:value={range} />
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Date Range Field
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Allows entering and editing start and end date values using keyboard segments with validation.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="date-range-field-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-xs">
					<DateRangeField label="Booking Window" bind:value={range} />
				</div>
			{/snippet}
		</ComponentPreview>
</div>
