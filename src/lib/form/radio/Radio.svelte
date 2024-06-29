<script lang="ts">
    import { c, uid } from "$lib/utils.js";
    import type { RadioProps } from "./index.svelte.js";

    let {
        id = uid(),
        size = 'md',
        label,
        description,
        value = $bindable()
    }: RadioProps = $props();
</script>
<div class="flex gap-3">
    <input
        {id}
        bind:value
        type="radio" 
        class={c(
            'relative',
            'appearance-none',
            'rounded-full',
            'border',
            'ring-1 ring-gray-500',
            'checked:ring-primary-600 checked:bg-primary-600',
            (size === 'sm' ? 'w-4 h-4 top-1.5 checked:border-[4px]' : ''),
            (size === 'md' ? 'w-5 h-5 top-1 checked:border-[4px]' : ''),
            (size === 'lg' ? 'w-6 h-6 top-0.5 checked:border-[5px]' : '')
        )}
    />
    <label for={id} class="flex flex-col">
        <span class="font-semibold">{label}</span>
        <span class="text-gray-600">{@html description}</span>
    </label>
</div>