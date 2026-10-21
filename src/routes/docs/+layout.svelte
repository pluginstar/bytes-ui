<script lang="ts">
	import { page } from "$app/state";
	import { docsNavigation, ScrollArea } from "#lib";
	import Search from "#lib/components/search.svelte";

	let { children } = $props();
	let isDark = $state(false);
	let mobileMenuOpen = $state(false);

	function toggleDark() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}
</script>

<div class="min-h-screen bg-background text-foreground transition-colors font-sans antialiased">
	<!-- Site Header (bits-ui: h-[70px] border-b sticky top-0 z-50 backdrop-blur-md) -->
	<header class="sticky top-0 z-50 border-b border-border-card bg-background/80 backdrop-blur-md">
		<div class="px-4">
			<div class="flex h-[70px] items-center justify-between gap-3">
				<!-- Left: Mobile nav toggle + Logo + Search -->
				<div class="flex w-full items-center gap-1.5 md:w-auto">
					<!-- Mobile menu button (visible only on mobile) -->
					<button
						type="button"
						onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
						class="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground md:hidden mr-1 cursor-pointer"
						aria-label="Toggle menu"
					>
						<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{#if mobileMenuOpen}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							{/if}
						</svg>
					</button>

					<!-- Logo: • bytes UI -->
					<a
						href="/"
						class="focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden ml-1 sm:ml-2 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 md:mr-[100px] flex items-center"
					>
						<div class="flex items-center gap-2 font-bold tracking-tight text-xl text-foreground select-none">
							<span class="size-2 rounded-full bg-foreground inline-block"></span>
							<span class="font-extrabold text-[22px] tracking-tight -mr-0.5">bytes</span>
							<span class="border border-foreground/30 rounded-[5px] px-1 py-0.5 text-[10px] font-mono font-bold leading-none uppercase tracking-wider">UI</span>
						</div>
					</a>

					<!-- Search Docs Component with ⌘K -->
					<Search />
				</div>

				<!-- Right: External links and Theme Switch -->
				<div class="flex items-center justify-end gap-1.5">
					<a
						href="https://github.com/pluginstar/bytes-ui"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="rounded-input hover:bg-muted text-foreground focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden relative inline-flex h-10 w-10 items-center justify-center px-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2"
					>
						<svg class="size-5" viewBox="0 0 24 24" fill="currentColor">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
						</svg>
					</a>
					<button
						onclick={toggleDark}
						class="rounded-input hover:bg-muted text-foreground focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden relative inline-flex h-10 w-10 items-center justify-center px-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer"
						aria-label="Toggle theme"
					>
						{#if isDark}
							<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						{:else}
							<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</header>

	<!-- Mobile drawer if opened -->
	{#if mobileMenuOpen}
		<div class="fixed inset-x-0 bottom-0 top-[71px] z-40 bg-background/95 backdrop-blur-md md:hidden p-4 overflow-y-auto border-b border-border-card">
			<nav class="space-y-6 pb-20">
				{#each docsNavigation as section}
					<div class="space-y-2">
						{#if section.title !== "Overview"}
							<h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
								{section.title}
							</h4>
						{/if}
						<div class="grid grid-flow-row auto-rows-max gap-1">
							{#each section.items as item}
								{@const Icon = item.icon}
								{@const isActive = page.url.pathname === item.href || (item.href === "/docs" && page.url.pathname === "/docs/introduction")}
								<a
									href={item.href}
									onclick={() => (mobileMenuOpen = false)}
									class="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors {isActive ? 'bg-muted text-foreground font-semibold' : 'text-foreground/80 hover:bg-muted/50'}"
								>
									{#if Icon}
										<Icon size={20} class="shrink-0" />
									{/if}
									<span>{item.title}</span>
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</nav>
		</div>
	{/if}

	<!-- Main Layout Container: Exactly 1:1 Bits UI grid (220px on md, 250px on lg) -->
	<div class="min-h-[calc(100vh-71px)]">
		<div class="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
			<!-- Sidebar Nav with disappearing scrollbar & border-r -->
			<aside class="border-border-card fixed top-[71px] hidden h-[calc(100vh-71px)] w-full shrink-0 border-r md:sticky md:block">
				<ScrollArea class="h-full w-full" type="hover">
					<div class="h-full pb-6 pr-4 pt-4 lg:pb-8">
						<nav class="space-y-3">
							<div class="flex w-full flex-col pb-[50px]">
								{#each docsNavigation as section}
									{#if section.title === "Overview"}
										<!-- Overview items (with phosphor icons and soft active pill) -->
										<div class="grid grid-flow-row auto-rows-max gap-0.5 pb-8 pl-4 text-sm">
											{#each section.items as item}
												{@const Icon = item.icon}
												{@const isActive = page.url.pathname === item.href || (item.href === "/docs" && page.url.pathname === "/docs/introduction")}
												<a
													href={item.href}
													class="group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 {isActive ? 'bg-muted text-foreground' : 'text-foreground hover:bg-muted/50 bg-transparent'}"
													target={item.external ? "_blank" : undefined}
													rel={item.external ? "noreferrer" : undefined}
												>
													{#if Icon}
														<Icon size={22} class="shrink-0" />
													{/if}
													<span>{item.title}</span>
												</a>
											{/each}
										</div>
									{:else}
										<!-- Components section (with uppercase heading and clean list) -->
										<div class="pb-4">
											<h4 class="text-muted-foreground mb-1 ml-[9px] rounded-md px-2.5 py-2 pl-4 text-xs font-medium uppercase tracking-wider">
												{section.title}
											</h4>
											<div class="grid grid-flow-row auto-rows-max gap-[1px] pl-4 text-sm">
												{#each section.items as item}
													{@const isActive = page.url.pathname === item.href}
													<a
														href={item.href}
														class="group inline-flex w-full items-center rounded-md px-2.5 py-1.5 text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 {isActive ? 'bg-muted text-foreground font-semibold' : 'text-foreground hover:bg-muted/50 bg-transparent'}"
													>
														<span>{item.title}</span>
													</a>
												{/each}
											</div>
										</div>
									{/if}
								{/each}
							</div>
						</nav>
					</div>
				</ScrollArea>
			</aside>

			<!-- Docs Main Content Area -->
			<main class="py-8 px-4 sm:px-6 md:pl-0 md:pr-8 min-w-0 max-w-4xl">
				{@render children()}
			</main>
		</div>
	</div>
</div>
