<script lang="ts">
	import { Button, ComponentPreview } from "#lib";

	let count = $state(0);

	const codeExample = `<script lang="ts">
  import { Button } from "bytes-ui";
<\/script>

<!-- Default Button with click feedback -->
<Button>Default Button</Button>

<!-- Secondary & Outline Variants -->
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

<!-- Sizes -->
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Button
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			An interactive button primitive powered by Bits UI with responsive active-scale feedback and signature subtle shadows.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="button-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-wrap items-center justify-center gap-3">
					<Button onclick={() => count++}>
						Clicks: {count}
					</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link">Link</Button>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>

	<!-- Strict Scale Section -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Scale Consistency</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			Buttons adhere to three standardized heights with calibrated internal horizontal padding:
		</p>

		<div class="rounded-card border border-border-card p-6 bg-background flex flex-wrap items-center gap-4">
			<Button size="sm">Small (36px)</Button>
			<Button size="default">Default (48px)</Button>
			<Button size="lg">Large (56px)</Button>
		</div>
	</section>

	<!-- API Reference Table -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">API Reference</h2>
		<div class="overflow-x-auto rounded-card border border-border-card">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted text-xs uppercase font-semibold text-muted-foreground border-b border-border-card">
					<tr>
						<th class="p-3.5">Prop</th>
						<th class="p-3.5">Type</th>
						<th class="p-3.5">Default</th>
						<th class="p-3.5">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border-card font-mono text-xs">
					<tr>
						<td class="p-3.5 font-bold">variant</td>
						<td class="p-3.5 text-accent-foreground">'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'</td>
						<td class="p-3.5">'default'</td>
						<td class="p-3.5 font-sans">Visual presentation style</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">size</td>
						<td class="p-3.5 text-accent-foreground">'sm' | 'default' | 'lg' | 'icon'</td>
						<td class="p-3.5">'default'</td>
						<td class="p-3.5 font-sans">Strict height and internal padding scale</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
