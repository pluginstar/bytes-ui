<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		children,
		...restProps
	}: SelectPrimitive.TriggerProps & { children?: Snippet } = $props();
</script>

<SelectPrimitive.Trigger
	bind:ref
	class={cn(
		"flex h-12 w-full items-center justify-between rounded-input border border-border-input hover:border-border-input-hover bg-background px-4 py-2 text-[15px] font-medium shadow-mini transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-dark disabled:cursor-not-allowed disabled:opacity-50 select-none",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<svg
		class="size-4 shrink-0 text-muted-foreground opacity-60"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
	</svg>
</SelectPrimitive.Trigger>
