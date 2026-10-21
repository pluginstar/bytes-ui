<svelte:head>
	<title>Child Snippet - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-3 border-b border-border-card pb-8">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Child Snippet</h1>
		<p class="text-lg text-muted-foreground leading-relaxed">
			Learn how to use Svelte 5 snippets to delegate DOM element rendering and retain full control over markup.
		</p>
	</div>

	<div class="space-y-6 text-foreground/90 leading-relaxed">
		<p>
			In Svelte 5, snippet properties allow components to pass HTML attributes, accessibility ARIA tags, and event handlers to custom markup elements via the <code class="bg-muted px-1.5 py-0.5 rounded text-sm">child</code> snippet.
		</p>

		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto">
<pre>{`<Button.Root>
  {#snippet child({ props })}
    <a {...props} href="/custom-destination">
      Render as custom anchor link
    </a>
  {/snippet}
</Button.Root>`}</pre>
		</div>
	</div>
</div>
