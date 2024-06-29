import type { HTMLInputAttributes } from "svelte/elements";
import Input from "./component.svelte";
import type { Icon } from "lucide-svelte";

export type InputProps = {
    label?: string;
    value?: string | number;
    icon?: typeof Icon;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & Omit<HTMLInputAttributes, 'size'>;

export { 
    Input
}