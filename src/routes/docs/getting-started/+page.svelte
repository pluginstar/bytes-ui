<svelte:head>
	<title>Getting Started - Bytes UI</title>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-3 border-b border-border-card pb-8">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Getting Started</h1>
		<p class="text-lg text-muted-foreground leading-relaxed">
			Learn how to get started using Bytes UI in your Svelte 5 application.
		</p>
	</div>

	<div class="space-y-6 text-foreground/90 leading-relaxed">
		<h2 class="text-2xl font-bold tracking-tight">Installation</h2>
		<p>Install Bytes UI and peer dependencies using your preferred package manager:</p>
		<div class="rounded-xl border border-border-card bg-muted/40 p-4 font-mono text-sm">
			<code>npm install bytes-ui bits-ui clsx tailwind-merge</code>
		</div>

		<h2 class="text-2xl font-bold tracking-tight pt-4">Basic Usage</h2>
		<p>Import styled components directly from <code>bytes-ui</code> and start using them:</p>
		<div class="rounded-xl border border-border-card bg-muted/40 p-5 font-mono text-xs overflow-x-auto">
<pre>{`<script lang="ts">
  import { Button, Accordion } from "bytes-ui";
<\/script>

<Button variant="default">Click Me</Button>

<Accordion.Root type="single">
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger>Item 1 Title</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      This is the collapsible content.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}</pre>
		</div>

		<h2 class="text-2xl font-bold tracking-tight pt-4">Concentric Radius System</h2>
		<p>
			All Bytes UI components automatically calculate padding and corner radius using the concentric formula:
		</p>
		<div class="rounded-xl border border-border-card bg-muted/20 p-4 font-mono text-xs">
			<code>R_inner = max(0, R_outer - padding)</code>
		</div>
	</div>
</div>
