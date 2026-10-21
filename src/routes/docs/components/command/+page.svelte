<script lang="ts">
	import { Command, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import * as Command from "bytes-ui/command";
<\/script>

<Command.Root class="max-w-md">
  <Command.Input placeholder="Type a command or search..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions">
      <Command.Item>Calendar</Command.Item>
      <Command.Item>Search Documentation</Command.Item>
      <Command.Item>Calculator</Command.Item>
    </Command.Group>
    <div class="my-1 h-px bg-border-card"></div>
    <Command.Group heading="Settings">
      <Command.Item>Profile</Command.Item>
      <Command.Item>Billing</Command.Item>
      <Command.Item>Keyboard Shortcuts</Command.Item>
    </Command.Group>
  </Command.List>
</Command.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Command
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Fast, accessible, unstyled command menu (palette) component for searching and triggering actions.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="command-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-md">
					<Command.Root>
						<Command.Input placeholder="Type a command or search..." />
						<Command.List>
							<Command.Empty>No results found.</Command.Empty>
							<Command.Group heading="Suggestions">
								<Command.Item>
									<span class="mr-2">📅</span>
									<span>Calendar</span>
								</Command.Item>
								<Command.Item>
									<span class="mr-2">📖</span>
									<span>Search Documentation</span>
								</Command.Item>
								<Command.Item>
									<span class="mr-2">⚡</span>
									<span>Quick Actions</span>
								</Command.Item>
							</Command.Group>
							<div class="my-1 h-px bg-border-card"></div>
							<Command.Group heading="Settings">
								<Command.Item>
									<span class="mr-2">👤</span>
									<span>Profile</span>
									<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘P</kbd>
								</Command.Item>
								<Command.Item>
									<span class="mr-2">💳</span>
									<span>Billing</span>
									<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘B</kbd>
								</Command.Item>
								<Command.Item>
									<span class="mr-2">⚙️</span>
									<span>Preferences</span>
									<kbd class="ml-auto text-xs text-muted-foreground font-mono">⌘,</kbd>
								</Command.Item>
							</Command.Group>
						</Command.List>
					</Command.Root>
				</div>
			{/snippet}
		</ComponentPreview>
</div>
