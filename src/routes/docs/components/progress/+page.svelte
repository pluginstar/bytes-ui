<script lang="ts">
	import { Progress, Button, ComponentPreview } from "#lib";

	let progress = $state(45);

	const codeExample = `<script lang="ts">
  import { Progress } from "bytes-ui";
  let progress = $state(45);
<\/script>

<Progress value={progress} max={100} class="w-[300px]" />`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Progress
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Displays an indicator showing the completion progress of a task with fluid bar transitions.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="progress-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-[320px] space-y-4">
					<div class="flex items-center justify-between text-xs font-mono">
						<span class="text-muted-foreground">Uploading assets...</span>
						<span class="font-bold">{progress}%</span>
					</div>
					<Progress value={progress} max={100} />
					<div class="flex justify-center gap-2 pt-2">
						<Button size="sm" variant="outline" onclick={() => progress = Math.max(0, progress - 15)}>
							-15%
						</Button>
						<Button size="sm" variant="outline" onclick={() => progress = Math.min(100, progress + 15)}>
							+15%
						</Button>
					</div>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
