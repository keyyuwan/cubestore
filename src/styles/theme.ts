import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#f0f2f5",
    },
  },

  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "64em", // 1024px
    xl: "96em", // 1536px
  },

  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "2.25rem", // 36px
    "3xl": "3rem", // 48px
    "4xl": "3.75rem", // 60px
    "5xl": "4rem", // 64px
  },

  fontWeights: {
    thin: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  styles: {
    global: {
      body: {
        background: "#E2E8F0",
      },
    },
  },
})
