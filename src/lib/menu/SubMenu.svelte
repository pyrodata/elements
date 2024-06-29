<script lang="ts">
    import type { MenuProps } from "./index.js";

    let {
        children
    }: MenuProps = $props();
</script>
<div class="ms-6 [&>a]:font-normal [&>a]:before:content-['—']">
    {@render children()}
</div>