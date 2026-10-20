<script lang="ts">
	import { Menubar, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import * as Menubar from "bytes-ui/menubar";
<\/script>

<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item>New Tab <span class="ml-auto font-mono text-xs text-muted-foreground">⌘T</span></Menubar.Item>
      <Menubar.Item>New Window <span class="ml-auto font-mono text-xs text-muted-foreground">⌘N</span></Menubar.Item>
      <div class="my-1 h-px bg-border-card"></div>
      <Menubar.Item>Print... <span class="ml-auto font-mono text-xs text-muted-foreground">⌘P</span></Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger>Edit</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item>Undo <span class="ml-auto font-mono text-xs text-muted-foreground">⌘Z</span></Menubar.Item>
      <Menubar.Item>Redo <span class="ml-auto font-mono text-xs text-muted-foreground">⇧⌘Z</span></Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Menubar
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A visually persistent horizontal menu bar commonly used in desktop applications and complex web tools.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="menubar-demo" code={codeExample}>
			{#snippet preview()}
				<Menubar.Root>
					<Menubar.Menu>
						<Menubar.Trigger>File</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>
								<span>New Tab</span>
								<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘T</kbd>
							</Menubar.Item>
							<Menubar.Item>
								<span>New Window</span>
								<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘N</kbd>
							</Menubar.Item>
							<div class="my-1 h-px bg-border-card"></div>
							<Menubar.Item>
								<span>Print...</span>
								<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘P</kbd>
							</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>

					<Menubar.Menu>
						<Menubar.Trigger>Edit</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>
								<span>Undo</span>
								<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘Z</kbd>
							</Menubar.Item>
							<Menubar.Item>
								<span>Redo</span>
								<kbd class="ml-auto text-xs text-muted-foreground font-mono">⇧⌘Z</kbd>
							</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>

					<Menubar.Menu>
						<Menubar.Trigger>View</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>Always Show Bookmarks</Menubar.Item>
							<Menubar.Item>Reload</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
				</Menubar.Root>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
