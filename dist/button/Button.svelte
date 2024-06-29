<script lang="ts">let {
  variant = "primary",
  outline = false,
  children,
  size = "md",
  reference = $bindable(),
  ...rest
} = $props();
</script>
<button
    bind:this={reference}
    class={[
        `rounded-3xl font-bold`,
        `border border-1 outline-none`,
        `transition-colors`,
        `hover:bg-opacity-85`,
        `focus:ring-4`,
        (size === 'xs' ? 'px-4 py-0.5' : ''),
        (size === 'sm' ? 'px-4 py-1' : ''),
        (size === 'md' ? 'px-5 py-2' : ''),
        (size === 'lg' ? 'px-6 py-3' : ''),
        (size === 'xl' ? 'px-8 py-4' : ''),
        /**
         * Primary
         */
        (variant === 'primary' && !outline) ? 
            'bg-primary-600 text-white focus:ring-primary-200' : 
        (variant === 'primary' && outline) ? 
            'bg-transparent border-primary-600 text-primary-600 focus:ring-primary-200' : '',
        /**
         * Light
         */
        (variant === 'secondary' && !outline) ? 
            'bg-primary-100 text-primary-600 focus:ring-primary-50' : 
        (variant === 'secondary' && outline) ? 
            'bg-transparent border-primary-200 text-primary-600 focus:ring-primary-50' : '',
        /**
         * Gray
         */
        (variant === 'gray' && !outline) ? 
            'bg-gray-500 text-dark focus:ring-gray-300' : 
        (variant === 'gray' && outline) ? 
            'bg-transparent border-gray-500 text-gray-500 focus:ring-gray-300' : '',
        /**
         * Dark
         */
        (variant === 'dark' && !outline) ? 
            'bg-gray-900 text-white focus:ring-gray-400' : 
        (variant === 'dark' && outline) ? 
            'bg-transparent border-gray-900 text-gray-900 focus:ring-gray-400' : '',
        /**
         * Danger
         */
        (variant === 'danger' && !outline) ? 
            'bg-danger-600 text-white focus:ring-danger-200' : 
        (variant === 'danger' && outline) ? 
            'bg-transparent border-danger-600 text-danger-600 focus:ring-danger-200' : '',
        /**
         * Warning
         */
        (variant === 'warning' && !outline) ? 
            'bg-warning-600 text-white focus:ring-warning-200' : 
        (variant === 'warning' && outline) ? 
            'bg-transparent border-warning-600 text-warning-600 focus:ring-warning-200' : '',
        /**
         * Success
         */
        (variant === 'success' && !outline) ? 
            'bg-success-600 text-white focus:ring-success-200' : 
        (variant === 'success' && outline) ? 
            'bg-transparent border-success-600 text-success-600 focus:ring-success-200' : '',
    ].join(' ')}
    {...rest}
>{@render children()}</button>