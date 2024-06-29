export const uid = () => "_" + Math.random().toString(16).slice(2);
export const c = ( ...classNames: string[] ) => classNames.join(' ');
export const sizes = ( size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' ) => c(
    (size === 'xs' ? 'px-4 py-0.5' : ''),
    (size === 'sm' ? 'px-4 py-1' : ''),
    (size === 'md' ? 'px-5 py-2' : ''),
    (size === 'lg' ? 'px-6 py-3' : ''),
    (size === 'xl' ? 'px-8 py-4' : ''),
)