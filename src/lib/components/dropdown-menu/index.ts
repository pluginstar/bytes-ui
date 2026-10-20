import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import Content from "./dropdown-menu-content.svelte";
import Item from "./dropdown-menu-item.svelte";

const Root = DropdownMenuPrimitive.Root;
const Trigger = DropdownMenuPrimitive.Trigger;
const Group = DropdownMenuPrimitive.Group;
const Separator = DropdownMenuPrimitive.Separator;

export {
	Root,
	Trigger,
	Content,
	Item,
	Group,
	Separator,
	Root as DropdownMenu,
	Trigger as DropdownMenuTrigger,
	Content as DropdownMenuContent,
	Item as DropdownMenuItem,
	Group as DropdownMenuGroup,
	Separator as DropdownMenuSeparator,
};

export default {
	Root,
	Trigger,
	Content,
	Item,
	Group,
	Separator,
};
