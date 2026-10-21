<script lang="ts">
	import { DateField, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import * as DateField from "bytes-ui/date-field";
<\/script>

<div class="grid w-full max-w-xs gap-1.5">
  <DateField.Label class="text-sm font-medium">Event Date</DateField.Label>
  <DateField.Root>
    <DateField.Input />
  </DateField.Root>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Date Field
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Allows users to enter and edit date values using keyboard segments with locale-aware formatting.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="date-field-demo" code={codeExample}>
			{#snippet preview()}
				<DateField.Root>
					<div class="grid w-full max-w-xs gap-2">
						<DateField.Label class="text-sm font-medium text-foreground">Event Date</DateField.Label>
						<DateField.Input />
					</div>
				</DateField.Root>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
