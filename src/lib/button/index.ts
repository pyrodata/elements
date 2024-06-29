import type { Snippet, SvelteComponent } from "svelte";
import Button from "./Button.svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'dark' | 'gray' | 'danger' | 'warning' | 'success';
    outline?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    reference?: HTMLButtonElement;
    children: Snippet;
} & HTMLButtonAttributes

export {
    Button
}