<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let { class: className = "", children, ...restProps }: HTMLAttributes<HTMLHeadingElement> & { children?: Snippet } = $props();
</script>

<h3 class={cn("text-lg font-semibold leading-none tracking-tight", className)} {...restProps}>
	{@render children?.()}
</h3>
