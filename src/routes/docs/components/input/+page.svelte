<script lang="ts">
	import { Input, Button, ComponentPreview } from "#lib";

	let text = $state("");

	const codeExample = `<script lang="ts">
  import { Input, Button } from "bytes-ui";
  let query = $state("");
<\/script>

<!-- Standalone input -->
<Input placeholder="Enter your email..." bind:value={query} />

<!-- Aligned side-by-side with Button (Exact height match) -->
<div class="flex gap-2">
  <Input placeholder="Search repositories..." class="flex-1" />
  <Button>Search</Button>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Input
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A text field component crafted to share identical height tiers, focus states, and concentric corner curves with Button.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="input-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-sm space-y-3">
					<Input placeholder="name@company.com" bind:value={text} />
					<div class="flex items-center gap-2">
						<Input placeholder="Search..." class="flex-1" />
						<Button>Submit</Button>
					</div>
					{#if text}
						<p class="text-xs font-mono text-muted-foreground">Current value: {text}</p>
					{/if}
				</div>
			{/snippet}
		</ComponentPreview>
	</section>

	<!-- Scale Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Scale Consistency</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			Supports the exact three-tier scale system:
		</p>
		<div class="rounded-card border border-border-card p-6 bg-background space-y-4">
			<div class="space-y-1.5">
				<span class="text-xs font-mono text-muted-foreground">size="sm" (36px)</span>
				<Input size="sm" placeholder="Small input..." />
			</div>
			<div class="space-y-1.5">
				<span class="text-xs font-mono text-muted-foreground">size="default" (48px)</span>
				<Input size="default" placeholder="Default input..." />
			</div>
			<div class="space-y-1.5">
				<span class="text-xs font-mono text-muted-foreground">size="lg" (56px)</span>
				<Input size="lg" placeholder="Large input..." />
			</div>
		</div>
	</section>
</div>
