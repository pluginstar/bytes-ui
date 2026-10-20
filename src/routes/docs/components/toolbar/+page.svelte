<script lang="ts">
	import { Toolbar, ToolbarItem, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Toolbar, ToolbarItem } from "bytes-ui";
<\/script>

<Toolbar>
  <ToolbarItem aria-label="Format Bold">
    <strong>B</strong>
  </ToolbarItem>
  <ToolbarItem aria-label="Format Italic">
    <em>I</em>
  </ToolbarItem>
  <ToolbarItem aria-label="Format Underline">
    <u>U</u>
  </ToolbarItem>
</Toolbar>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Toolbar
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A container for grouping a set of visual controls, buttons, toggles, or input items.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="toolbar-demo" code={codeExample}>
			{#snippet preview()}
				<Toolbar>
					<ToolbarItem aria-label="Format Bold">
						<span class="font-bold text-xs">B</span>
					</ToolbarItem>
					<ToolbarItem aria-label="Format Italic">
						<span class="italic text-xs font-serif">I</span>
					</ToolbarItem>
					<ToolbarItem aria-label="Format Underline">
						<span class="underline text-xs">U</span>
					</ToolbarItem>
				</Toolbar>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
