<script lang="ts">
	import { TimeField, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import * as TimeField from "bytes-ui/time-field";
<\/script>

<div class="grid w-full max-w-xs gap-1.5">
  <TimeField.Label class="text-sm font-medium">Meeting Time</TimeField.Label>
  <TimeField.Root>
    <TimeField.Input />
  </TimeField.Root>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Time Field
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Provides an accessible, segmented input field for hours, minutes, seconds, and AM/PM periods.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="time-field-demo" code={codeExample}>
			{#snippet preview()}
				<TimeField.Root>
					<div class="grid w-full max-w-xs gap-2">
						<TimeField.Label class="text-sm font-medium text-foreground">Meeting Time</TimeField.Label>
						<TimeField.Input />
					</div>
				</TimeField.Root>
			{/snippet}
		</ComponentPreview>
</div>
