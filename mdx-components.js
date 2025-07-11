import { useMDXComponents as getThemeComponents, useThemeConfig } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
    return {
        ...themeComponents,
        ...components
    }
}

// Export useThemeConfig for use in other components
export { useThemeConfig }