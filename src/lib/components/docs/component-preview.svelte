<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		name = "Demo",
		code = "",
		preview,
	}: {
		name?: string;
		code?: string;
		preview: Snippet;
	} = $props();

	let activeTab = $state<"preview" | "code">("preview");
	let isCopied = $state(false);

	function copyCode() {
		navigator.clipboard.writeText(code);
		isCopied = true;
		setTimeout(() => (isCopied = false), 2000);
	}
</script>

<div class="mt-6 rounded-card border-2 border-border-card overflow-hidden bg-background shadow-mini">
	<!-- Demo Preview Area (bits-ui: bg-zinc-50 dark:bg-neutral-900/50 min-h-[350px] p-12) -->
	<div class="relative flex min-h-[340px] w-full items-center justify-center p-8 sm:p-12 bg-zinc-50/70 dark:bg-neutral-900/40 border-b-2 border-border-card">
		{@render preview()}
	</div>

	<!-- Code & Tab Header -->
	<div class="flex items-center justify-between px-4 py-2 bg-background border-b border-border-card">
		<div class="flex items-center gap-2">
			<button
				onclick={() => activeTab = "preview"}
				class={cn(
					"px-3 py-1 text-xs font-semibold rounded-input transition-colors",
					activeTab === "preview" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
				)}
			>
				Preview
			</button>
			<button
				onclick={() => activeTab = "code"}
				class={cn(
					"px-3 py-1 text-xs font-semibold rounded-input transition-colors",
					activeTab === "code" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
				)}
			>
				Code
			</button>
		</div>

		<button
			onclick={copyCode}
			class="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-foreground-alt hover:text-foreground hover:bg-muted/60 rounded-input transition-colors"
			aria-label="Copy code"
		>
			{#if isCopied}
				<svg class="size-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
				</svg>
				<span class="text-emerald-500 font-semibold">Copied!</span>
			{:else}
				<svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
				</svg>
				<span>Copy Code</span>
			{/if}
		</button>
	</div>

	<!-- Code Display Area -->
	{#if activeTab === "code"}
		<div class="bg-[#18181B] p-5 text-white font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
			<pre><code>{code}</code></pre>
		</div>
	{/if}
</div>
