import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import Content from "./alert-dialog-content.svelte";

const Root = AlertDialogPrimitive.Root;
const Trigger = AlertDialogPrimitive.Trigger;
const Action = AlertDialogPrimitive.Action;
const Cancel = AlertDialogPrimitive.Cancel;
const Title = AlertDialogPrimitive.Title;
const Description = AlertDialogPrimitive.Description;

export {
	Root,
	Trigger,
	Content,
	Action,
	Cancel,
	Title,
	Description,
	Root as AlertDialog,
	Trigger as AlertDialogTrigger,
	Content as AlertDialogContent,
	Action as AlertDialogAction,
	Cancel as AlertDialogCancel,
	Title as AlertDialogTitle,
	Description as AlertDialogDescription,
};

export default {
	Root,
	Trigger,
	Content,
	Action,
	Cancel,
	Title,
	Description,
};
