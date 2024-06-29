<script lang="ts">let {
  children
} = $props();
</script>
<div class="ms-6 [&>a]:font-normal [&>a]:before:content-['—']">
    {@render children()}
</div>