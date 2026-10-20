<script lang="ts">
	import { Badge, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Badge } from "bytes-ui";
<\/script>

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Badge
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Displays a small status indicator, tag, or counter styled with <code>rounded-item</code> (6px) concentric curves.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="badge-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-wrap items-center justify-center gap-3">
					<Badge>Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>

	<!-- Variants Table -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Variants</h2>
		<div class="overflow-x-auto rounded-card border border-border-card">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted text-xs uppercase font-semibold text-muted-foreground border-b border-border-card">
					<tr>
						<th class="p-3.5">Variant</th>
						<th class="p-3.5">Class Preview</th>
						<th class="p-3.5">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border-card font-mono text-xs">
					<tr>
						<td class="p-3.5 font-bold">default</td>
						<td class="p-3.5 text-accent-foreground font-bold">bg-dark text-background</td>
						<td class="p-3.5 font-sans">High-contrast solid badge</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">secondary</td>
						<td class="p-3.5 text-accent-foreground font-bold">bg-muted text-foreground</td>
						<td class="p-3.5 font-sans">Muted background for metadata tags</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">outline</td>
						<td class="p-3.5 text-accent-foreground font-bold">border border-border-input</td>
						<td class="p-3.5 font-sans">Subtle outlined border</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">destructive</td>
						<td class="p-3.5 text-accent-foreground font-bold">bg-destructive text-background</td>
						<td class="p-3.5 font-sans">Error and warning notifications</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
