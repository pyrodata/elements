<script lang="ts">
    import type { MenuProps } from "./index.js";

    let {
        children,
    }: MenuProps = $props();
</script>
<div class="flex flex-col gap-1 font-semibold">
    {@render children()}
</div>