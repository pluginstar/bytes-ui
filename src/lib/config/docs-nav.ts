import Sticker from "phosphor-svelte/lib/Sticker";
import Compass from "phosphor-svelte/lib/Compass";
import CodeBlock from "phosphor-svelte/lib/CodeBlock";
import Link from "phosphor-svelte/lib/Link";
import Resize from "phosphor-svelte/lib/Resize";
import Palette from "phosphor-svelte/lib/Palette";
import CalendarBlank from "phosphor-svelte/lib/CalendarBlank";
import CirclesThreePlus from "phosphor-svelte/lib/CirclesThreePlus";
import FigmaLogo from "phosphor-svelte/lib/FigmaLogo";
import Swap from "phosphor-svelte/lib/Swap";
import Robot from "phosphor-svelte/lib/Robot";

export type NavItem = {
	title: string;
	href: string;
	label?: string;
	icon?: any;
	external?: boolean;
};

export type NavSection = {
	title: string;
	items: NavItem[];
};

export const docsNavigation: NavSection[] = [
	{
		title: "Overview",
		items: [
			{ title: "Introduction", href: "/docs", icon: Sticker },
			{ title: "Getting Started", href: "/docs/getting-started", icon: Compass },
			{ title: "Child Snippet", href: "/docs/child-snippet", icon: CodeBlock },
			{ title: "Ref", href: "/docs/ref", icon: Link },
			{ title: "Transitions", href: "/docs/transitions", icon: Resize },
			{ title: "Styling", href: "/docs/styling", icon: Palette },
			{ title: "Dates", href: "/docs/dates", icon: CalendarBlank },
			{ title: "State Management", href: "/docs/state-management", icon: CirclesThreePlus },
			{ title: "Figma", href: "/docs/figma-file", icon: FigmaLogo },
			{ title: "Migration Guide", href: "/docs/migration-guide", icon: Swap },
			{ title: "LLMs", href: "/docs/llms", icon: Robot },
		],
	},
	{
		title: "Components",
		items: [
			{ title: "Accordion", href: "/docs/components/accordion" },
			{ title: "Alert Dialog", href: "/docs/components/alert-dialog" },
			{ title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
			{ title: "Avatar", href: "/docs/components/avatar" },
			{ title: "Badge", href: "/docs/components/badge" },
			{ title: "Button", href: "/docs/components/button" },
			{ title: "Calendar", href: "/docs/components/calendar" },
			{ title: "Card", href: "/docs/components/card" },
			{ title: "Checkbox", href: "/docs/components/checkbox" },
			{ title: "Collapsible", href: "/docs/components/collapsible" },
			{ title: "Combobox", href: "/docs/components/combobox" },
			{ title: "Command", href: "/docs/components/command" },
			{ title: "Context Menu", href: "/docs/components/context-menu" },
			{ title: "Date Field", href: "/docs/components/date-field" },
			{ title: "Date Picker", href: "/docs/components/date-picker" },
			{ title: "Date Range Field", href: "/docs/components/date-range-field" },
			{ title: "Date Range Picker", href: "/docs/components/date-range-picker" },
			{ title: "Dialog", href: "/docs/components/dialog" },
			{ title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
			{ title: "Input", href: "/docs/components/input" },
			{ title: "Label", href: "/docs/components/label" },
			{ title: "Link Preview", href: "/docs/components/link-preview" },
			{ title: "Menubar", href: "/docs/components/menubar" },
			{ title: "Meter", href: "/docs/components/meter" },
			{ title: "Navigation Menu", href: "/docs/components/navigation-menu" },
			{ title: "Pagination", href: "/docs/components/pagination" },
			{ title: "Pin Input", href: "/docs/components/pin-input" },
			{ title: "Popover", href: "/docs/components/popover" },
			{ title: "Progress", href: "/docs/components/progress" },
			{ title: "Radio Group", href: "/docs/components/radio-group" },
			{ title: "Range Calendar", href: "/docs/components/range-calendar" },
			{ title: "Rating Group", href: "/docs/components/rating-group" },
			{ title: "Scroll Area", href: "/docs/components/scroll-area" },
			{ title: "Select", href: "/docs/components/select" },
			{ title: "Separator", href: "/docs/components/separator" },
			{ title: "Slider", href: "/docs/components/slider" },
			{ title: "Switch", href: "/docs/components/switch" },
			{ title: "Tabs", href: "/docs/components/tabs" },
			{ title: "Time Field", href: "/docs/components/time-field" },
			{ title: "Time Range Field", href: "/docs/components/time-range-field" },
			{ title: "Toggle", href: "/docs/components/toggle" },
			{ title: "Toggle Group", href: "/docs/components/toggle-group" },
			{ title: "Toolbar", href: "/docs/components/toolbar" },
			{ title: "Tooltip", href: "/docs/components/tooltip" },
		],
	},
];
