<script lang="ts">
	import { page } from "$app/state";
	import { docsNavigation, ScrollArea } from "#lib";

	let { children } = $props();
	let isDark = $state(false);

	function toggleDark() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}
</script>

<div class="min-h-screen bg-background text-foreground transition-colors">
	<!-- Site Header (bits-ui: h-[70px] border-b sticky top-0 z-50 backdrop-blur-md) -->
	<header class="sticky top-0 z-50 border-b border-border-card bg-background/80 backdrop-blur-md">
		<div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center gap-6">
				<a href="/" class="flex items-center gap-2.5">
					<span class="flex h-7 w-7 items-center justify-center rounded-input bg-dark text-background text-sm font-bold shadow-mini">
						B
					</span>
					<span class="font-bold text-lg tracking-tight">bytes-ui</span>
				</a>
				<span class="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded-item bg-muted text-muted-foreground border border-border-card">
					v0.0.1
				</span>
			</div>

			<!-- Nav links & Actions -->
			<div class="flex items-center gap-3">
				<nav class="flex items-center gap-1">
					<a
						href="/"
						class="rounded-[40px] px-3.5 py-1.5 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
					>
						Home
					</a>
					<a
						href="/docs"
						class="rounded-[40px] bg-muted px-3.5 py-1.5 text-sm font-medium text-foreground"
					>
						Docs
					</a>
					<a
						href="https://github.com/huntabyte/bits-ui"
						target="_blank"
						rel="noreferrer"
						class="rounded-[40px] px-3.5 py-1.5 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-foreground"
					>
						GitHub
					</a>
				</nav>

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
			</div>
		</div>
	</header>

	<!-- Main Layout Container (bits-ui: max-w-[1400px] md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]) -->
	<div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
		<div class="md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
			<!-- Sidebar Nav with disappearing scrollbar -->
			<aside class="hidden md:block sticky top-[71px] h-[calc(100vh-71px)] w-full shrink-0 border-r border-border-card">
				<ScrollArea class="h-full py-6 pr-4" type="hover">
					<div class="flex flex-col space-y-7 pb-12">
						{#each docsNavigation as section}
							<div class="space-y-1.5">
								<h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 py-1">
									{section.title}
								</h4>
								<div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
									{#each section.items as item}
										{@const isActive = page.url.pathname === item.href}
										<a
											href={item.href}
											class="flex items-center justify-between rounded-input px-3 py-1.5 text-sm transition-colors {isActive ? 'bg-muted text-foreground font-semibold' : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'}"
										>
											<span>{item.title}</span>
										</a>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</ScrollArea>
			</aside>

			<!-- Docs Main Content Area (bits-ui: py-8 max-w-4xl) -->
			<main class="py-8 min-w-0 max-w-4xl">
				{@render children()}
			</main>
		</div>
	</div>
</div>
