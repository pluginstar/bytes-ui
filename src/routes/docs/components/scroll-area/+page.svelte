<script lang="ts">
	import { ScrollArea, Separator, ComponentPreview } from "#lib";

	const tags = Array.from({ length: 50 }).map((_, i) => `v1.2.0-beta.${50 - i}`);

	const codeExample = `<script lang="ts">
  import { ScrollArea } from "bytes-ui";
<\/script>

<ScrollArea class="h-72 w-48 rounded-card border p-4">
  <h4 class="text-sm font-semibold">Tags</h4>
  {#each tags as tag}
    <div class="text-sm">{tag}</div>
  {/each}
</ScrollArea>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Scroll Area
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Augments native scroll functionality with custom cross-browser, accessible scrollbars.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="scroll-area-demo" code={codeExample}>
			{#snippet preview()}
				<div class="rounded-card border border-border-card bg-background p-4 shadow-card">
					<ScrollArea class="h-64 w-56 pr-3">
						<div class="space-y-2">
							<h4 class="text-sm font-semibold">Release Versions</h4>
							{#each tags as tag}
								<div class="text-xs font-mono py-1 border-b border-border-card/40 last:border-0">
									{tag}
								</div>
							{/each}
						</div>
					</ScrollArea>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
