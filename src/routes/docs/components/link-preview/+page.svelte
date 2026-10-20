<script lang="ts">
	import { LinkPreview, Avatar, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import * as LinkPreview from "bytes-ui/link-preview";
  import * as Avatar from "bytes-ui/avatar";
<\/script>

<LinkPreview.Root>
  <LinkPreview.Trigger
    href="https://github.com/huntabyte/bits-ui"
    target="_blank"
    class="font-medium underline underline-offset-4"
  >
    @bits-ui
  </LinkPreview.Trigger>
  <LinkPreview.Content>
    <div class="flex gap-3">
      <Avatar.Root class="size-10">
        <Avatar.Fallback>BU</Avatar.Fallback>
      </Avatar.Root>
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">Bits UI</h4>
        <p class="text-xs text-muted-foreground">The headless components for Svelte.</p>
      </div>
    </div>
  </LinkPreview.Content>
</LinkPreview.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Link Preview
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Allows sighted users to preview dynamic interactive content behind a link on hover or focus.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="link-preview-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex items-center gap-2 text-sm text-foreground">
					<span>Crafted with</span>
					<LinkPreview.Root>
						<LinkPreview.Trigger
							href="https://github.com/huntabyte/bits-ui"
							target="_blank"
							class="font-semibold underline underline-offset-4 decoration-border-card hover:decoration-foreground transition-colors"
						>
							@bits-ui
						</LinkPreview.Trigger>
						<LinkPreview.Content>
							<div class="flex items-start gap-3">
								<Avatar.Root class="size-10 shrink-0">
									<Avatar.Fallback>BU</Avatar.Fallback>
								</Avatar.Root>
								<div class="space-y-1">
									<h4 class="text-sm font-semibold text-foreground">Bits UI</h4>
									<p class="text-xs text-muted-foreground">
										The headless component primitives for Svelte and SvelteKit applications.
									</p>
									<div class="pt-2 text-[11px] font-mono text-muted-foreground flex items-center gap-3">
										<span>★ 3.5k+ stars</span>
										<span>MIT License</span>
									</div>
								</div>
							</div>
						</LinkPreview.Content>
					</LinkPreview.Root>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
