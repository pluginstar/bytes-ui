<script lang="ts">
	import { ContextMenu, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import * as ContextMenu from "bytes-ui/context-menu";
<\/script>

<ContextMenu.Root>
  <ContextMenu.Trigger class="flex h-[150px] w-[300px] items-center justify-center rounded-card border-2 border-dashed border-border-card text-sm text-muted-foreground select-none">
    Right click here
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>Back</ContextMenu.Item>
    <ContextMenu.Item>Forward</ContextMenu.Item>
    <ContextMenu.Item>Reload</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Context Menu
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Displays a contextual menu triggered by a right-click or long-press on a designated area.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="context-menu-demo" code={codeExample}>
			{#snippet preview()}
				<ContextMenu.Root>
					<ContextMenu.Trigger class="flex h-[150px] w-[320px] items-center justify-center rounded-card border-2 border-dashed border-border-card text-sm text-muted-foreground select-none hover:border-foreground/30 transition-colors">
						Right click here
					</ContextMenu.Trigger>
					<ContextMenu.Content>
						<ContextMenu.Item>
							<span>Back</span>
							<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘[</kbd>
						</ContextMenu.Item>
						<ContextMenu.Item>
							<span>Forward</span>
							<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘]</kbd>
						</ContextMenu.Item>
						<ContextMenu.Item>
							<span>Reload</span>
							<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘R</kbd>
						</ContextMenu.Item>
						<div class="my-1 h-px bg-border-card"></div>
						<ContextMenu.Item>
							<span>Inspect Element</span>
							<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌥⌘I</kbd>
						</ContextMenu.Item>
					</ContextMenu.Content>
				</ContextMenu.Root>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
