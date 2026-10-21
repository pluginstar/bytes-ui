<svelte:head>
	<title>Dates - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-3 border-b border-border-card pb-8">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Dates</h1>
		<p class="text-lg text-muted-foreground leading-relaxed">
			Understanding date manipulation and types powered by @internationalized/date.
		</p>
	</div>

	<div class="space-y-6 text-foreground/90 leading-relaxed">
		<p>
			Bytes UI date and time components (Calendar, DateField, DatePicker, RangeCalendar, etc.) rely on the standard <code class="bg-muted px-1.5 py-0.5 rounded text-sm">@internationalized/date</code> package for time-zone safe, locale-aware date manipulation.
		</p>

		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto">
<pre>{`<script lang="ts">
  import { CalendarDate, parseDate } from "@internationalized/date";
  import { Calendar } from "bytes-ui";

  let value = $state(parseDate("2026-10-21"));
<\/script>

<Calendar bind:value />`}</pre>
		</div>
	</div>
</div>
