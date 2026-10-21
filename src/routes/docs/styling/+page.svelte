<script lang="ts">
	import { Button, Input, Card, ComponentPreview } from "#lib";

	let rootRadius = $state(16);
	const innerPadding = 8;
	const derivedInner = $derived(Math.max(0, rootRadius - innerPadding));
</script>

<div class="space-y-8">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Styling
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Learn how to style Bytes UI components using Tailwind CSS, CSS variables, and mathematical design tokens.
		</p>
	</div>

	<!-- Overview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Overview</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			Unlike purely headless libraries that require you to copy-paste dozens of inline utility strings,
			<strong>Bytes UI</strong> provides refined default styles inspired by the official Bits UI documentation,
			while preserving full flexibility through the <code>class</code> prop.
		</p>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			All component styles are composed using <strong>Tailwind CSS v4</strong> and merged with <code>tailwind-merge</code>,
			ensuring your custom classes effortlessly override defaults without specificity battles.
		</p>
	</section>

	<!-- Overriding Styles -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Overriding Styles</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			Pass custom utility classes directly via the <code>class</code> prop. Bytes UI automatically merges them with built-in styles:
		</p>
		<div class="rounded-card border border-border-card bg-[#18181B] p-4 text-white font-mono text-sm overflow-x-auto shadow-mini">
			<code>&lt;Button class="w-full shadow-lg font-bold"&gt;Full Width Button&lt;/Button&gt;</code>
		</div>
	</section>

	<!-- Concentric Radius -->
	<section class="space-y-6">
		<div>
			<h2 class="text-2xl font-semibold tracking-tight">Concentric Radius System</h2>
			<p class="text-foreground/80 text-[15px] mt-1 leading-relaxed">
				When elements nest inside one another, mismatched radii cause visual distortion.
				Bytes UI enforces the golden concentric formula across all components:
			</p>
		</div>

		<div class="rounded-card border border-border-card bg-muted/40 p-5 font-mono text-sm text-foreground">
			<span class="text-muted-foreground">// Concentric Radius Formula</span><br />
			<span class="font-bold text-foreground">Inner Radius = Outer Radius - Padding</span>
		</div>

		<!-- Interactive Radius Tuner -->
		<div class="rounded-card border border-border-card p-6 bg-background shadow-mini space-y-6">
			<div class="flex items-center justify-between">
				<span class="text-sm font-semibold">Interactive Radius Tuner</span>
				<span class="font-mono text-xs text-muted-foreground">--radius: {rootRadius}px</span>
			</div>

			<input
				type="range"
				min="0"
				max="28"
				step="2"
				bind:value={rootRadius}
				class="w-full accent-dark cursor-pointer"
			/>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
				<!-- Outer Card -->
				<div
					class="border border-border-card bg-muted/30 p-6 flex flex-col gap-3 shadow-mini transition-all"
					style="border-radius: {rootRadius}px;"
				>
					<span class="text-xs font-mono text-muted-foreground">Outer Container ({rootRadius}px)</span>
					<!-- Nested Inner Element -->
					<div
						class="bg-background border border-border-input p-4 shadow-btn transition-all"
						style="border-radius: {derivedInner}px;"
					>
						<span class="text-xs font-semibold text-foreground">
							Inner Element ({derivedInner}px)
						</span>
						<p class="text-[11px] text-muted-foreground mt-0.5">
							{rootRadius}px - 8px padding = {derivedInner}px
						</p>
					</div>
				</div>

				<div class="space-y-3 text-xs text-foreground/80 leading-relaxed">
					<p>
						A single <code>--radius</code> variable dynamically derives all child tokens:
					</p>
					<ul class="space-y-1 font-mono text-[11px] text-muted-foreground">
						<li>• <strong class="text-foreground">--radius-dialog</strong>: var(--radius) + 4px (20px)</li>
						<li>• <strong class="text-foreground">--radius-card</strong>: var(--radius) (16px)</li>
						<li>• <strong class="text-foreground">--radius-input</strong>: var(--radius) - 6px (10px)</li>
						<li>• <strong class="text-foreground">--radius-item</strong>: var(--radius) - 10px (6px)</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Strict Scale Consistency -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Scale Consistency (1:1 Alignment)</h2>
		<p class="text-foreground/80 text-[15px] leading-relaxed">
			Side-by-side inputs and buttons share identical heights across three standard scales, preventing 1px misalignment bugs:
		</p>
		<div class="rounded-card border border-border-card p-6 bg-background space-y-4">
			<div class="flex items-center gap-3">
				<Input class="h-9 w-60" placeholder="Small (36px)" />
				<Button size="sm">Small (36px)</Button>
			</div>
			<div class="flex items-center gap-3">
				<Input class="h-12 w-60" placeholder="Default (48px)" />
				<Button size="default">Default (48px)</Button>
			</div>
			<div class="flex items-center gap-3">
				<Input class="h-14 w-60" placeholder="Large (56px)" />
				<Button size="lg">Large (56px)</Button>
			</div>
		</div>
	</section>

	<!-- Spacing & Layout -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Spacing & Zero Margin Philosophy</h2>
		<div class="space-y-3 text-[15px] text-foreground/80 leading-relaxed">
			<p>
				<strong>Components contain 0 outer margin (<code>m-*</code>)</strong>. Layout spacing is strictly controlled by parent containers using flexbox or CSS grid:
			</p>
			<div class="rounded-card border border-border-card bg-[#18181B] p-4 text-white font-mono text-xs sm:text-sm overflow-x-auto">
<pre><code>&lt;!-- Clean, flexible layout using gap --&gt;
&lt;div class="flex items-center gap-3"&gt;
  &lt;Input placeholder="Search..." /&gt;
  &lt;Button&gt;Search&lt;/Button&gt;
&lt;/div&gt;</code></pre>
			</div>
		</div>
	</section>
</div>
