<script lang="ts">
	import MagnifyingGlass from "phosphor-svelte/lib/MagnifyingGlass";
	import { onMount } from "svelte";
	import { Button, Command, Dialog } from "bits-ui";
	import {
		type SearchResult,
		createContentIndex,
		searchContentIndex,
	} from "../utils/search.js";
	import { searchData } from "../config/search-data.js";
	import ScrollArea from "./scroll-area/scroll-area.svelte";
	import { goto } from "$app/navigation";

	let { showTrigger = true, open = $bindable(false) }: { showTrigger?: boolean; open?: boolean } =
		$props();

	let searchState = $state<"loading" | "ready">("loading");
	let searchQuery = $state("");
	let results = $state<SearchResult[]>([]);

	onMount(() => {
		createContentIndex(searchData as any);
		searchState = "ready";
	});

	$effect(() => {
		if (searchState !== "ready") return;
		results = searchContentIndex(searchQuery);
	});

	let clearTimeoutId: number | undefined;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = true;
		}
	}

	function clearSearchWithDelay() {
		if (clearTimeoutId) window.clearTimeout(clearTimeoutId);
		clearTimeoutId = window.setTimeout(() => {
			searchQuery = "";
			clearTimeoutId = undefined;
		}, 300);
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<Dialog.Root
	bind:open
	onOpenChange={(o) => {
		if (o) return;
		clearSearchWithDelay();
	}}
>
	{#if showTrigger}
		<Button.Root
			onclick={() => (open = true)}
			aria-label="Search Docs"
			class="rounded-input hover:bg-muted text-foreground focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden relative -mr-3 ml-auto inline-flex h-10 w-10 touch-manipulation items-center justify-center px-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 sm:hidden"
		>
			<MagnifyingGlass class="size-5" />
		</Button.Root>
		<Dialog.Trigger
			class="bg-muted text-muted-foreground ring-offset-background hover:bg-muted/80 focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden relative hidden h-10 items-center justify-between gap-3 whitespace-nowrap rounded-[9px] px-3 text-sm font-normal transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 sm:inline-flex sm:w-72 cursor-pointer border border-border-card"
		>
			<span class="flex items-center gap-2">
				<MagnifyingGlass class="size-4 opacity-70" />
				<span>Search Docs ...</span>
			</span>
			<span class="flex items-center gap-[2px]">
				<kbd
					class="bg-background shadow-kbd pointer-events-none hidden h-5 select-none items-center gap-1 rounded-sm border border-border-input px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex text-foreground/80"
				>
					<span class="text-xs">⌘</span>
				</kbd>
				<kbd
					class="bg-background shadow-kbd pointer-events-none hidden h-5 select-none items-center gap-1 rounded-sm border border-border-input px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex text-foreground/80"
				>
					K
				</kbd>
			</span>
		</Dialog.Trigger>
	{/if}
	<Dialog.Portal>
		<Dialog.Overlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
		/>
		<Dialog.Content
			class="rounded-2xl bg-background border border-border-card shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 outline-hidden duration-200 fixed left-[50%] top-[20%] w-full max-w-[92%] translate-x-[-50%] translate-y-[0%] ease-out sm:max-w-[580px] p-0 overflow-hidden"
			onCloseAutoFocus={(e) => {
				e.preventDefault();
			}}
		>
			<Dialog.Title class="sr-only">Search</Dialog.Title>
			<Dialog.Description class="sr-only">Search for documentation</Dialog.Description>
			<Command.Root
				shouldFilter={false}
				class="bg-background flex h-full w-full flex-col self-start overflow-hidden rounded-2xl"
			>
				<div class="flex items-center border-b border-border-card px-3">
					<MagnifyingGlass class="size-5 shrink-0 text-muted-foreground mr-2.5 opacity-60" />
					<Command.Input
						bind:value={searchQuery}
						autocomplete="off"
						spellcheck="false"
						type="search"
						data-empty={searchQuery === ""}
						class="h-12 bg-transparent placeholder:text-muted-foreground focus:outline-hidden inline-flex w-full touch-manipulation truncate text-sm transition-colors focus:ring-0"
						placeholder="Search for components, guides, concepts..."
					/>
					{#if searchQuery}
						<button
							onclick={() => (searchQuery = "")}
							class="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded-md"
						>
							Clear
						</button>
					{/if}
				</div>

				{#if searchQuery !== "" && results.length === 0}
					<Command.Empty
						forceMount
						class="text-muted-foreground flex w-full items-center justify-center py-12 text-sm"
					>
						No results found for "{searchQuery}".
					</Command.Empty>
				{/if}

				{#if searchQuery !== "" && results.length > 0}
					<Command.List class="max-h-[380px] overflow-y-auto p-2">
						{#each results as { title, href, snippet, category } (title + href)}
							<Command.LinkItem
								{href}
								class="rounded-lg data-selected:bg-muted/70 hover:bg-muted/50 outline-hidden flex cursor-pointer select-none flex-col items-start gap-1 p-3 text-sm transition-colors group"
								onSelect={() => {
									searchQuery = "";
									open = false;
									goto(href);
								}}
							>
								<div class="flex w-full items-center justify-between">
									<span class="font-semibold text-foreground group-hover:text-foreground">{title}</span>
									{#if category}
										<span class="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border-card">
											{category}
										</span>
									{/if}
								</div>
								{#if snippet}
									<div class="text-xs text-muted-foreground leading-relaxed line-clamp-2">
										{@html snippet}
									</div>
								{/if}
							</Command.LinkItem>
						{/each}
					</Command.List>
				{/if}

				{#if searchQuery === ""}
					<div class="p-4 text-xs text-muted-foreground/80 flex items-center justify-between border-t border-border-card bg-muted/20">
						<span>Type a query to search across all components and guides</span>
						<span class="flex items-center gap-1 font-mono text-[10px]">
							<kbd class="px-1.5 py-0.5 rounded-sm border border-border-input bg-background">ESC</kbd> to close
						</span>
					</div>
				{/if}
			</Command.Root>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
