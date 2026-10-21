<script lang="ts">
	import type { Snippet } from "svelte";
	import { highlightCode } from "../../highlighter.js";

	const defaultCss = `@import "tailwindcss";`;

	let {
		name = "Demo",
		code = "",
		css = defaultCss,
		preview,
	}: {
		name?: string;
		code?: string;
		css?: string;
		preview: Snippet;
	} = $props();

	let activeTab = $state<"app.svelte" | "app.css">("app.svelte");
	let isExpanded = $state(false);
	let isCopied = $state(false);

	let svelteHtml = $state<string>("");
	let cssHtml = $state<string>("");

	$effect(() => {
		if (code) {
			highlightCode(code, "svelte").then((html) => {
				svelteHtml = html;
			});
		}
	});

	$effect(() => {
		const cssCode = css || defaultCss;
		highlightCode(cssCode, "css").then((html) => {
			cssHtml = html;
		});
	});

	let currentCode = $derived(activeTab === "app.svelte" ? code : (css || defaultCss));
	let currentHtml = $derived(activeTab === "app.svelte" ? svelteHtml : cssHtml);

	function copyCode() {
		if (!currentCode) return;
		navigator.clipboard.writeText(currentCode);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}

	function openInStackBlitz() {
		copyCode();
	}
</script>

<div class="mt-6 rounded-card overflow-hidden">
	<!-- Preview Area -->
	<div class="rounded-tl-card rounded-tr-card border-2 border-border-card relative bg-zinc-50/70 dark:bg-neutral-900/40">
		<div class="preview flex w-full justify-center p-8 sm:p-12 items-center min-h-[360px]">
			{@render preview()}
		</div>

		<!-- Open in StackBlitz / Sandbox trigger -->
		<div class="absolute bottom-2 right-2">
			<button
				type="button"
				onclick={openInStackBlitz}
				class="ring-dark ring-offset-background hover:bg-muted focus-visible:ring-dark focus-visible:ring-offset-background focus-visible:outline-hidden group inline-flex size-9 cursor-pointer items-center justify-center rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors"
				aria-label="Open in StackBlitz"
				title="Open in StackBlitz"
			>
				<svg viewBox="0 0 28 28" aria-hidden="true" height="24" width="24" class="text-foreground/30 group-hover:text-foreground size-[18px] transition-colors">
					<path fill="currentColor" d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path>
				</svg>
			</button>
		</div>
	</div>

	<!-- Tab Bar / Divider -->
	<div class="flex items-center justify-between border-x-2 border-b border-border-card bg-background px-2 pb-0 pt-0">
		<!-- Tabs -->
		<div class="flex items-center" role="tablist">
			<button
				type="button"
				role="tab"
				aria-selected={activeTab === "app.svelte"}
				onclick={() => activeTab = "app.svelte"}
				class="flex select-none text-sm font-medium -mb-[1px] transition-colors border-b-2 cursor-pointer {activeTab === 'app.svelte' ? 'text-foreground border-foreground font-semibold' : 'text-foreground-alt/60 hover:text-foreground border-transparent'}"
			>
				<span class="px-4 py-2.5">app.svelte</span>
			</button>
			<button
				type="button"
				role="tab"
				aria-selected={activeTab === "app.css"}
				onclick={() => activeTab = "app.css"}
				class="flex select-none text-sm font-medium -mb-[1px] transition-colors border-b-2 cursor-pointer {activeTab === 'app.css' ? 'text-foreground border-foreground font-semibold' : 'text-foreground-alt/60 hover:text-foreground border-transparent'}"
			>
				<span class="px-4 py-2.5">app.css</span>
			</button>
		</div>

		<!-- Actions -->
		<div class="flex items-center gap-1.5 border-b-2 border-transparent pr-1 text-sm">
			<button
				type="button"
				onclick={() => isExpanded = !isExpanded}
				class="text-foreground ring-offset-background hover:bg-muted focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden hidden select-none items-center justify-center whitespace-nowrap rounded-[7px] px-2.5 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 sm:inline-flex cursor-pointer"
				aria-label="Toggle code expansion"
			>
				{isExpanded ? "Collapse Code" : "Expand Code"}
			</button>

			<button
				type="button"
				onclick={copyCode}
				class="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden relative inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer"
				aria-label="Copy code"
				title="Copy code"
			>
				{#if isCopied}
					<svg class="size-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="size-4">
						<rect width="256" height="256" fill="none"></rect>
						<path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Code Display -->
	<div class="rounded-b-card bg-background relative overflow-hidden border-x-2 border-b-2 border-border-card">
		<div class="w-full transition-all duration-200 {isExpanded ? 'max-h-none' : 'max-h-80'} overflow-auto font-mono text-xs sm:text-[13.5px] leading-relaxed">
			{#if currentHtml}
				<div class="code-container">
					{@html currentHtml}
				</div>
			{:else}
				<pre class="p-4 sm:p-5 overflow-x-auto text-foreground"><code>{currentCode}</code></pre>
			{/if}
		</div>
	</div>
</div>

<style>
	:global(.code-container pre.shiki) {
		background-color: transparent !important;
		padding: 1rem 1.25rem !important;
		margin: 0 !important;
		overflow-x: auto;
		font-family: var(--font-mono) !important;
		font-size: 13.5px !important;
		line-height: 1.65 !important;
	}

	:global(html.dark .code-container pre.shiki, .dark .code-container pre.shiki, html.dark .code-container pre.shiki span, .dark .code-container pre.shiki span) {
		color: var(--shiki-dark) !important;
		background-color: transparent !important;
	}
</style>
