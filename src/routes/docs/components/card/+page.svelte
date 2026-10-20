<script lang="ts">
	import { Card, Button, Input, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Card, Button, Input } from "bytes-ui";
<\/script>

<Card.Root class="w-full max-w-md">
  <Card.Header>
    <Card.Title>Account Settings</Card.Title>
    <Card.Description>Manage your public profile and notifications.</Card.Description>
  </Card.Header>
  <Card.Content class="space-y-3">
    <div class="space-y-1">
      <label class="text-xs font-medium" for="name">Display Name</label>
      <Input id="name" size="sm" placeholder="John Doe" />
    </div>
  </Card.Content>
  <Card.Footer class="justify-end">
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm">Save Changes</Button>
  </Card.Footer>
</Card.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Card
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A versatile container styled with <code>rounded-card</code> (16px) and <code>shadow-card</code> for organizing grouped information and interactive forms.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="card-demo" code={codeExample}>
			{#snippet preview()}
				<Card.Root class="w-full max-w-md">
					<Card.Header>
						<Card.Title>Account Settings</Card.Title>
						<Card.Description>Manage your public profile and notifications.</Card.Description>
					</Card.Header>
					<Card.Content class="space-y-3">
						<div class="space-y-1">
							<span class="text-xs font-medium text-foreground">Display Name</span>
							<Input size="sm" placeholder="John Doe" />
						</div>
					</Card.Content>
					<Card.Footer class="justify-end">
						<Button variant="outline" size="sm">Cancel</Button>
						<Button size="sm">Save Changes</Button>
					</Card.Footer>
				</Card.Root>
			{/snippet}
		</ComponentPreview>
	</section>

	<!-- Concentric Hierarchy Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Concentric Hierarchy</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			The Card acts as the primary container element in the concentric radius system. Its <code>16px</code> outer radius seamlessly envelops inner buttons and inputs (<code>10px</code>), ensuring optical symmetry without visual crowding.
		</p>
	</section>
</div>
