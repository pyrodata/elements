<script>
    import { Layout } from "$lib/layout/index.svelte";
    import Menu from "$lib/menu/Menu.svelte";
    import MenuItem from "$lib/menu/MenuItem.svelte";

</script>
<Layout>
    {#snippet sidebar()}
        <a href="/" class="text-2xl font-bold">Pyrodata.com</a>
        <div class="mt-6">
            <h6 class="text-sm uppercase font-semibold text-gray-600 mb-3">Pyrotechnics</h6>
            <Menu>
                <MenuItem href="/chemicals" label="Chemials"></MenuItem>
            </Menu>
        </div>
    {/snippet}
    {#snippet header()}
        Header
    {/snippet}
    {#snippet main()}
        This is the main window
    {/snippet}
</Layout>