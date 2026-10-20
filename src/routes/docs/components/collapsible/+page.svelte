<script lang="ts">
	import { Collapsible, Button, ComponentPreview } from "#lib";

	let open = $state(false);

	const codeExample = `<script lang="ts">
  import { Collapsible, Button } from "bytes-ui";
  let open = $state(false);
<\/script>

<Collapsible.Root bind:open class="w-[300px]">
  <div class="flex items-center justify-between">
    <h4>Recent Starred Repos</h4>
    <Collapsible.Trigger>
      {#snippet child({ props })}
        <Button variant="outline" size="sm" {...props}>
          {open ? "Close" : "Open"}
        </Button>
      {/snippet}
    </Collapsible.Trigger>
  </div>
  <Collapsible.Content class="space-y-2 pt-2">
    <div class="p-2 rounded-input bg-muted">@huntabyte/bits-ui</div>
  </Collapsible.Content>
</Collapsible.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Collapsible
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			An interactive component which expands/collapses a panel with smooth height transitions.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="collapsible-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-[340px]">
					<Collapsible.Root bind:open class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="text-sm font-semibold">@huntabyte starred 3 repositories</span>
							<Collapsible.Trigger>
								{#snippet child({ props }: { props: Record<string, any> })}
									<Button variant="outline" size="sm" class="size-8 p-0" {...props}>
										<svg class="size-4 transition-transform duration-200 {open ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</Button>
								{/snippet}
							</Collapsible.Trigger>
						</div>

						<div class="rounded-input border border-border-card bg-background px-4 py-2.5 text-xs font-mono">
							huntabyte/bits-ui
						</div>

						<Collapsible.Content class="space-y-2">
							<div class="rounded-input border border-border-card bg-background px-4 py-2.5 text-xs font-mono">
								huntabyte/shadcn-svelte
							</div>
							<div class="rounded-input border border-border-card bg-background px-4 py-2.5 text-xs font-mono">
								svecosystem/runed
							</div>
						</Collapsible.Content>
					</Collapsible.Root>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
