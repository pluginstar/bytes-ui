<script lang="ts">
	import { Button, Input } from "#lib";

	let count = $state(0);
	let isDark = $state(false);
	let baseRadius = $state(16); // px

	function toggleDark() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}

	$effect(() => {
		document.documentElement.style.setProperty("--radius", `${baseRadius}px`);
	});
</script>

<!-- 1. Header & Hero Wrap (bits-ui 정확한 수치: border-black/10 bg-white dark:border-white/20 dark:bg-[#171717]) -->
<div class="border-b border-solid border-black/10 bg-white dark:border-white/20 dark:bg-[#171717] transition-colors">
	<!-- Header (정확한 수치: px-3 py-[17px] lg:grid lg:grid-cols-3 lg:px-5) -->
	<header class="flex items-center justify-between px-3 py-[17px] lg:grid lg:grid-cols-3 lg:px-5 max-w-[1400px] mx-auto">
		<!-- Brand Logo -->
		<div class="flex items-center gap-2">
			<a
				href="/"
				class="ml-2 flex items-center gap-2.5 rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground"
			>
				<span class="flex h-7 w-7 items-center justify-center rounded-input bg-dark text-background text-sm font-bold shadow-mini">
					B
				</span>
				<span class="font-bold text-lg tracking-tight">bytes-ui</span>
			</a>
		</div>

		<!-- Nav Pills (정확한 수치: rounded-[40px] px-[0.9em] pb-[0.4em] pt-[0.3em] text-sm font-medium tracking-[0.01em]) -->
		<nav class="flex items-center justify-center">
			<ul class="flex items-center gap-1">
				<li class="inline-block">
					<a
						href="/"
						class="rounded-[40px] bg-black/5 dark:bg-white/10 px-[0.9em] pb-[0.4em] pt-[0.3em] text-sm font-medium leading-none tracking-[0.01em] text-foreground dark:text-white"
					>
						Home
					</a>
				</li>
				<li class="inline-block">
					<a
						href="/docs"
						class="rounded-[40px] px-[0.9em] pb-[0.4em] pt-[0.3em] text-sm font-medium leading-none tracking-[0.01em] text-foreground/70 dark:text-white/60 transition hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
					>
						Docs
					</a>
				</li>
				<li class="inline-block">
					<a
						href="https://github.com/huntabyte/bits-ui"
						target="_blank"
						rel="noreferrer"
						class="rounded-[40px] px-[0.9em] pb-[0.4em] pt-[0.3em] text-sm font-medium leading-none tracking-[0.01em] text-foreground/70 dark:text-white/60 transition hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
					>
						GitHub
					</a>
				</li>
			</ul>
		</nav>

		<!-- Right Action Buttons -->
		<div class="flex items-center justify-end gap-3">
			<button
				onclick={toggleDark}
				class="inline-flex h-9 w-9 items-center justify-center rounded-input border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-btn transition hover:bg-muted/50"
				aria-label="Toggle theme"
			>
				{#if isDark}
					<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>

			<Button
				size="sm"
				class="h-10 px-5 text-[14px]"
				onclick={() => {
					window.location.href = '/docs';
				}}
			>
				Get started
			</Button>
		</div>
	</header>

	<!-- Hero Section (정확한 수치: pt-20 lg:pt-[7em]) -->
	<section class="flex flex-col justify-between overflow-hidden pt-20 lg:pt-[7em]">
		<div class="mx-7 text-center lg:mx-auto lg:w-7/12">
			<!-- Announcement Badge (정확한 수치: rounded-card-lg border-border-input shadow-mini py-1.5 pl-3 pr-4) -->
			<div class="rounded-card-lg border-border-input shadow-mini inline-flex items-center gap-2 border bg-white py-1.5 pl-3 pr-4 dark:border-[#F4F4F5]/20 dark:bg-[#242429] mb-4">
				<span class="text-amber-500 text-xs">✨</span>
				<span class="border-l-border-input text-foreground inline-block border-l pl-3 text-[11px] font-medium lg:text-[13px]">
					Powered by Bits UI Headless Core
				</span>
			</div>

			<!-- Main Title (정확한 수치: text-[2.875rem] font-semibold leading-[102%] lg:text-[4.25rem]) -->
			<h1 class="mx-auto mb-[0.35em] mt-[0.2em] text-balance pb-[0.1em] text-[2.875rem] font-semibold leading-[102%] tracking-tight text-foreground lg:max-w-3xl lg:text-[4.25rem]">
				The styled components for Svelte
			</h1>

			<!-- Subtitle (정확한 수치: text-[0.9rem] leading-[144%] md:text-[1.125rem]) -->
			<p class="text-foreground/60 dark:text-foreground/50 mx-auto mb-[2.5em] max-w-sm text-[0.9rem] font-medium leading-[144%] sm:max-w-2xl md:w-9/12 md:max-w-2xl md:text-[1.125rem]">
				Official documentation styles elevated into a reusable library. Built with mathematical concentric radius and strict scale consistency.
			</p>

			<!-- Hero Action with Kbd (정확한 수치) -->
			<div class="flex items-center justify-center gap-3">
				<Button
					size="default"
					class="gap-3 shadow-mini"
					onclick={() => {
						window.location.href = '/docs';
					}}
				>
					<kbd class="bg-background text-xxs pointer-events-none flex h-5 select-none items-center gap-1 rounded-sm border px-1.5 font-mono font-medium opacity-90 shadow-[0px_2px_0px_0px_#59595b] dark:border-white/10 dark:shadow-[0px_2px_0px_0px_#B8B8B8]">
						<span class="text-foreground text-xs">S</span>
					</kbd>
					<span>Start building</span>
				</Button>
			</div>
		</div>

		<!-- Interactive Radius Tuner Banner (정확한 수치: mx-2.5 mt-20 sm:mx-auto max-w-[800px]) -->
		<div class="mx-4 mt-16 sm:mx-auto w-full max-w-[800px] pb-16">
			<div class="rounded-card border border-border-card bg-background/80 backdrop-blur-sm p-6 shadow-card space-y-4">
				<div class="flex items-center justify-between">
					<div class="space-y-1">
						<span class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mathematical Token</span>
						<h3 class="text-base font-semibold leading-none">Concentric Radius Live Tuner</h3>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-xs font-mono text-muted-foreground">--radius:</span>
						<span class="rounded-item bg-dark text-background px-2.5 py-1 text-xs font-mono font-bold shadow-mini">
							{baseRadius}px
						</span>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<span class="text-xs font-mono text-muted-foreground">0px (Sharp)</span>
					<input
						type="range"
						min="0"
						max="28"
						bind:value={baseRadius}
						class="w-full accent-dark cursor-pointer h-1.5 bg-muted rounded-full"
					/>
					<span class="text-xs font-mono text-muted-foreground">28px (Pill)</span>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- 2. Explore / Features Section (정확한 수치: mx-2.5 mb-20 mt-11 lg:mb-40 lg:mt-24 lg:w-10/12 lg:max-w-[1036px]) -->
<section
	id="components"
	class="mx-2.5 mb-20 mt-11 sm:mx-auto sm:max-w-[500px] lg:mb-40 lg:mt-24 lg:w-10/12 lg:max-w-[1036px]"
>
	<!-- Section Header (정확한 수치: rounded-3xl border px-2 py-[3px] text-[13px] / text-[28px] lg:text-[32px]) -->
	<div class="text-foreground mb-10 text-balance lg:w-2/3">
		<small class="border-foreground/40 rounded-3xl border px-2.5 py-[3px] text-[13px] font-medium tracking-[0.01em] inline-flex items-center">
			<span class="bg-foreground/90 mr-2.5 inline-block h-[7px] w-[7px] rounded-full"></span>
			explore
		</small>
		<span class="mt-3 block text-[28px] font-semibold leading-[118%] tracking-[0.02em] lg:text-[32px]">
			The foundation for your next web project
		</span>
	</div>

	<!-- 3-Column Card Grid (정확한 수치: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-[15px]) -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-[15px]">
		<!-- Card 1: Dotted Background + Concentric Demo (정확한 수치: rounded-card-lg border-border shadow-card) -->
		<div class="rounded-card-lg border-border-card shadow-card overflow-hidden border bg-background flex flex-col justify-between">
			<div class="dotted-pattern rounded-15px mx-[7px] my-[9px] p-6 border border-border-card/60 flex-1 flex flex-col justify-between space-y-6">
				<div>
					<h3 class="text-foreground text-base font-semibold leading-none lg:text-[17px]">
						Concentric Alignment
					</h3>
					<p class="text-muted-foreground text-xs mt-1.5">
						Outer: <code>rounded-card</code> ({baseRadius}px)<br />
						Inner: <code>rounded-input</code> ({Math.max(0, baseRadius - 6)}px)
					</p>
				</div>

				<div class="space-y-3">
					<Input placeholder="name@company.com" size="default" />
					<Button class="w-full">Submit</Button>
				</div>

				<div class="text-muted-foreground text-[11px] font-medium lg:text-sm">
					Mathematical radius perfection.
				</div>
			</div>
		</div>

		<!-- Card 2: Strict Scale (정확한 수치: rounded-card-lg bg-[#F8F8F8] dark:bg-muted) -->
		<div class="rounded-card-lg border border-border-card shadow-card overflow-hidden bg-[#F8F8F8] dark:bg-muted p-6 flex flex-col justify-between space-y-6">
			<div>
				<h3 class="text-foreground text-base font-semibold leading-none lg:text-[17px]">
					Strict Scale (1:1 Matching)
				</h3>
				<p class="text-muted-foreground text-xs mt-1.5">
					Buttons and inputs share exact heights: 36px, 48px, 56px.
				</p>
			</div>

			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<Input size="sm" placeholder="sm: 36px" class="flex-1" />
					<Button size="sm">Action</Button>
				</div>
				<div class="flex items-center gap-2">
					<Input size="default" placeholder="default: 48px" class="flex-1" />
					<Button size="default">Action</Button>
				</div>
			</div>

			<div class="text-muted-foreground text-[11px] font-medium lg:text-sm">
				Zero margin, seamless alignment.
			</div>
		</div>

		<!-- Card 3: Unified Button Variants (정확한 수치: bg-[#2A2A2E] dark:bg-[#3A3C42]) -->
		<div class="rounded-card-lg border border-white/10 shadow-card overflow-hidden bg-[#2A2A2E] dark:bg-[#3A3C42] p-6 text-white flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1">
			<div>
				<h3 class="text-white text-base font-semibold leading-none lg:text-[17px]">
					Unified Variants
				</h3>
				<p class="text-white/60 text-xs mt-1.5">
					Tailwind-variants with precision shadows.
				</p>
			</div>

			<div class="flex flex-wrap gap-2.5">
				<Button
					size="sm"
					class="bg-white text-black hover:bg-white/90 shadow-mini"
					onclick={() => count++}
				>
					Click me ({count})
				</Button>
				<Button
					size="sm"
					variant="outline"
					class="border-white/30 text-white hover:bg-white/10 shadow-btn"
				>
					Outline
				</Button>
				<Button
					size="sm"
					variant="secondary"
					class="bg-white/15 text-white hover:bg-white/20 shadow-btn"
				>
					Secondary
				</Button>
			</div>

			<div class="text-white/60 text-[11px] font-medium lg:text-sm">
				Built for everyone, by default.
			</div>
		</div>
	</div>
</section>

<!-- 3. Footer -->
<footer class="border-t border-border-card py-10 px-6 text-center text-xs text-muted-foreground">
	<div class="max-w-[1036px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
		<p>Bytes UI – Fork of bits-ui documentation design system</p>
		<p class="font-mono">Built with Svelte 5 &amp; Tailwind CSS v4</p>
	</div>
</footer>
