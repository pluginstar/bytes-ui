import { Menubar as MenubarPrimitive } from "bits-ui";
import Root from "./menubar.svelte";
import Trigger from "./menubar-trigger.svelte";
import Content from "./menubar-content.svelte";
import Item from "./menubar-item.svelte";

const Menu = MenubarPrimitive.Menu;
const Portal = MenubarPrimitive.Portal;
const Sub = MenubarPrimitive.Sub;
const SubTrigger = MenubarPrimitive.SubTrigger;
const SubContent = MenubarPrimitive.SubContent;
const Group = MenubarPrimitive.Group;
const GroupHeading = MenubarPrimitive.GroupHeading;
const Separator = MenubarPrimitive.Separator;
const CheckboxItem = MenubarPrimitive.CheckboxItem;
const RadioGroup = MenubarPrimitive.RadioGroup;
const RadioItem = MenubarPrimitive.RadioItem;

export {
	Root,
	Menu,
	Trigger,
	Portal,
	Content,
	Item,
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
	Root as Menubar,
	Menu as MenubarMenu,
	Trigger as MenubarTrigger,
	Content as MenubarContent,
	Item as MenubarItem,
};
