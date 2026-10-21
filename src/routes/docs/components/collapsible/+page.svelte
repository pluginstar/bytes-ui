<script lang="ts">
	import { Collapsible, ComponentPreview } from "#lib";

	let open = $state(false);

	const codeExample = `<script lang="ts">
  import { Collapsible } from "bytes";
  import CaretUpDown from "phosphor-svelte/lib/CaretUpDown";
<\/script>

<Collapsible.Root class="w-[327px] space-y-3">
  <div class="flex items-center justify-between space-x-10">
    <h4 class="text-[15px] font-medium">@bytes starred 3 repositories</h4>
    <Collapsible.Trigger
      class="rounded-9px border-border-input bg-background-alt text-foreground shadow-btn hover:bg-muted inline-flex h-10 w-10 items-center justify-center border transition-all active:scale-[0.98]"
      aria-label="Show starred repositories"
    >
      <CaretUpDown class="size-4" weight="bold" />
    </Collapsible.Trigger>
  </div>

  <Collapsible.Content
    class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 overflow-hidden font-mono text-[15px] tracking-[0.01em]"
  >
    <div class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3">
      @bytes/ui
    </div>
    <div class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3">
      @bytes/svelte
    </div>
    <div class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3">
      @bytes/runed
    </div>
  </Collapsible.Content>
</Collapsible.Root>`;

	const cssExample = `@import "tailwindcss";

@keyframes -global-collapsible-down {
  from {
    height: 0;
  }
  to {
    height: var(--bits-collapsible-content-height);
  }
}

@keyframes -global-collapsible-up {
  from {
    height: var(--bits-collapsible-content-height);
  }
  to {
    height: 0;
  }
}`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Collapsible
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			An interactive component which expands/collapses a panel with smooth height transitions.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="collapsible-demo" code={codeExample} css={cssExample}>
			{#snippet preview()}
				<div class="w-[327px] space-y-3">
					<Collapsible.Root bind:open class="space-y-3">
						<div class="flex items-center justify-between space-x-10">
							<h4 class="text-[15px] font-medium">@bytes starred 3 repositories</h4>
							<Collapsible.Trigger
								class="rounded-9px border-border-input bg-background-alt text-foreground shadow-btn hover:bg-muted inline-flex h-10 w-10 items-center justify-center border transition-all active:scale-[0.98] cursor-pointer"
								aria-label="Show starred repositories"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="size-4">
									<rect width="256" height="256" fill="none" />
									<path d="M184.49,167.51a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L128,207l39.51-39.52A12,12,0,0,1,184.49,167.51Zm-96-79L128,49l39.51,39.52a12,12,0,0,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,0,0,17,17Z" />
								</svg>
							</Collapsible.Trigger>
						</div>

						<div class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3 text-[15px] font-mono">
							@bytes/ui
						</div>

						<Collapsible.Content
							class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 overflow-hidden font-mono text-[15px] tracking-[0.01em]"
						>
							<div class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3">
								@bytes/svelte
							</div>
							<div class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3">
								@bytes/runed
							</div>
						</Collapsible.Content>
					</Collapsible.Root>
				</div>
			{/snippet}
		</ComponentPreview>
</div>
