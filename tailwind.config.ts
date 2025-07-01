import type { Config } from "tailwindcss"

const config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,css}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          backgroundFrom: "#FFFFFF", // Pure white
          backgroundTo: "#FAFAFA", // Very subtle gray
          // Clean grey gradient for hero
          heroGradientStart: "#F3F4F6", // Light grey
          heroGradientVia: "#E5E7EB", // Medium grey
          heroGradientEnd: "#D1D5DB", // Darker grey
          // Blue accent colors - primary theme color
          blueAccent: "#3B82F6", // Blue-500
          blueAccentHover: "#2563EB", // Blue-600
          blueAccentLight: "#EFF6FF", // Blue-50
          text: "#1E293B", // Dark slate for body text
          heading: "#0F172A", // Almost black for headings
          mutedText: "#64748B", // Medium gray for secondary text
          accent: "#3B82F6", // Blue accent for links
          accentHover: "#2563EB", // Darker blue for hover
          border: "#E2E8F0", // Light gray borders
          lightBorder: "#F1F5F9", // Very light borders
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      lineHeight: {
        tighter: "1.2",
        tight: "1.4",
        normal: "1.6",
        loose: "1.8",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "0.9375rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand.text"),
            fontFamily: theme("fontFamily.sans").join(", "),
            fontSize: theme("fontSize.base"),
            lineHeight: theme("lineHeight.normal"),
            maxWidth: "75ch",
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: theme("fontFamily.sans").join(", "),
              color: theme("colors.brand.heading"),
              fontWeight: "600",
              lineHeight: theme("lineHeight.tighter"),
            },
            h2: { fontSize: theme("fontSize.xl"), marginTop: theme("spacing.12"), marginBottom: theme("spacing.4") },
            h3: { fontSize: theme("fontSize.lg"), marginTop: theme("spacing.8"), marginBottom: theme("spacing.3") },
            p: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            a: {
              color: theme("colors.brand.accent"),
              textDecoration: "underline",
              textDecorationColor: theme("colors.brand.lightBorder"),
              textUnderlineOffset: "2px",
              fontWeight: "500",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                color: theme("colors.brand.accentHover"),
                textDecorationColor: theme("colors.brand.accentHover"),
              },
            },
            strong: { color: theme("colors.brand.heading"), fontWeight: "600" },
            code: {
              color: theme("colors.slate.700"),
              backgroundColor: theme("colors.slate.100"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
              fontFamily: theme("fontFamily.sans").join(", "),
              fontSize: "0.875em",
            },
            pre: {
              backgroundColor: theme("colors.slate.100"),
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.md"),
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: theme("colors.slate.700"),
              fontSize: "1em",
            },
            blockquote: {
              color: theme("colors.brand.mutedText"),
              borderLeftColor: theme("colors.brand.border"),
              fontStyle: "italic",
              paddingLeft: theme("spacing.4"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },
            img: {
              borderRadius: theme("borderRadius.sm"),
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.8"),
            },
            hr: {
              borderColor: theme("colors.brand.lightBorder"),
              marginTop: theme("spacing.12"),
              marginBottom: theme("spacing.12"),
            },
            ul: {
              paddingLeft: theme("spacing.5"),
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            ol: {
              paddingLeft: theme("spacing.5"),
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            li: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.2"),
            },
            "li::marker": {
              color: theme("colors.brand.mutedText"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
