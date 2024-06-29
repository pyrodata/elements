<script lang="ts">
    import { c } from "$lib/utils.js";
    import type { DropdownItemProps } from "./index.js";

    let {
        label,
        icon,
        ...props
    }: DropdownItemProps = $props();
</script>
<a
    {...props}
    class={c(
        'px-3 py-2',
        'rounded-lg', 
        'flex items-center gap-2',
        'no-underline cursor-pointer',
        'hover:bg-gray-300'
    )}
>
    {#if icon}
        <svelte:component this={icon} />
    {/if}
    {label}
</a>