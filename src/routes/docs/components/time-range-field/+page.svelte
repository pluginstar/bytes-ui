<script lang="ts">
	import { TimeRangeField, ComponentPreview } from "#lib";
	import type { TimeRange } from "bits-ui";

	let value = $state<TimeRange>();

	const codeExample = `<script lang="ts">
  import { TimeRangeField } from "bytes-ui";
  let value = $state();
<\/script>

<div class="w-full max-w-xs">
  <TimeRangeField label="Shift Hours" bind:value />
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Time Range Field
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Provides an accessible segmented time range input with start and end intervals.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="time-range-field-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-xs">
					<TimeRangeField label="Shift Hours" bind:value />
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
