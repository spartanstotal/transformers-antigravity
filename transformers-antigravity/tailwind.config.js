/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        tf: {
          cyan: "hsl(var(--tf-cyan))",
          "cyan-soft": "hsl(var(--tf-cyan-soft))",
          steel: "hsl(var(--tf-steel))",
          warning: "hsl(var(--tf-warning))",
        }
      },
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
        body: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      keyframes: {
        scanline: {
          "0%": { bottom: "100%" },
          "100%": { bottom: "-100%" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        scanline: "scanline 8s linear infinite",
        marquee: "marquee 50s linear infinite",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
