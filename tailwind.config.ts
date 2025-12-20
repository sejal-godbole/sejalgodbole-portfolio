import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
        // Custom Cyber-Sketch Colors
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          purple: "hsl(var(--neon-purple))",
          blue: "hsl(var(--neon-blue))",
        },
        chalk: "hsl(var(--chalk-white))",
        space: "hsl(var(--deep-space))",
        glass: "hsl(var(--glass-bg))",
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        doodle: ['Patrick Hand', 'cursive'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "holographic": "linear-gradient(135deg, hsl(var(--neon-cyan) / 0.1) 0%, hsl(var(--neon-purple) / 0.1) 50%, hsl(var(--neon-blue) / 0.1) 100%)",
      },
      boxShadow: {
        "neon": "0 0 20px hsl(var(--neon-cyan) / 0.4), 0 0 40px hsl(var(--neon-cyan) / 0.2)",
        "neon-purple": "0 0 20px hsl(var(--neon-purple) / 0.4), 0 0 40px hsl(var(--neon-purple) / 0.2)",
        "neon-blue": "0 0 20px hsl(var(--neon-blue) / 0.4), 0 0 40px hsl(var(--neon-blue) / 0.2)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
