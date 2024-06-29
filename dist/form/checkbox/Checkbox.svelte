<script lang="ts">import { c, uid } from "../../utils.js";
import { Check } from "lucide-svelte";
let {
  id = uid(),
  size = "md",
  label,
  description,
  checked = $bindable(false),
  value = $bindable(),
  ...props
} = $props();
</script>
<div class="flex gap-3">
    <input
        {id}
        bind:checked
        type="checkbox"
        class={c(
            'hidden',
            'appearance-none',
            'peer'
        )}
        {...props}
    />
    <span
        class={c(
            'relative',
            'block',
            'rounded-lg',
            'border border-gray-500',
            'peer-checked:bg-primary-600 peer-checked:text-white peer-checked:border-primary-600',
            (size === 'sm' ? 'w-4 h-4 top-1.5' : ''),
            (size === 'md' ? 'w-5 h-5 top-0.5' : ''),
            (size === 'lg' ? 'w-6 h-6 top-0.5' : '')
        )}
    >
        {#if checked}
            <Check 
                class={c(
                    'absolute',
                    'top-1/2 left-1/2',
                    '-translate-x-1/2 -translate-y-1/2',
                )}
                strokeWidth="3"
                size={
                    (size === 'sm') ? 12 : 
                    (size === 'md') ? 14 : 
                    (size === 'lg') ? 18 : ''
                }
            />
        {/if}
    </span>
    <label for={id} class="flex flex-col">
        <span class="font-semibold">{label}</span>
        <span class="text-gray-600">{@html description}</span>
    </label>
</div>