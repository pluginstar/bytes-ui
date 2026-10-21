<script lang="ts">
	import { Slider, ComponentPreview } from "#lib";

	let volume = $state(65);

	const codeExample = `<script lang="ts">
  import { Slider } from "bytes-ui";
  let volume = $state(50);
<\/script>

<div class="w-[300px]">
  <Slider bind:value={volume} max={100} step={1} />
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Slider
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			An input where the user selects a value from within a given range with smooth drag and touch support.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="slider-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-[320px] space-y-4">
					<div class="flex items-center justify-between text-xs font-mono">
						<span class="text-muted-foreground">Volume Level</span>
						<span class="font-bold">{volume}%</span>
					</div>
					<Slider bind:value={volume} max={100} step={1} />
				</div>
			{/snippet}
		</ComponentPreview>
</div>
