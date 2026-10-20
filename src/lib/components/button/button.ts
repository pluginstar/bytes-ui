import { tv, type VariantProps } from "tailwind-variants";

/**
 * Button Variants
 * - Concentric Radius: rounded-input (파생 토큰 적용)
 * - Zero Margin Policy: 컴포넌트 자체에 m-* 없음
 * - Strict Scale: sm (36px), default (48px), lg (56px) 규격화
 */
export const buttonVariants = tv({
	base: "inline-flex items-center justify-center font-semibold whitespace-nowrap transition-all outline-hidden select-none active:scale-[0.98] active:transition-all disabled:pointer-events-none disabled:opacity-50",
	variants: {
		variant: {
			default:
				"bg-dark text-background shadow-mini hover:bg-dark/90 focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2",
			outline:
				"border border-border-input hover:border-border-input-hover bg-background text-foreground shadow-btn hover:bg-muted/50",
			secondary:
				"bg-muted text-foreground hover:bg-muted/80 shadow-mini",
			ghost:
				"text-foreground hover:bg-dark-04 hover:text-foreground",
			destructive:
				"bg-destructive text-background shadow-mini hover:bg-destructive/90",
			link:
				"text-dark underline-offset-4 hover:underline p-0 h-auto font-medium",
		},
		size: {
			sm: "h-9 rounded-input px-3.5 text-sm",
			default: "h-12 rounded-input px-[21px] text-[15px]",
			lg: "h-14 rounded-input px-7 text-base",
			icon: "h-10 w-10 rounded-input p-0",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
