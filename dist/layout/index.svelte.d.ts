import type { Snippet } from "svelte";
import Layout from "./Layout.svelte";
export type LayoutProps = {
    boxed?: boolean;
    header?: Snippet;
    sidebar?: Snippet;
    main?: Snippet;
};
export { Layout };
