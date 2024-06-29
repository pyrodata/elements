import type { SelectItem, SelectProps } from "./index.svelte.js";
declare class __sveltets_Render<T extends SelectItem> {
    props(): SelectProps<T>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "value" | "open";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends SelectItem>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends SelectItem>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {
        $$events?: ReturnType<__sveltets_Render<T>['events']>;
    }): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Select: $$IsomorphicComponent;
type Select<T extends SelectItem> = InstanceType<typeof Select<T>>;
export default Select;
