<script lang="ts">
	import { Tabs, Button, Input, Card, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Tabs } from "bytes-ui";
<\/script>

<Tabs.Root value="account" class="w-[400px]">
  <Tabs.List class="grid w-full grid-cols-2">
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    <p class="text-sm">Account settings content...</p>
  </Tabs.Content>
  <Tabs.Content value="password">
    <p class="text-sm">Change password content...</p>
  </Tabs.Content>
</Tabs.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Tabs
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			A set of layered sections of content—known as tab panels—that are displayed one at a time with smooth active highlights.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="tabs-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-[420px]">
					<Tabs.Root value="account">
						<Tabs.List class="grid w-full grid-cols-2">
							<Tabs.Trigger value="account">Account</Tabs.Trigger>
							<Tabs.Trigger value="password">Password</Tabs.Trigger>
						</Tabs.List>

						<Tabs.Content value="account">
							<Card.Root>
								<Card.Header>
									<Card.Title>Account Settings</Card.Title>
									<Card.Description>Manage your primary account email address.</Card.Description>
								</Card.Header>
								<Card.Content class="space-y-3">
									<div class="space-y-1">
										<label class="text-xs font-medium" for="email">Email</label>
										<Input id="email" value="alex@example.com" size="sm" />
									</div>
								</Card.Content>
								<Card.Footer class="justify-end">
									<Button size="sm">Save email</Button>
								</Card.Footer>
							</Card.Root>
						</Tabs.Content>

						<Tabs.Content value="password">
							<Card.Root>
								<Card.Header>
									<Card.Title>Password</Card.Title>
									<Card.Description>Change your password here. After saving, you'll be logged out.</Card.Description>
								</Card.Header>
								<Card.Content class="space-y-3">
									<div class="space-y-1">
										<label class="text-xs font-medium" for="current">Current password</label>
										<Input id="current" type="password" size="sm" />
									</div>
									<div class="space-y-1">
										<label class="text-xs font-medium" for="new">New password</label>
										<Input id="new" type="password" size="sm" />
									</div>
								</Card.Content>
								<Card.Footer class="justify-end">
									<Button size="sm">Update password</Button>
								</Card.Footer>
							</Card.Root>
						</Tabs.Content>
					</Tabs.Root>
				</div>
			{/snippet}
		</ComponentPreview>
</div>
