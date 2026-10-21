<script lang="ts">
	import { AlertDialog, Button, ComponentPreview } from "#lib";

	let open = $state(false);

	const codeExample = `<script lang="ts">
  import { AlertDialog, Button } from "bytes-ui";
<\/script>

<AlertDialog.Root>
  <AlertDialog.Trigger>
    {#snippet child({ props })}
      <Button variant="destructive" {...props}>Delete Account</Button>
    {/snippet}
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
    <AlertDialog.Description>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialog.Description>
    <div class="flex justify-end gap-2 pt-2">
      <AlertDialog.Cancel>
        {#snippet child({ props })}
          <Button variant="outline" {...props}>Cancel</Button>
        {/snippet}
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        {#snippet child({ props })}
          <Button variant="destructive" {...props}>Yes, delete</Button>
        {/snippet}
      </AlertDialog.Action>
    </div>
  </AlertDialog.Content>
</AlertDialog.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Alert Dialog
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			A modal dialog that interrupts the user with important content and expects an explicit confirmation.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="alert-dialog-demo" code={codeExample}>
			{#snippet preview()}
				<AlertDialog.Root bind:open>
					<AlertDialog.Trigger>
						{#snippet child({ props }: { props: Record<string, any> })}
							<Button variant="outline" {...props}>Delete Account</Button>
						{/snippet}
					</AlertDialog.Trigger>

					<AlertDialog.Content>
						<AlertDialog.Title class="text-lg font-semibold tracking-tight">
							Are you absolutely sure?
						</AlertDialog.Title>
						<AlertDialog.Description class="text-sm text-foreground-alt">
							This action cannot be undone. This will permanently delete your account and remove your data from our servers.
						</AlertDialog.Description>

						<div class="flex justify-end gap-2 pt-3">
							<AlertDialog.Cancel>
								{#snippet child({ props }: { props: Record<string, any> })}
									<Button variant="outline" {...props}>Cancel</Button>
								{/snippet}
							</AlertDialog.Cancel>
							<AlertDialog.Action>
								{#snippet child({ props }: { props: Record<string, any> })}
									<Button {...props}>Confirm</Button>
								{/snippet}
							</AlertDialog.Action>
						</div>
					</AlertDialog.Content>
				</AlertDialog.Root>
			{/snippet}
		</ComponentPreview>
</div>
