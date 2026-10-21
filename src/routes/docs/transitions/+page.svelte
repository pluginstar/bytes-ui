<svelte:head>
	<title>Transitions - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<!-- Page Header -->
	<div class="space-y-3 border-b border-border-card pb-8">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Transitions</h1>
		<p class="text-lg text-muted-foreground leading-relaxed">
			Learn how to use transitions and animations with Bytes UI components in Svelte 5.
		</p>
	</div>

	<!-- Content -->
	<div class="prose max-w-none space-y-6 text-foreground/90 leading-relaxed">
		<p>
			Svelte Transitions are one of the most powerful features of Svelte. They allow you to easily animate elements entering and leaving the DOM. In Bytes UI, components are designed to work seamlessly with Svelte's native transition directives (<code class="bg-muted px-1.5 py-0.5 rounded text-sm">transition:</code>, <code class="bg-muted px-1.5 py-0.5 rounded text-sm">in:</code>, <code class="bg-muted px-1.5 py-0.5 rounded text-sm">out:</code>) as well as modern CSS animation libraries like Tailwind CSS and tw-animate-css.
		</p>

		<h2 class="text-2xl font-bold tracking-tight pt-4">The Defaults</h2>
		<p>
			By default, components like <code class="bg-muted px-1.5 py-0.5 rounded text-sm">Dialog</code>, <code class="bg-muted px-1.5 py-0.5 rounded text-sm">Popover</code>, <code class="bg-muted px-1.5 py-0.5 rounded text-sm">DropdownMenu</code>, and <code class="bg-muted px-1.5 py-0.5 rounded text-sm">Accordion</code> handle mounting and unmounting for you. They automatically wait for transitions to finish before removing elements from the DOM.
		</p>
		<p>
			You can use any CSS transitions or animations with this approach, using utility classes like <code class="bg-muted px-1.5 py-0.5 rounded text-sm">data-[state=open]:animate-in</code> and <code class="bg-muted px-1.5 py-0.5 rounded text-sm">data-[state=closed]:animate-out</code>.
		</p>

		<h2 class="text-2xl font-bold tracking-tight pt-4">Force Mounting</h2>
		<p>
			On each conditionally rendered component, a <code class="bg-muted px-1.5 py-0.5 rounded text-sm">forceMount</code> prop is exposed. When set to <code class="bg-muted px-1.5 py-0.5 rounded text-sm">true</code>, the component remains in the DOM and delegates visibility control to you via the <code class="bg-muted px-1.5 py-0.5 rounded text-sm">child</code> snippet.
		</p>

		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto">
<pre>{`<script lang="ts">
  import { Dialog } from "bytes-ui";
  import { fly } from "svelte/transition";
<\/script>

<Dialog.Root>
  <Dialog.Trigger>Open Dialog</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content forceMount>
      {#snippet child({ props, open })}
        {#if open}
          <div {...props} transition:fly={{ y: 20, duration: 200 }}>
            <Dialog.Title>Animated Dialog</Dialog.Title>
            <Dialog.Close>Close</Dialog.Close>
          </div>
        {/if}
      {/snippet}
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`}</pre>
		</div>

		<h2 class="text-2xl font-bold tracking-tight pt-4">Floating Content Components</h2>
		<p>
			Components positioned using Floating UI (such as <code class="bg-muted px-1.5 py-0.5 rounded text-sm">Popover.Content</code>, <code class="bg-muted px-1.5 py-0.5 rounded text-sm">Tooltip.Content</code>, and <code class="bg-muted px-1.5 py-0.5 rounded text-sm">DropdownMenu.Content</code>) provide an additional <code class="bg-muted px-1.5 py-0.5 rounded text-sm">wrapperProps</code> in their snippet arguments:
		</p>

		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto">
<pre>{`<Popover.Content forceMount>
  {#snippet child({ wrapperProps, props, open })}
    {#if open}
      <div {...wrapperProps}>
        <div {...props} transition:fly={{ y: 10, duration: 150 }}>
          Popover content goes here!
        </div>
      </div>
    {/if}
  {/snippet}
</Popover.Content>`}</pre>
		</div>
	</div>
</div>
