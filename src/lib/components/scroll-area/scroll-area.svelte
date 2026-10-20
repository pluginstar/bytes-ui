<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "../../utils.js";

	let {
		ref = $bindable(null),
		class: className = "",
		orientation = "vertical",
		type = "hover",
		children,
		...restProps
	}: ScrollAreaPrimitive.RootProps & {
		orientation?: "vertical" | "horizontal" | "both";
		children?: Snippet;
	} = $props();
</script>

<ScrollAreaPrimitive.Root
	bind:ref
	{type}
	class={cn("relative overflow-hidden", className)}
	{...restProps}
>
	<ScrollAreaPrimitive.Viewport class="h-full w-full rounded-[inherit]">
		{@render children?.()}
	</ScrollAreaPrimitive.Viewport>

	{#if orientation === "vertical" || orientation === "both"}
		<ScrollAreaPrimitive.Scrollbar
			orientation="vertical"
			class="data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 data-[state=hidden]:opacity-0 hover:bg-dark-10 flex w-2.5 touch-none select-none rounded-full border-l border-l-transparent bg-transparent p-px transition-all duration-200 hover:w-3"
		>
			<ScrollAreaPrimitive.Thumb class="bg-muted-foreground/60 hover:bg-muted-foreground flex-1 rounded-full transition-colors" />
		</ScrollAreaPrimitive.Scrollbar>
	{/if}

	{#if orientation === "horizontal" || orientation === "both"}
		<ScrollAreaPrimitive.Scrollbar
			orientation="horizontal"
			class="data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 data-[state=hidden]:opacity-0 hover:bg-dark-10 flex h-2.5 touch-none select-none rounded-full border-t border-t-transparent bg-transparent p-px transition-all duration-200 hover:h-3"
		>
			<ScrollAreaPrimitive.Thumb class="bg-muted-foreground/60 hover:bg-muted-foreground flex-1 rounded-full transition-colors" />
		</ScrollAreaPrimitive.Scrollbar>
	{/if}

	<ScrollAreaPrimitive.Corner />
</ScrollAreaPrimitive.Root>
