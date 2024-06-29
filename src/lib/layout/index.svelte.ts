import type { Snippet } from "svelte";
import Layout from "./Layout.svelte";
import type { HTMLAttributes } from "svelte/elements";

export type LayoutProps = {
    boxed?: boolean;
    header?: Snippet;
    sidebar?: Snippet;
    main?: Snippet;
}
export {
    Layout
}