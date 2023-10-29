import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    colors: {
        gray: {
            50: '#f9f9f9',
            100: '#f3f3f3',
            200: '#e5e5e5',
            300: '#d9d9d9',
            400: '#c4c4c4',
            500: '#a3a3a3',
            600: '#737373',
            700: '#525252',
            800: '#262626',
            900: '#171717',
        }
    }
})

export default theme