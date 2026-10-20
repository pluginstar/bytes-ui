<script lang="ts">
	import "./layout.css";
	let { children } = $props();
</script>

<svelte:head>
	<title>Bytes UI – Styled components with Concentric Radius</title>
</svelte:head>

<div class="min-h-screen bg-background text-foreground antialiased selection:bg-[#fdffa4] selection:text-black">
	{@render children()}
</div>
