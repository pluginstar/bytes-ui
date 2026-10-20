import { Command as CommandPrimitive } from "bits-ui";
import Root from "./command.svelte";
import Input from "./command-input.svelte";
import List from "./command-list.svelte";
import Item from "./command-item.svelte";
import Group from "./command-group.svelte";
import Empty from "./command-empty.svelte";

const GroupHeading = CommandPrimitive.GroupHeading;
const GroupItems = CommandPrimitive.GroupItems;
const Separator = CommandPrimitive.Separator;
const Viewport = CommandPrimitive.Viewport;
const Loading = CommandPrimitive.Loading;
const LinkItem = CommandPrimitive.LinkItem;

export {
	Root,
	Input,
	List,
	Item,
	Group,
	GroupHeading,
	GroupItems,
	Empty,
	Separator,
	Viewport,
	Loading,
	LinkItem,
	//
	Root as Command,
	Input as CommandInput,
	List as CommandList,
	Item as CommandItem,
	Group as CommandGroup,
	Empty as CommandEmpty,
	Separator as CommandSeparator,
};
