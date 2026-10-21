<svelte:head>
	<title>Migration Guide - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-3 border-b border-border-card pb-8">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Migration Guide</h1>
		<p class="text-lg text-muted-foreground leading-relaxed">
			Guide for migrating from Bits UI v0 to Bytes UI / Bits UI v1 on Svelte 5.
		</p>
	</div>

	<div class="space-y-6 text-foreground/90 leading-relaxed">
		<p>
			Bytes UI takes advantage of Svelte 5 runes (<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$props()</code>, <code class="bg-muted px-1.5 py-0.5 rounded text-sm">$state()</code>, <code class="bg-muted px-1.5 py-0.5 rounded text-sm">$derived()</code>) and snippets instead of slots.
		</p>
	</div>
</div>
