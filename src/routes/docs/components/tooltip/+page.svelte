<script lang="ts">
	import { Tooltip, Button, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Tooltip, Button } from "bytes-ui";
<\/script>

<Tooltip.Provider>
  <Tooltip.Root delayDuration={150}>
    <Tooltip.Trigger>
      {#snippet child({ props })}
        <Button variant="outline" {...props}>Hover me</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Tooltip.Content>
      Add to library
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Tooltip
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="tooltip-demo" code={codeExample}>
			{#snippet preview()}
				<Tooltip.Provider>
					<Tooltip.Root delayDuration={150}>
						<Tooltip.Trigger>
							{#snippet child({ props }: { props: Record<string, any> })}
								<Button variant="outline" {...props}>
									Hover or Focus Me
								</Button>
							{/snippet}
						</Tooltip.Trigger>
						<Tooltip.Content>
							Crafted with Bits UI &amp; Concentric Tokens
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
