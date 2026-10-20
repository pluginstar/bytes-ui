<script lang="ts">
	import { Calendar, ComponentPreview } from "#lib";
	import { today, getLocalTimeZone } from "@internationalized/date";

	let date = $state(today(getLocalTimeZone()));

	const codeExample = `<script lang="ts">
  import { Calendar } from "bytes-ui";
  import { today, getLocalTimeZone } from "@internationalized/date";

  let date = $state(today(getLocalTimeZone()));
<\/script>

<Calendar bind:value={date} />`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Calendar
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A display of days organized into weeks and months, allowing users to navigate and select dates.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="calendar-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-4">
					<Calendar bind:value={date} />
					<p class="text-xs font-mono text-muted-foreground">Selected date: {date.toString()}</p>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
