<script lang="ts">import { c, uid } from "../../utils.js";
let {
  label,
  icon,
  size = "md",
  value = $bindable(),
  id = uid(),
  ...rest
} = $props();
</script>
{#if label}
    <label for={id} class="block font-semibold mb-1">{label}</label>
{/if}
<div class="relative">
    {#if icon}
        <svelte:component this={icon} class="absolute top-1/2 -translate-y-1/2 translate-x-4 text-gray-700" />
    {/if}
    <input 
        bind:value
        {id} 
        {...rest}
        class={c(
            'w-full',
            'rounded-3xl',
            'outline-none',
            'border border-gray-500',
            'focus:border-primary-600 focus:ring-4 focus:ring-primary-200',
            'placeholder:text-slate-500',
            (size === 'xs' ? 'px-4 py-0.5' : ''),
            (size === 'sm' ? 'px-4 py-1' : ''),
            (size === 'md' ? 'px-5 py-2' : ''),
            (size === 'lg' ? 'px-6 py-3' : ''),
            (size === 'xl' ? 'px-8 py-4' : ''),
        )}
        class:ps-12={icon}
    />
</div>