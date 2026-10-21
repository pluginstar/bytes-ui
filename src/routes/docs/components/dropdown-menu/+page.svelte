<script lang="ts">
	import { DropdownMenu, Button, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { DropdownMenu, Button } from "bytes-ui";
<\/script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button variant="outline" {...props}>Options</Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>Profile</DropdownMenu.Item>
    <DropdownMenu.Item>Billing</DropdownMenu.Item>
    <DropdownMenu.Item>Settings</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item class="text-destructive">Logout</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Dropdown Menu
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Displays a menu to the user—such as a set of actions or functions—triggered by a button.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="dropdown-menu-demo" code={codeExample}>
			{#snippet preview()}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props }: { props: Record<string, any> })}
							<Button variant="outline" {...props}>
								Open Menu
								<svg class="size-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</Button>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Item>
							<span>Profile</span>
							<span class="ml-auto text-xs text-muted-foreground font-mono">⌘P</span>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<span>Billing</span>
							<span class="ml-auto text-xs text-muted-foreground font-mono">⌘B</span>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<span>Settings</span>
							<span class="ml-auto text-xs text-muted-foreground font-mono">⌘S</span>
						</DropdownMenu.Item>
						<div class="my-1 h-px bg-border-card -mx-1.5"></div>
						<DropdownMenu.Item class="text-destructive">
							<span>Log out</span>
							<span class="ml-auto text-xs opacity-70 font-mono">⇧⌘Q</span>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{/snippet}
		</ComponentPreview>
</div>
