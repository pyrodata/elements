import type { HTMLSelectAttributes } from "svelte/elements";
import Select from "./Select.svelte";

export type SelectItem = {
    value: any;
    label: string;
}

export type SelectProps<T extends SelectItem> = {
    value: T | undefined;
    items: T[];
    open?: boolean;
    label?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    id?: string;

    onselect?: ( value: T ) => void;
} & Omit<HTMLSelectAttributes, 'value' | 'size' | 'onselect'>;

export {
    Select
}