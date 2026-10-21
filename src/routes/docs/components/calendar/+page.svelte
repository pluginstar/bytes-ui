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
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Calendar
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			A display of days organized into weeks and months, allowing users to navigate and select dates.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="calendar-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-4">
					<Calendar bind:value={date} />
					<p class="text-xs font-mono text-muted-foreground">Selected date: {date.toString()}</p>
				</div>
			{/snippet}
		</ComponentPreview>
</div>
