<script lang="ts">
	import { AspectRatio, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { AspectRatio } from "bytes-ui";
<\/script>

<div class="w-[350px]">
  <AspectRatio ratio={16 / 9} class="rounded-card bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      class="h-full w-full object-cover"
    />
  </AspectRatio>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Aspect Ratio
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Displays content within a desired aspect ratio (e.g. 16:9, 4:3, 1:1) without layout shifting.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="aspect-ratio-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-[360px]">
					<AspectRatio ratio={16 / 9} class="rounded-card border border-border-card bg-muted flex items-center justify-center overflow-hidden shadow-card">
						<div class="flex flex-col items-center justify-center p-6 text-center space-y-1">
							<span class="text-2xl">🖼️</span>
							<span class="text-sm font-semibold">16:9 Aspect Ratio</span>
							<span class="text-xs text-muted-foreground font-mono">w-full / ratio=16/9</span>
						</div>
					</AspectRatio>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
