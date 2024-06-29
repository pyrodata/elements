<script lang="ts">
    import type { LayoutProps } from "./index.svelte.js";

    let {
        boxed = true,
        header,
        main,
        sidebar
    }: LayoutProps = $props();
</script>
<div class="flex h-screen overflow-hidden" class:container={boxed}>
    {#if sidebar}
        <div class="min-w-[280px] max-w-[280px] flex-grow border-r border-gray-300">
            {@render sidebar()}
        </div>
    {/if}
    <div class="flex-grow flex flex-col">
        {#if header}
            <div class="sticky top-0">
                {@render header()}
            </div>
        {/if}
        {#if main}
            <main class="flex-grow overflow-auto">
                {@render main()}
            </main>
        {/if}
    </div>
</div>