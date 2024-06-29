// import type { Snippet } from "svelte";
// import { Dialog } from "./dialog.svelte.js";

// export type DialogProps = {
//     show?: boolean;
//     title?: string;
//     description?: string;
//     size?: 'full' | 'xl' | 'lg' | 'md' | 'sm';
//     children: Snippet;
// }

// export const dialog = new Dialog()

// export {
//     dialog as Dialog
// }
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

export let dialog = $state<{ value?: HTMLDialogElement }>({ value: undefined });

export {
    Dialog
}