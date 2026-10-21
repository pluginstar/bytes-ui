<svelte:head>
	<title>Ref - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-3 border-b border-border-card pb-8">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Ref</h1>
		<p class="text-lg text-muted-foreground leading-relaxed">
			Binding and accessing underlying HTML DOM element references using Svelte 5 bind:ref.
		</p>
	</div>

	<div class="space-y-6 text-foreground/90 leading-relaxed">
		<p>
			All Bytes UI primitive components accept a <code class="bg-muted px-1.5 py-0.5 rounded text-sm">bind:ref</code> prop to obtain a reference to the rendered HTML element:
		</p>

		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto">
<pre>{`<script lang="ts">
  import { Button } from "bytes-ui";
  let buttonEl = $state<HTMLButtonElement | null>(null);

  $effect(() => {
    if (buttonEl) {
      console.log("Button mounted:", buttonEl);
    }
  });
<\/script>

<Button bind:ref={buttonEl}>Focusable Button</Button>`}</pre>
		</div>
	</div>
</div>
