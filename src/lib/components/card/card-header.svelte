<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let { class: className = "", children, ...restProps }: HTMLAttributes<HTMLDivElement> & { children?: Snippet } = $props();
</script>

<div class={cn("p-6 pb-3 space-y-1.5", className)} {...restProps}>
	{@render children?.()}
</div>
