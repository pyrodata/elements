import type { Snippet } from "svelte";
import type { HTMLDialogAttributes } from "svelte/elements";
import Dialog from "./Dialog.svelte";
export type DialogProps = {
    open?: boolean;
    children: Snippet;
    title?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    onopen?: () => void;
    onclose?: () => void;
} & HTMLDialogAttributes;
export declare let dialog: {
    value?: HTMLDialogElement;
};
export { Dialog };
