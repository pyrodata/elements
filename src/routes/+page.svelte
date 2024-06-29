<script lang="ts">
    import { Button } from '$lib/button/index.js';
    import { dialog, Dialog } from '$lib/dialog/index.svelte.js';
    import { Input } from '$lib/form/input/index.js';
    import { Select, type SelectItem } from '$lib/form/select/index.svelte';
    import { UserRound, Lock, Bird } from 'lucide-svelte';

    let modalOpen = $state(false);
    let selectItems = [
        { label: 'Germany', value: 'germany' },
        { label: 'Belgium', value: 'belgium' },
        { label: 'France', value: 'france' },
        { label: 'Poland', value: 'poland' },
        { label: 'Spain', value: 'spain' },
        { label: 'Italy', value: 'italy' },
        { label: 'Greece', value: 'greece' },
        { label: 'Sweden', value: 'sweden' },
        { label: 'Greenland', value: 'greenland' },
        { label: 'Iceland', value: 'iceland' },
    ];
    let selectedItem = $state<SelectItem>();
</script>
<div class="container">
    <div class="prose mt-12">
        <h1>@pyrodata/elements</h1>
        <p>Handcrafted svelte components used by pyrodata.com</p>

        <section>
            <h2>Buttons</h2>
            <div class="flex flex-wrap items-center gap-2 mb-3">
                <Button variant="primary" onclick={() => console.log('Hello world')}>
                    Primary button
                </Button>
                <Button variant="secondary">
                    Secondary button
                </Button>
                <Button variant="dark">
                    Dark button
                </Button>
                <Button variant="gray">
                    Gray button
                </Button>
            </div>
            <div class="flex flex-wrap gap-2 mb-3">
                <Button variant="primary" outline>
                    Primary button
                </Button>
                <Button variant="secondary" outline>
                    Secondary button
                </Button>
                <Button variant="dark" outline>
                    Dark button
                </Button>
                <Button variant="gray" outline>
                    Gray button
                </Button>
            </div>
            <div class="flex flex-wrap gap-2 mb-3">
                <Button variant="success">
                    Success button
                </Button>
                <Button variant="warning">
                    Warning button
                </Button>
                <Button variant="danger">
                    Danger button
                </Button>
            </div>
            <div class="flex flex-wrap gap-2 mb-3">
                <Button variant="success" outline>
                    Success button
                </Button>
                <Button variant="warning" outline>
                    Warning button
                </Button>
                <Button variant="danger" outline>
                    Danger button
                </Button>
            </div>
        </section>

        <section class="max-w-[400px]">
            <h2>Inputs</h2>
            <div class="mb-3">
                <Input type="text" placeholder="Form input element" label="Text input" />
            </div>
            <div class="mb-3">
                <Input type="password" placeholder="Form input element" label="Password input" />
            </div>
            <div class="mb-3">
                <Select label="Select input" placeholder="Select a item" items={selectItems} bind:value={selectedItem} onselect={(item) => console.log(item.value)} />
            </div>
        </section>

        <section>
            <h2>Modal</h2>
            <Button onclick={() => modalOpen = true}>Open modal</Button>
            <Dialog bind:open={modalOpen} title="Login" description="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet.">
                <div class="mb-3">
                    <Input placeholder="Enter your username" type="text" label="Username" icon={UserRound} />
                </div>
                <div class="mb-3">
                    <Input placeholder="Enter password" type="password" label="Password" icon={Lock} />
                </div>
                <div class="mt-8 flex gap-2 justify-end">
                    <Button onclick={() => dialog.value?.close()}>
                        Save
                    </Button>
                    <Button variant="gray" onclick={() => dialog.value?.close()}>
                        Cancel
                    </Button>
                </div>
            </Dialog>
        </section>
    </div>
</div>