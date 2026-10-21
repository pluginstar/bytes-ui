<script lang="ts">
	import { page } from "$app/state";
	import { docsNavigation, ScrollArea } from "#lib";
	import Search from "#lib/components/search.svelte";
	import Logo from "#lib/components/icons/logo.svelte";
	import Github from "#lib/components/icons/github.svelte";
	import LightSwitch from "#lib/components/light-switch.svelte";

	let { children } = $props();
	let mobileMenuOpen = $state(false);
</script>

<div class="min-h-screen bg-background text-foreground transition-colors font-sans antialiased">
	<!-- Site Header (bits-ui: h-[70px] border-b sticky top-0 z-50 backdrop-blur-md) -->
	<header class="border-border bg-background/75 sticky top-0 z-50 overflow-x-hidden border-b backdrop-blur-md">
		<div class="flex h-[70px] items-center justify-between pr-4">
			<!-- Left: Mobile nav toggle + Logo (aligned with sidebar width: 220px on md, 250px on lg) -->
			<div class="flex items-center pl-4 md:w-[220px] lg:w-[250px] shrink-0">
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

				<!-- Logo -->
				<a
					href="/"
					class="focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex items-center"
				>
					<Logo class="h-[22px] w-auto" />
				</a>
			</div>

			<!-- Center/Right: Search aligned exactly with the sidebar vertical line + Actions -->
			<div class="flex flex-1 items-center justify-between gap-3">
				<!-- Search Docs Component with ⌘K -->
				<Search />

				<!-- Right: External links and Theme Switch matching Bits UI 1:1 -->
				<div class="flex items-center justify-end">
					<a
						href="https://github.com/pluginstar/bytes-ui"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="rounded-input hover:bg-dark-10 focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden relative inline-flex h-10 w-10 items-center justify-center px-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 text-foreground"
					>
						<Github class="size-5" />
					</a>
					<LightSwitch />
				</div>
			</div>
		</div>
	</header>

	<!-- Mobile drawer if opened -->
	{#if mobileMenuOpen}
		<div class="fixed inset-x-0 bottom-0 top-[71px] z-40 bg-background/95 backdrop-blur-md md:hidden p-4 overflow-y-auto border-b border-border">
			<nav class="space-y-6 pb-20">
				{#each docsNavigation as section}
					<div class="space-y-2">
						{#if section.title !== "Overview"}
							<h4 class="text-muted-foreground mb-1 ml-[9px] rounded-md px-2.5 py-2 pl-4 text-xs font-medium uppercase">
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
									class="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm font-semibold transition-colors {isActive ? 'bg-muted text-foreground' : 'text-foreground hover:bg-muted/50 bg-transparent'}"
								>
									{#if Icon}
										<Icon size={22} class="shrink-0" />
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
			<aside class="border-border fixed top-[71px] hidden h-[calc(100vh-71px)] w-full shrink-0 border-r md:sticky md:block">
				<ScrollArea class="h-full w-full" type="hover">
					<div class="h-full pb-6 pr-4 pt-4 lg:pb-8">
						<nav class="space-y-3">
							<div class="flex w-full flex-col pb-[50px]">
								{#each docsNavigation as section}
									{#if section.title === "Overview"}
										<!-- Overview items (with 1:1 phosphor icons and soft active pill) -->
										<div class="grid grid-flow-row auto-rows-max gap-0.5 pb-8 pl-4 text-sm">
											{#each section.items as item}
												{@const Icon = item.icon}
												{@const isActive = page.url.pathname === item.href || (item.href === "/docs" && page.url.pathname === "/docs/introduction")}
												<a
													href={item.href}
													class="group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 {isActive ? 'bg-muted text-foreground' : 'hover:bg-muted/50 bg-transparent text-foreground'}"
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
											<h4 class="text-muted-foreground mb-1 ml-[9px] rounded-md px-2.5 py-2 pl-4 text-xs font-medium uppercase">
												{section.title}
											</h4>
											<div class="grid grid-flow-row auto-rows-max gap-[1px] pl-4 text-sm">
												{#each section.items as item}
													{@const isActive = page.url.pathname === item.href}
													<a
														href={item.href}
														class="group inline-flex w-full items-center rounded-md px-2.5 py-1.5 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 {isActive ? 'bg-muted text-foreground' : 'hover:bg-muted/50 text-foreground'}"
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
			<main class="pt-8 sm:pt-16 pb-24 px-4 sm:px-6 md:pl-0 md:pr-8 min-w-0 max-w-4xl">
				{@render children()}
			</main>
		</div>
	</div>
</div>
