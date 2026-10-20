import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
	base: "inline-flex items-center rounded-item border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden select-none",
	variants: {
		variant: {
			default: "border-transparent bg-dark text-background shadow-mini hover:bg-dark/90",
			secondary: "border-transparent bg-muted text-foreground hover:bg-muted/80",
			destructive: "border-transparent bg-destructive text-background shadow-mini hover:bg-destructive/90",
			outline: "border-border-input text-foreground hover:bg-muted/50",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
