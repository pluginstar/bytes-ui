<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let { class: className = "", children, ...restProps }: HTMLAttributes<HTMLParagraphElement> & { children?: Snippet } = $props();
</script>

<p class={cn("text-sm text-foreground-alt", className)} {...restProps}>
	{@render children?.()}
</p>
