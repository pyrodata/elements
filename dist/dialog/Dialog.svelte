<script lang="ts">import { dialog } from "./index.svelte.js";
import { X } from "lucide-svelte";
let {
  open = $bindable(false),
  children,
  title,
  description,
  size = "md",
  onopen,
  onclose,
  ...rest
} = $props();
export const showModal = () => {
  if (onopen) onopen();
  dialog.value.showModal();
  open = true;
};
export const closeModal = () => {
  if (onclose) onclose();
  dialog.value.close();
  open = false;
};
$effect(() => {
  if (open) showModal();
  if (!open) closeModal();
  const interval = setInterval(() => {
    if (dialog.value?.checkVisibility()) {
      open = true;
    }
    if (!dialog.value?.checkVisibility()) {
      open = false;
    }
  }, 500);
  return () => clearInterval(interval);
});
</script>
<dialog
    bind:this={dialog.value}
    class="
        p-6 rounded-3xl
        outline-none ring-[6px] ring-white ring-opacity-25
        backdrop:bg-gray-800 backdrop:bg-opacity-40
        {size === 'sm' ? 'w-[300px]' : ''}
        {size === 'md' ? 'w-[500px]' : ''}
        {size === 'lg' ? 'w-[800px]' : ''}
        {size === 'xl' ? 'w-[1140px]' : ''}
    "
    {...rest}
>
    <header class="mb-6 flex justify-end">
        <button class="outline-none" onclick={closeModal}>
            <X size="32" />
        </button>
    </header>
    {#if title}
        <div class="flex flex-col">
            <h4 class="mb-2 text-2xl font-extrabold">{title}</h4>
        </div>
    {/if}
    {#if description}
        <div class="text-gray-700">
            {description}
        </div>
    {/if}
    <div class="mt-6">
        {@render children()}
    </div>
</dialog>