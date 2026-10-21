<svelte:head>
	<title>State Management - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-3 border-b border-border-card pb-8">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">State Management</h1>
		<p class="text-lg text-muted-foreground leading-relaxed">
			Two-way bindings and controlled state patterns in Svelte 5 with $state and $bindable.
		</p>
	</div>

	<div class="space-y-6 text-foreground/90 leading-relaxed">
		<p>
			All Bytes UI components support both controlled and uncontrolled states seamlessly using Svelte 5's <code class="bg-muted px-1.5 py-0.5 rounded text-sm">$bindable()</code> runes.
		</p>

		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto">
<pre>{`<script lang="ts">
  import { Dialog } from "bytes-ui";
  let open = $state(false);
<\/script>

<button onclick={() => open = true}>Open Modal</button>
<Dialog.Root bind:open>
  <!-- ... -->
</Dialog.Root>`}</pre>
		</div>
	</div>
</div>
