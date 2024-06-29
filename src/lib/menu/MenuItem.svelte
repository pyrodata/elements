<script lang="ts">
    import { c } from "$lib/utils.js";
    import { ChevronDown } from "lucide-svelte";
    import type { MenuItemProps } from "./index.js";

    let {
        icon,
        children,
        active,
        label,
        collapsable = false,
        open,
        ...rest
    }: MenuItemProps = $props();
</script>
{#if children}
    <div class="mb-3">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span 
            class={c(
                'py-2 px-4',
                'flex flex-wrap items-center gap-2',
                'rounded-lg',
                'cursor-pointer',
                'font-bold',
                'hover:bg-gray-300',
            )}
            onclick={() => open = !open}
        >
            {#if icon}
                <svelte:component this={icon} class="text-gray-500" />
            {/if}
            {label}
            {#if collapsable}
                <ChevronDown class={c(
                    'ms-auto',
                    (!open) ? 'rotate-180' : ''
                )} />
            {/if}
        </span>
        {#if collapsable && open}
            {@render children()}
        {/if}
    </div>
{:else}
    <a
        class={c(
            'py-2 px-4',
            'flex flex-wrap items-center gap-2',
            'rounded-lg',
            'no-underline',
            'font-bold',
            'hover:bg-gray-300',
            (active) ? 'bg-gray-300' : ''
        )}
        {...rest}
    >
        {#if icon}
            <svelte:component this={icon} class="text-gray-500" />
        {/if}
        {label}
    </a>
{/if}