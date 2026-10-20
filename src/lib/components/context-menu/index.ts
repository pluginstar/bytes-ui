import { ContextMenu as ContextMenuPrimitive } from "bits-ui";
import Content from "./context-menu-content.svelte";
import Item from "./context-menu-item.svelte";

const Root = ContextMenuPrimitive.Root;
const Trigger = ContextMenuPrimitive.Trigger;
const Portal = ContextMenuPrimitive.Portal;
const Sub = ContextMenuPrimitive.Sub;
const SubTrigger = ContextMenuPrimitive.SubTrigger;
const SubContent = ContextMenuPrimitive.SubContent;
const Group = ContextMenuPrimitive.Group;
const GroupHeading = ContextMenuPrimitive.GroupHeading;
const Separator = ContextMenuPrimitive.Separator;
const CheckboxItem = ContextMenuPrimitive.CheckboxItem;
const RadioGroup = ContextMenuPrimitive.RadioGroup;
const RadioItem = ContextMenuPrimitive.RadioItem;

export {
	Root,
	Trigger,
	Content,
	Item,
	Portal,
	Sub,
	SubTrigger,
	SubContent,
	Group,
	GroupHeading,
	Separator,
	CheckboxItem,
	RadioGroup,
	RadioItem,
	//
	Root as ContextMenu,
	Trigger as ContextMenuTrigger,
	Content as ContextMenuContent,
	Item as ContextMenuItem,
};
