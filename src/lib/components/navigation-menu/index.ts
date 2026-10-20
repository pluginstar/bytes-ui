import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
import Root from "./navigation-menu.svelte";
import List from "./navigation-menu-list.svelte";
import Trigger from "./navigation-menu-trigger.svelte";
import Content from "./navigation-menu-content.svelte";
import Link from "./navigation-menu-link.svelte";

const Item = NavigationMenuPrimitive.Item;
const Indicator = NavigationMenuPrimitive.Indicator;
const Viewport = NavigationMenuPrimitive.Viewport;
const Sub = NavigationMenuPrimitive.Sub;

export {
	Root,
	List,
	Item,
	Trigger,
	Content,
	Link,
	Indicator,
	Viewport,
	Sub,
	//
	Root as NavigationMenu,
	List as NavigationMenuList,
	Item as NavigationMenuItem,
	Trigger as NavigationMenuTrigger,
	Content as NavigationMenuContent,
	Link as NavigationMenuLink,
	Viewport as NavigationMenuViewport,
};
