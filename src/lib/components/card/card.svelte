<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	type Props = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className = "", children, ...restProps }: Props = $props();
</script>

<div
	class={cn(
		"rounded-card border border-border-card bg-background text-foreground shadow-card",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
