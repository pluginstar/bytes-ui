<script lang="ts">
	import { NavigationMenu, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import * as NavigationMenu from "bytes-ui/navigation-menu";
<\/script>

<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Getting Started</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <div class="grid w-[400px] gap-2 p-1">
          <NavigationMenu.Link href="/docs">
            <div class="text-sm font-semibold">Introduction</div>
            <p class="text-xs text-muted-foreground mt-1">Concentric design tokens & atomic headless architecture.</p>
          </NavigationMenu.Link>
          <NavigationMenu.Link href="/docs/tokens">
            <div class="text-sm font-semibold">Tokens</div>
            <p class="text-xs text-muted-foreground mt-1">Learn how mathematical inner radius derivations work.</p>
          </NavigationMenu.Link>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="/docs/components/button" class="inline-flex h-8 items-center px-3 text-sm font-medium">
        Components
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Navigation Menu
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A collection of links and rich dropdown content for site-wide navigation with keyboard support.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="navigation-menu-demo" code={codeExample}>
			{#snippet preview()}
				<NavigationMenu.Root>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Getting Started</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[360px] gap-2 p-1">
									<NavigationMenu.Link href="/docs">
										<div class="text-sm font-semibold">Introduction</div>
										<p class="text-xs text-muted-foreground mt-1">
											Concentric design tokens & atomic headless architecture.
										</p>
									</NavigationMenu.Link>
									<NavigationMenu.Link href="/docs/tokens">
										<div class="text-sm font-semibold">Concentric Tokens</div>
										<p class="text-xs text-muted-foreground mt-1">
											Learn how mathematical inner radius derivations work.
										</p>
									</NavigationMenu.Link>
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[360px] gap-2 p-1">
									<NavigationMenu.Link href="/docs/components/button">
										<div class="text-sm font-semibold">Button</div>
										<p class="text-xs text-muted-foreground mt-1">
											Interactive triggers with strict scale consistency.
										</p>
									</NavigationMenu.Link>
									<NavigationMenu.Link href="/docs/components/dialog">
										<div class="text-sm font-semibold">Dialog</div>
										<p class="text-xs text-muted-foreground mt-1">
											Accessible modal windows with concentric borders.
										</p>
									</NavigationMenu.Link>
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<NavigationMenu.Item>
							<NavigationMenu.Link href="/docs" class="inline-flex h-8 items-center px-3 text-sm font-medium">
								Documentation
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			{/snippet}
		</ComponentPreview>
	</section>
</div>
