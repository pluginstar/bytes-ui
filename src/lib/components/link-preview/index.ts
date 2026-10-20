import { LinkPreview as LinkPreviewPrimitive } from "bits-ui";
import Content from "./link-preview-content.svelte";

const Root = LinkPreviewPrimitive.Root;
const Trigger = LinkPreviewPrimitive.Trigger;
const Arrow = LinkPreviewPrimitive.Arrow;
const Portal = LinkPreviewPrimitive.Portal;

export {
	Root,
	Trigger,
	Content,
	Arrow,
	Portal,
	//
	Root as LinkPreview,
	Trigger as LinkPreviewTrigger,
	Content as LinkPreviewContent,
};
