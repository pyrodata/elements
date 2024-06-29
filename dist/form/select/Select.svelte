<script lang="ts" generics="T extends SelectItem">import { c, sizes, uid } from "../../utils.js";
import { ChevronDown, Search } from "lucide-svelte";
import { onMount } from "svelte";
import { autoUpdate, computePosition } from "@floating-ui/dom";
import Dropdown from "../../dropdown/Dropdown.svelte";
import DropdownItem from "../../dropdown/DropdownItem.svelte";
let {
  label,
  value = $bindable(),
  items,
  placeholder,
  open = $bindable(false),
  id = uid(),
  size = "md",
  onselect
} = $props();
let itemsRef = $state(items);
let reference = $state();
const select = (item) => {
  if (onselect) onselect(item);
  value = item;
  open = false;
};
onMount(() => {
  if (!value) {
    value = items[0];
  }
});
</script>
{#if label}
    <label for={id} class="block font-semibold mb-1">{label}</label>
{/if}
<div class="relative bg-white rounded-3xl z-10">
    <input
        value={value?.label}
        bind:this={reference}
        {id}
        class={c(
            'relative',
            'w-full z-20',
            'rounded-3xl',
            'cursor-pointer',
            'bg-transparent',
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
            'z-10',
            (!open) ? 'rotate-180' : ''
        )}
        onclick={() => open =! open}
    />
</div>
<Dropdown bind:open bind:reference grow>
    <div class="mb-3 sticky top-0 border-b border-gray-300">
        <input 
            type="text"
            class={c(
                'bg-transparent',
                'py-2 px-4 ps-10',
                'w-full rounded-xl',
                'border border-gray-400',
                'placeholder:text-slate-500',
                'outline-none'
            )}
            placeholder="Search .."
            onkeyup={(e) => {
                const value = (e.target as HTMLInputElement).value;
                
                items = [...itemsRef];
                items = items.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
            }}
        />
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size="18" />
    </div>
    {#each items as item}
        <DropdownItem 
            label={item.label} 
            onclick={(e) => {
                e.preventDefault();
                select(item);
            }} 
        />
    {/each}
</Dropdown>