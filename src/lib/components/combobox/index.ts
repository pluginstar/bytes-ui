import { Combobox as ComboboxPrimitive } from "bits-ui";
import Input from "./combobox-input.svelte";
import Content from "./combobox-content.svelte";
import Item from "./combobox-item.svelte";

const Root = ComboboxPrimitive.Root;
const Trigger = ComboboxPrimitive.Trigger;
const Portal = ComboboxPrimitive.Portal;
const Group = ComboboxPrimitive.Group;
const GroupHeading = ComboboxPrimitive.GroupHeading;
const Separator = ComboboxPrimitive.Separator;
const Viewport = ComboboxPrimitive.Viewport;

export {
	Root,
	Input,
	Content,
	Item,
	Trigger,
	Portal,
	Group,
	GroupHeading,
	Separator,
	Viewport,
	//
	Root as Combobox,
	Input as ComboboxInput,
	Content as ComboboxContent,
	Item as ComboboxItem,
	Trigger as ComboboxTrigger,
};
