import type { HTMLInputAttributes } from "svelte/elements";
import Checkbox from "./Checkbox.svelte";

export type CheckboxProps = {
    label: string;
    checked: boolean;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
} & Omit<HTMLInputAttributes, 'size'>;

export {
    Checkbox
}