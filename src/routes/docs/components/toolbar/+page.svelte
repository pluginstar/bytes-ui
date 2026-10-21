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
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Toolbar
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			A container for grouping a set of visual controls, buttons, toggles, or input items.
		</p>
	</div>

	<!-- Component Preview -->
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
</div>
