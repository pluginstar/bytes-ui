import { tv, type VariantProps } from "tailwind-variants";

/**
 * Input Variants
 * - Concentric Radius: rounded-input
 * - Strict Scale: 버튼과 1:1 일치하는 sm (36px), default (48px), lg (56px)
 * - Zero Margin Policy
 */
export const inputVariants = tv({
	base: "flex w-full border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-mini transition-colors placeholder:text-muted-foreground outline-hidden focus:border-dark focus:ring-1 focus:ring-dark disabled:cursor-not-allowed disabled:opacity-50",
	variants: {
		size: {
			sm: "h-9 rounded-input px-3 text-sm",
			default: "h-12 rounded-input px-4 text-[15px]",
			lg: "h-14 rounded-input px-5 text-base",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export type InputSize = VariantProps<typeof inputVariants>["size"];
