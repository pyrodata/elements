import type { Icon } from "lucide-svelte";
import Menu from "./Menu.svelte";
import SubMenu from "./SubMenu.svelte";
import MenuItem from "./MenuItem.svelte";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
export type MenuProps = {
    children: Snippet;
};
export type MenuItemProps = {
    icon?: typeof Icon;
    active?: boolean;
    collapsable?: boolean;
    open?: boolean;
    label: string;
    children?: Snippet;
} & HTMLAnchorAttributes;
export { Menu, SubMenu, MenuItem, };
