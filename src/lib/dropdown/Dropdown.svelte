<script lang="ts">
    import type { DropdownProps } from "./index.js";
    import { autoUpdate, computePosition } from "@floating-ui/dom";
    import { c } from "$lib/utils.js";
    import { onMount } from "svelte";

    let {
        reference = $bindable(),
        open = $bindable(false),
        grow = false,
        children,
    }: DropdownProps = $props();

    let dropdown = $state<HTMLDivElement>();

    const updater = () => computePosition(reference!, dropdown!, { placement: 'bottom-start' }).then(({x, y}) => {
        let width = 'max-content';
        
        if (grow) {
            width = `${reference.clientWidth}px`;
        }

        Object.assign(dropdown!.style, {
            width,
            left: `${x}px`,
            top: `${y + 6}px`,
        });
    });

    onMount( () => {
        document.addEventListener('click', (e) => {
            if (
                !dropdown?.contains((e.target as HTMLElement)) &&
                !reference?.contains((e.target as HTMLElement))
            ) {
                open = false;
            }
        })

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                open = false;
            }
        })
    })

    $effect( () => {
        // Just referencing so $effect will run on `open` change
        open;

        if (!reference || !dropdown) {
            return;
        }

        const cleanup = autoUpdate(reference, dropdown, updater);

        return () => cleanup();
    })
</script>
<div
    bind:this={dropdown}
    class={c(
        'absolute',
        'p-2',
        'rounded-xl',
        'bg-white',
        'shadow-xl shadow-gray-400',
        'border border-gray-400',
        'z-50'
    )}
    class:block={open}
    class:hidden={!open}
>
    {@render children()}
</div>