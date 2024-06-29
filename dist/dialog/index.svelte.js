// import type { Snippet } from "svelte";
// import { Dialog } from "./dialog.svelte.js";
import Dialog from "./Dialog.svelte";
export let dialog = $state({ value: undefined });
export { Dialog };
