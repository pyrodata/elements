<script lang="ts" generics="T extends SelectItem">
    import { c, sizes, uid } from "$lib/utils.js";
    import { ChevronDown, Search } from "lucide-svelte";
    import type { SelectItem, SelectProps } from "./index.svelte.js";
    import { onMount } from "svelte";
    import { autoUpdate, computePosition } from "@floating-ui/dom";

    let {
        label,
        value = $bindable(),
        items,
        placeholder,
        open = $bindable(false),
        id = uid(),
        size = 'md',
        onselect
    }: SelectProps<T> = $props();
    
    let itemsRef = $state(items);
    let reference = $state<HTMLElement>();
    let dropdown = $state<HTMLDivElement>();

    const updater = () => computePosition(reference!, dropdown!, { placement: 'bottom-start' }).then(({x, y}) => {
        Object.assign(dropdown!.style, {
            width: `${reference?.clientWidth}px`,
            left: `${x}px`,
            top: `${y + 3}px`,
        });
    });

    const select = (item: T) => {
        if (onselect) onselect(item);

        value = item;
        open = false;
    }

    onMount( () => {
        if (!reference || !dropdown) {
            return;
        }

        if (!value) {
            value = items[0];
        }

        const cleanup = autoUpdate(
            reference,
            dropdown,
            updater,
        );

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

        return () => cleanup();
    });
</script>
{#if label}
    <label for={id} class="block font-semibold mb-1">{label}</label>
{/if}
<div class="relative">
    <input
        value={value?.label}
        bind:this={reference}
        {id}
        class={c(
            'w-full',
            'rounded-3xl',
            'cursor-pointer',
            'border border-gray-500',
            'focus:border-primary-600 focus:ring-4 focus:ring-primary-200',
            'placeholder:text-slate-500',
            'outline-none',
            sizes(size)
        )}
        {placeholder}
        onclick={() => open =! open}
        readonly
    />
    <ChevronDown
        class={c(
            'absolute',
            'top-1/2 right-4',
            '-translate-y-1/2',
            'cursor-pointer',
            (!open) ? 'rotate-180' : ''
        )}
        onclick={() => open =! open}
    />
</div>
<div
    bind:this={dropdown}
    class={c(
        'absolute top-0 left-0',
        'rounded-2xl',
        'bg-white border border-gray-400',
        'overflow-clip'
    )}
    class:hidden={!open}
    class:block={!open}
>
    <!-- Searchbox -->
    <div class="sticky top-0 border-b border-gray-300">
        <input 
            type="text"
            class={c(
                'bg-transparent',
                'py-2 px-4 ps-10',
                'w-full',
                'placeholder:text-slate-500',
                'outline-none'
            )}
            placeholder="Search .."
            onkeyup={(e) => {
                const value = (e.target as HTMLInputElement).value;
                
                items = [...itemsRef];
                items = items.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
            }}
        />
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size="18" />
    </div>
    <ul class="m-0 p-0 list-none max-h-60 flex flex-col overflow-auto">
        {#each items as item}
            <a 
                href={`#`}
                class="m-0 py-2 px-4 no-underline hover:bg-gray-300" 
                onclick={() => select(item)}
            >{item.label}</a>
        {/each}
    </ul>
</div>