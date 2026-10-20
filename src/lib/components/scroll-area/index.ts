import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
import ScrollArea from "./scroll-area.svelte";

const Viewport = ScrollAreaPrimitive.Viewport;
const Scrollbar = ScrollAreaPrimitive.Scrollbar;
const Thumb = ScrollAreaPrimitive.Thumb;
const Corner = ScrollAreaPrimitive.Corner;

export {
	ScrollArea,
	ScrollArea as Root,
	Viewport,
	Scrollbar,
	Thumb,
	Corner,
};
export default ScrollArea;
