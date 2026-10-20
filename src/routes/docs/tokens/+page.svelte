<script lang="ts">
	let baseRadius = $state(16);

	$effect(() => {
		document.documentElement.style.setProperty("--radius", `${baseRadius}px`);
	});
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Concentric Tokens
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Mathematical coordination of corner radii, strict interactive component heights, and zero-margin architectural discipline.
		</p>
	</div>

	<!-- Interactive Live Tuner -->
	<section class="rounded-card border-2 border-border-card bg-zinc-50/70 dark:bg-neutral-900/40 p-6 sm:p-8 space-y-4 shadow-mini">
		<div class="flex items-center justify-between">
			<div class="space-y-1">
				<span class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interactive Demo</span>
				<h3 class="text-base font-semibold leading-none">Live Concentric Radius Tuner</h3>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-xs font-mono text-muted-foreground">--radius:</span>
				<span class="rounded-item bg-dark text-background px-3 py-1 font-mono text-xs font-bold shadow-mini">
					{baseRadius}px
				</span>
			</div>
		</div>

		<input
			type="range"
			min="0"
			max="28"
			bind:value={baseRadius}
			class="w-full accent-dark cursor-pointer h-2 bg-muted rounded-full"
		/>

		<div class="flex justify-between text-xs font-mono text-muted-foreground">
			<span>0px (Sharp Tech Look)</span>
			<span>16px (Bits UI Standard)</span>
			<span>28px (Pill Radius)</span>
		</div>
	</section>

	<!-- Section: Concentric Radius Formula -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">1. Concentric Radius Formula</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			In modern user interfaces, nesting rounded elements with disparate corner radii introduces optical distortion. To maintain perfect concentric harmony, inner elements must follow this geometric rule:
		</p>

		<div class="rounded-card border border-border-card bg-[#18181B] p-4 text-white font-mono text-sm shadow-mini">
			Inner Radius = Outer Radius - Padding
		</div>

		<div class="overflow-x-auto rounded-card border border-border-card">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted text-xs uppercase font-semibold text-muted-foreground border-b border-border-card">
					<tr>
						<th class="p-3.5">Token</th>
						<th class="p-3.5">Mathematical Formula</th>
						<th class="p-3.5">Resolved Value (16px base)</th>
						<th class="p-3.5">Target Elements</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border-card font-mono text-xs">
					<tr>
						<td class="p-3.5 font-bold">--radius-dialog</td>
						<td class="p-3.5">calc(var(--radius) + 4px)</td>
						<td class="p-3.5 text-accent-foreground font-bold">20px</td>
						<td class="p-3.5 font-sans">Dialog / Modal container</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">--radius-card</td>
						<td class="p-3.5">var(--radius)</td>
						<td class="p-3.5 text-accent-foreground font-bold">16px</td>
						<td class="p-3.5 font-sans">Card, Popover container</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">--radius-input</td>
						<td class="p-3.5">calc(var(--radius) - 6px)</td>
						<td class="p-3.5 text-accent-foreground font-bold">10px</td>
						<td class="p-3.5 font-sans">Button, Input controls</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">--radius-item</td>
						<td class="p-3.5">calc(var(--radius) - 10px)</td>
						<td class="p-3.5 text-accent-foreground font-bold">6px</td>
						<td class="p-3.5 font-sans">Checkbox, inner Badges</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<!-- Section: Strict Scale -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">2. Strict Scale (1:1 Height Consistency)</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			When inputs and buttons appear side by side, slight differences in height create jarring visual seams. Bytes UI establishes three strict scale tiers:
		</p>

		<div class="overflow-x-auto rounded-card border border-border-card">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted text-xs uppercase font-semibold text-muted-foreground border-b border-border-card">
					<tr>
						<th class="p-3.5">Scale Tier</th>
						<th class="p-3.5">Height</th>
						<th class="p-3.5">Padding (X)</th>
						<th class="p-3.5">Font Size</th>
						<th class="p-3.5">Intended Use</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border-card font-mono text-xs">
					<tr>
						<td class="p-3.5 font-bold">sm</td>
						<td class="p-3.5">36px (h-9)</td>
						<td class="p-3.5">14px (px-3.5)</td>
						<td class="p-3.5">13px (text-sm)</td>
						<td class="p-3.5 font-sans">Toolbars, data tables, dense forms</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">default (md)</td>
						<td class="p-3.5">48px (h-12)</td>
						<td class="p-3.5">21px (px-[21px])</td>
						<td class="p-3.5">15px (text-[15px])</td>
						<td class="p-3.5 font-sans">Bits UI signature standard controls</td>
					</tr>
					<tr>
						<td class="p-3.5 font-bold">lg</td>
						<td class="p-3.5">56px (h-14)</td>
						<td class="p-3.5">28px (px-7)</td>
						<td class="p-3.5">16px (text-base)</td>
						<td class="p-3.5 font-sans">Hero CTA buttons, modal submit bars</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
