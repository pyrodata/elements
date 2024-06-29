import type { HTMLInputAttributes } from "svelte/elements";
import Radio from "./Radio.svelte";
export type RadioProps = {
    label: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
} & Omit<HTMLInputAttributes, 'size'>;
export { Radio };
