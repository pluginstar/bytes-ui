<script lang="ts">
	import { Popover, Button, Input, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Popover, Button, Input } from "bytes-ui";
<\/script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet child({ props })}
      <Button variant="outline" {...props}>Open Popover</Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content>
    <div class="space-y-2">
      <h4 class="font-semibold text-sm">Dimensions</h4>
      <p class="text-xs text-muted-foreground">Set width and height parameters.</p>
      <Input size="sm" value="100%" />
    </div>
  </Popover.Content>
</Popover.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Popover
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Displays rich content in a portal, triggered by a button with smooth floating alignment.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="popover-demo" code={codeExample}>
			{#snippet preview()}
				<Popover.Root>
					<Popover.Trigger>
						{#snippet child({ props }: { props: Record<string, any> })}
							<Button variant="outline" {...props}>Dimensions</Button>
						{/snippet}
					</Popover.Trigger>
					<Popover.Content>
						<div class="space-y-3">
							<div class="space-y-1">
								<h4 class="font-semibold text-sm">Dimensions</h4>
								<p class="text-xs text-foreground-alt">Set the width and height for this layer.</p>
							</div>
							<div class="space-y-2">
								<div class="flex items-center gap-2">
									<span class="text-xs font-mono w-12 text-muted-foreground">Width</span>
									<Input size="sm" value="100%" class="flex-1" />
								</div>
								<div class="flex items-center gap-2">
									<span class="text-xs font-mono w-12 text-muted-foreground">Height</span>
									<Input size="sm" value="auto" class="flex-1" />
								</div>
							</div>
						</div>
					</Popover.Content>
				</Popover.Root>
			{/snippet}
		</ComponentPreview>
</div>
