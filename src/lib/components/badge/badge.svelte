<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";
	import { badgeVariants, type BadgeVariant } from "./badge.js";
	import { cn } from "../../utils.js";

	type Props = HTMLAttributes<HTMLDivElement> & {
		variant?: BadgeVariant;
		class?: string;
		children?: Snippet;
	};

	let {
		variant = "default",
		class: className = "",
		children,
		...restProps
	}: Props = $props();
</script>

<div class={cn(badgeVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</div>
