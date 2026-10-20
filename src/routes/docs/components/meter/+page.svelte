<script lang="ts">
	import { Meter, ComponentPreview } from "#lib";

	let value = $state(68);

	const codeExample = `<script lang="ts">
  import { Meter } from "bytes-ui";
  let value = $state(68);
<\/script>

<div class="w-full max-w-sm space-y-2">
  <div class="flex justify-between text-sm font-medium">
    <span>Storage space</span>
    <span class="text-muted-foreground">{value}%</span>
  </div>
  <Meter {value} max={100} />
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Meter
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Displays a scalar measurement within a known range, such as disk capacity or memory usage.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="meter-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-sm space-y-2">
					<div class="flex justify-between text-sm font-medium">
						<span>Storage space</span>
						<span class="text-muted-foreground">{value}%</span>
					</div>
					<Meter {value} max={100} />
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
