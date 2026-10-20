import { Avatar as AvatarPrimitive } from "bits-ui";
import Root from "./avatar.svelte";

const Image = AvatarPrimitive.Image;
const Fallback = AvatarPrimitive.Fallback;

export {
	Root,
	Image,
	Fallback,
	Root as Avatar,
	Image as AvatarImage,
	Fallback as AvatarFallback,
};

export default {
	Root,
	Image,
	Fallback,
};
