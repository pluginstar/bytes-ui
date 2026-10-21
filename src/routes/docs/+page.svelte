<script lang="ts">
	import { Button } from "#lib";
</script>

<div class="space-y-12">
	<!-- Page Header (bits-ui: doc-page-header 규격) -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Introduction
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Elevating Bits UI official documentation styles into a production-ready component library. Built with mathematical concentric radius and strict scale consistency.
		</p>
	</div>

	<!-- Section: What is Bytes UI? -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">What is Bytes UI?</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			<strong>Bytes UI</strong> packages the refined, artisanal inline Tailwind styles found in the official <strong>Bits UI</strong> documentation into clean, reusable Svelte 5 components. Instead of maintaining sprawling inline utility strings across multiple files, Bytes UI provides a unified API backed by strict design tokens.
		</p>
	</section>

	<!-- Section: Core Architecture Principles -->
	<section class="space-y-6">
		<h2 class="text-2xl font-semibold tracking-tight">Design Principles</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="rounded-card border border-border-card p-6 bg-background shadow-mini space-y-2.5">
				<div class="text-xl">📐</div>
				<h3 class="font-semibold text-base">Concentric Radius</h3>
				<p class="text-xs text-foreground-alt leading-relaxed">
					Follows the golden mathematical formula: <code>Inner Radius = Outer Radius - Padding</code>. A single root <code>--radius</code> variable automatically computes and coordinates all component curves.
				</p>
			</div>

			<div class="rounded-card border border-border-card p-6 bg-background shadow-mini space-y-2.5">
				<div class="text-xl">📏</div>
				<h3 class="font-semibold text-base">Strict Scale (1:1 Alignment)</h3>
				<p class="text-xs text-foreground-alt leading-relaxed">
					Buttons, inputs, and selects strictly share heights across scales: <code>sm</code> (36px), <code>default</code> (48px), and <code>lg</code> (56px) for zero-misalignment side-by-side layouts.
				</p>
			</div>
		</div>
	</section>

	<!-- Section: Installation -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Installation</h2>
		<p class="text-foreground/80 text-[15px]">
			Install the package alongside its peer dependencies:
		</p>
		<div class="rounded-card border border-border-card bg-[#18181B] p-4 text-white font-mono text-sm overflow-x-auto shadow-mini">
			<code>npm install bytes-ui bits-ui tailwind-variants clsx tailwind-merge</code>
		</div>
	</section>

	<!-- Section: Quick Start -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Quick Start</h2>
		<p class="text-foreground/80 text-[15px]">
			Import the stylesheet into your root layout and start using components:
		</p>
		<div class="rounded-card border border-border-card bg-[#18181B] p-5 text-white font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed shadow-mini">
<pre><code>// src/routes/+layout.svelte
&lt;script lang="ts"&gt;
  import "bytes-ui/styles/theme.css";
  let &#123; children &#125; = $props();
&lt;/script&gt;

&#123;@render children()&#125;</code></pre>
		</div>

		<div class="rounded-card border border-border-card bg-[#18181B] p-5 text-white font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed shadow-mini">
<pre><code>// src/routes/+page.svelte
&lt;script lang="ts"&gt;
  import &#123; Button, Input &#125; from "bytes-ui";
&lt;/script&gt;

&lt;div class="flex gap-2"&gt;
  &lt;Input placeholder="Search components..." /&gt;
  &lt;Button&gt;Search&lt;/Button&gt;
&lt;/div&gt;</code></pre>
		</div>
	</section>

	<!-- Next Steps Cards -->
	<section class="space-y-4 pt-4 border-t border-border-card">
		<h2 class="text-lg font-semibold tracking-tight">Next Steps</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<a
				href="/docs/styling"
				class="rounded-card border border-border-card p-5 transition hover:bg-muted/50 hover:border-border-input flex flex-col justify-between"
			>
				<div>
					<h3 class="font-semibold text-sm">Styling &rarr;</h3>
					<p class="text-xs text-muted-foreground mt-1">Learn how to style components and customize radius tokens.</p>
				</div>
			</a>
			<a
				href="/docs/components/button"
				class="rounded-card border border-border-card p-5 transition hover:bg-muted/50 hover:border-border-input flex flex-col justify-between"
			>
				<div>
					<h3 class="font-semibold text-sm">Button Component &rarr;</h3>
					<p class="text-xs text-muted-foreground mt-1">Check out variants, press animations, and strict sizes.</p>
				</div>
			</a>
		</div>
	</section>
</div>
