import Dropdown from "./Dropdown.svelte";
import DropdownItem from "./DropdownItem.svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { Icon } from "lucide-svelte";
import type { Snippet } from "svelte";
export type DropdownProps = {
    open: boolean;
    reference: HTMLElement;
    children: Snippet;
    grow?: boolean;
};
export type DropdownItemProps = {
    label: string;
    icon?: typeof Icon;
} & HTMLAnchorAttributes;
export { Dropdown, DropdownItem };
