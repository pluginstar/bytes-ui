import { Dialog as DialogPrimitive } from "bits-ui";
import Content from "./dialog-content.svelte";

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const Close = DialogPrimitive.Close;
const Portal = DialogPrimitive.Portal;
const Title = DialogPrimitive.Title;
const Description = DialogPrimitive.Description;

export {
	Root,
	Trigger,
	Close,
	Portal,
	Content,
	Title,
	Description,
	Root as Dialog,
	Trigger as DialogTrigger,
	Close as DialogClose,
	Portal as DialogPortal,
	Content as DialogContent,
	Title as DialogTitle,
	Description as DialogDescription,
};

export default {
	Root,
	Trigger,
	Close,
	Portal,
	Content,
	Title,
	Description,
};
