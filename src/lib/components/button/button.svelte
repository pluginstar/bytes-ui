<script lang="ts">
	import { Button as ButtonPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { buttonVariants, type ButtonSize, type ButtonVariant } from "./button.js";
	import { cn } from "../../utils.js";

	type Props = WithoutChildrenOrChild<ButtonPrimitive.RootProps> & {
		variant?: ButtonVariant;
		size?: ButtonSize;
		class?: string;
		children?: Snippet;
	} & HTMLButtonAttributes;

	let {
		variant = "default",
		size = "default",
		class: className = "",
		children,
		ref = $bindable(null),
		...restProps
	}: Props = $props();
</script>

<ButtonPrimitive.Root
	bind:ref
	class={cn(buttonVariants({ variant, size }), className)}
	{...restProps}
>
	{@render children?.()}
</ButtonPrimitive.Root>
