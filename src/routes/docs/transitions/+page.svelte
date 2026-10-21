<svelte:head>
	<title>Transitions - Bytes UI</title>
</svelte:head>

<div class="space-y-6">
	<!-- Page Header matching Bits UI 1:1 without Copy Page button -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Transitions
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Learn how to use transitions with Bits UI components.
		</p>
	</div>

	<!-- Content matching screenshot 1:1 -->
	<div class="space-y-5 text-foreground leading-relaxed text-[15px]">
		<p>
			Svelte Transitions are one of the awesome features of Svelte. Unfortunately, they don't play very nicely with components, due to the fact that they rely on various directives like <code class="bg-muted px-1.5 py-0.5 rounded font-mono text-sm text-foreground">transition:</code>, which aren't supported by components.
		</p>

		<p>
			In previous version of Bits UI, we had a workaround for this by exposing a ton of <code class="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">transition*</code> props on the components that we felt were most likely to be used with transitions. However, this was a bit of a hack and limited us to <em>only</em> Svelte Transitions, and users who wanted to use other libraries or just CSS were left out.
		</p>

		<p>
			With Bits UI for Svelte 5, we've completely removed this workaround and instead exposed props and snippets that allow you to use any animation or transitions library you want.
		</p>

		<h2 class="text-2xl font-semibold tracking-tight pt-4 text-foreground">The Defaults</h2>
		<p>
			By default, Bits UI components handle the mounting and unmounting of specific components for you. They are wrapped in a component that ensures the component waits for transitions to finish before unmounting.
		</p>

		<h2 class="text-2xl font-semibold tracking-tight pt-4 text-foreground">Force Mounting</h2>
		<p>
			On each component that we conditionally render, a <code class="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">forceMount</code> prop is exposed. If set to <code class="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">true</code>, the component will be forced to mount in the DOM and become visible to the user.
		</p>

		<div class="rounded-xl border border-border-card bg-muted/40 p-4 font-mono text-xs overflow-x-auto leading-relaxed">
<pre>{`<script lang="ts">
  import { Dialog } from "bits-ui";
  import { fly } from "svelte/transition";
<\/script>

<Dialog.Root>
  <!-- ... -->
  <Dialog.Content forceMount>
    {#snippet child({ props, open })}
      {#if open}
        <div {...props} transition:fly>
          <!-- ... -->
        </div>
      {/if}
    {/snippet}
  </Dialog.Content>
</Dialog.Root>`}</pre>
		</div>
	</div>
</div>
