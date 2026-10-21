<script lang="ts">
	import { Separator, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Separator } from "bytes-ui";
<\/script>

<div>
  <div class="space-y-1">
    <h4 class="text-sm font-semibold">Bytes UI Primitives</h4>
    <p class="text-xs text-muted-foreground">A clean design system.</p>
  </div>
  <Separator class="my-4" />
  <div class="flex h-5 items-center space-x-4 text-xs font-mono">
    <span>Docs</span>
    <Separator orientation="vertical" />
    <span>Source</span>
    <Separator orientation="vertical" />
    <span>Releases</span>
  </div>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Separator
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Visually or semantically separates content horizontally or vertically.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="separator-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-sm rounded-card border border-border-card p-6 bg-background">
					<div class="space-y-1">
						<h4 class="text-sm font-semibold">Bytes UI Primitives</h4>
						<p class="text-xs text-foreground-alt">Concentric radius design tokens.</p>
					</div>
					<Separator class="my-4" />
					<div class="flex h-5 items-center space-x-4 text-xs font-mono text-muted-foreground">
						<span>Docs</span>
						<Separator orientation="vertical" />
						<span>Source</span>
						<Separator orientation="vertical" />
						<span>Changelog</span>
					</div>
				</div>
			{/snippet}
		</ComponentPreview>
</div>
