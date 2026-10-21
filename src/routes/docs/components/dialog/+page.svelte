<script lang="ts">
	import { Dialog, Button, Input, ComponentPreview } from "#lib";

	let open = $state(false);

	const codeExample = `<script lang="ts">
  import { Dialog, Button, Input } from "bytes-ui";
  let open = $state(false);
<\/script>

<Dialog.Root bind:open>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button {...props}>Open Dialog</Button>
    {/snippet}
  </Dialog.Trigger>

  <Dialog.Content>
    <Dialog.Title>Edit Profile</Dialog.Title>
    <Dialog.Description>
      Make changes to your profile here. Click save when you're done.
    </Dialog.Description>

    <div class="space-y-3 py-3">
      <Input value="Alex River" />
    </div>

    <div class="flex justify-end gap-2">
      <Dialog.Close>
        {#snippet child({ props })}
          <Button variant="outline" {...props}>Cancel</Button>
        {/snippet}
      </Dialog.Close>
      <Button onclick={() => open = false}>Save</Button>
    </div>
  </Dialog.Content>
</Dialog.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Dialog
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			A window overlaid on either the primary window or another dialog window. Styled with <code>rounded-card-lg</code> (20px), <code>shadow-popover</code>, and smooth backdrop blurs.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="dialog-demo" code={codeExample}>
			{#snippet preview()}
				<Dialog.Root bind:open>
					<Dialog.Trigger>
						{#snippet child({ props }: { props: Record<string, any> })}
							<Button {...props}>Open Dialog</Button>
						{/snippet}
					</Dialog.Trigger>

					<Dialog.Content>
						<div class="space-y-4">
							<div class="space-y-1.5">
								<Dialog.Title class="text-lg font-semibold tracking-tight text-foreground">
									Edit Profile
								</Dialog.Title>
								<Dialog.Description class="text-sm text-foreground-alt">
									Make changes to your profile here. Click save when you're done.
								</Dialog.Description>
							</div>

							<div class="space-y-3 py-2">
								<div class="space-y-1">
									<label class="text-xs font-medium text-foreground" for="name">Name</label>
									<Input id="name" value="Alex River" />
								</div>
								<div class="space-y-1">
									<label class="text-xs font-medium text-foreground" for="username">Username</label>
									<Input id="username" value="@alexriver" />
								</div>
							</div>

							<div class="flex justify-end gap-2 pt-2">
								<Dialog.Close>
									{#snippet child({ props }: { props: Record<string, any> })}
										<Button variant="outline" {...props}>Cancel</Button>
									{/snippet}
								</Dialog.Close>
								<Button onclick={() => open = false}>Save changes</Button>
							</div>
						</div>
					</Dialog.Content>
				</Dialog.Root>
			{/snippet}
		</ComponentPreview>

	<!-- Design Details -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Design &amp; Accessibility</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			Built on top of Bits UI's accessible primitives, the Dialog features automatic focus management, trap focus, escape-key dismissal, and animated state transitions (<code>animate-scale-in</code> / <code>animate-fade-in</code>).
		</p>
	</section>
</div>
