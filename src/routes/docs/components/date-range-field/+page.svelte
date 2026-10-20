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
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Date Range Field
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Allows entering and editing start and end date values using keyboard segments with validation.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="date-range-field-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-xs">
					<DateRangeField label="Booking Window" bind:value={range} />
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
