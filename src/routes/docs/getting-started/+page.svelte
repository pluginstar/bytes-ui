<svelte:head>
	<title>Getting Started - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Getting Started
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Learn how to install and quickly integrate Bytes UI into your Svelte 5 application.
		</p>
	</div>

	<div class="space-y-6 text-foreground/90 leading-relaxed text-[15px]">
		<h2 class="text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
		<p>Install Bytes UI and its core styling dependencies using your package manager:</p>
		<div class="rounded-xl border border-border-card bg-muted/40 p-4 font-mono text-sm">
			<code>npm install bytes-ui bits-ui clsx tailwind-merge</code>
		</div>

		<h2 class="text-2xl font-semibold tracking-tight pt-4 text-foreground">Basic Usage</h2>
		<p>
			All components are pre-styled, fully accessible, and ship with built-in micro-animations and concentric radius geometry out of the box:
		</p>
		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto leading-relaxed">
<pre>{`<script lang="ts">
  import { Button, Dialog } from "bytes-ui";
  let open = $state(false);
<\/script>

<Button onclick={() => (open = true)}>Open Dialog</Button>

<Dialog.Root bind:open>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>Account Settings</Dialog.Title>
      <Dialog.Description>Manage your profile preferences.</Dialog.Description>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`}</pre>
		</div>

		<h2 class="text-2xl font-semibold tracking-tight pt-4 text-foreground">Built-in Date Handling</h2>
		<p>
			No need to install separate date libraries. Date utilities from <code>@internationalized/date</code> are exported directly from <code>bytes-ui</code>:
		</p>
		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto leading-relaxed">
<pre>{`<script lang="ts">
  import { Calendar, parseDate, today, getLocalTimeZone } from "bytes-ui";

  let selectedDate = $state(today(getLocalTimeZone()));
<\/script>

<Calendar bind:value={selectedDate} />`}</pre>
		</div>

		<h2 class="text-2xl font-semibold tracking-tight pt-4 text-foreground">Zero Configuration Transitions</h2>
		<p>
			Unlike unstyled headless primitives where you must wire up transitions manually via <code>forceMount</code>, all Bytes UI modals, dropdowns, popovers, and accordions include smooth CSS enter/exit animations by default.
		</p>

		<h2 class="text-2xl font-semibold tracking-tight pt-4 text-foreground">Next Steps</h2>
		<p>
			Check out the <a href="/docs/styling" class="font-medium underline underline-offset-4 text-foreground hover:text-foreground/80">Styling Guide</a> to learn about Tailwind v4 class merging and the concentric radius system, or explore any component in the sidebar.
		</p>
	</div>
</div>
