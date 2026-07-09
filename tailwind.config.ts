import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from Figma — "America's Food Court" (DOG IT UP)
 * File: ECT7ewuOazNto88yQck1pN · Frame: "Landing Page" (217:6) · 1440px canvas
 *
 * NOTE: The file defines no Figma variables/styles — all values below were
 * read from raw layer properties.
 *
 * ⚠️ Two reds exist in the design:
 *   #F33505 (primary — used everywhere) and #F82301 (subscription bar only).
 *   Likely a design inconsistency; confirm with the designer before shipping.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F33505", // primary red — CTAs, headings, accents, card buttons
          deep: "#F82301",    // subscription bar background (see note above)
          orange: "#FC9C05",  // nav "Order Now" pill
        },
        ink: {
          DEFAULT: "#030102", // near-black — nav links, dark button, subheadings
          soft: "#0A0808",    // hero sub-copy, secondary button text
        },
        muted: "#919191",     // input placeholder ("Enter your Email")
        blush: "#FFF0F0",     // hero button arrow-circle border
      },

      fontFamily: {
        // Inter is the only typeface in the design (weights 400 & 700).
        // Pair with next/font: Inter({ subsets: ["latin"], variable: "--font-inter" })
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Type scale as used in the design (leading is "normal" throughout
        // except footer link lists, which use 50px line-height — see leading-footer)
        "nav": ["14px", { lineHeight: "normal", fontWeight: "700" }],   // nav links, hero feature labels
        "fine": ["15px", { lineHeight: "normal" }],                     // footer tagline paragraph
        "body": ["16px", { lineHeight: "normal" }],                     // buttons, ingredient lists, footer links
        "lead": ["20px", { lineHeight: "normal" }],                     // subscription copy, footer column headings
        "card-title": ["28px", { lineHeight: "normal", fontWeight: "700" }],   // menu card names
        "feature": ["32px", { lineHeight: "normal", fontWeight: "700" }],      // hero sub-headline, "Why Choose" titles, deal sub-copy
        "section-label": ["36px", { lineHeight: "normal", fontWeight: "700" }],// "Our Menu" eyebrow, menu sub-headings, subscription heading
        "display": ["64px", { lineHeight: "normal", fontWeight: "700" }],      // "Signature Flavors.", "Find us Near you.", "Why Choose"
        "display-lg": ["70px", { lineHeight: "normal", fontWeight: "700" }],   // "Make it a Combo"
      },

      lineHeight: {
        footer: "50px", // footer link stacks & legal row
      },

      borderRadius: {
        pill: "38px",     // hero CTAs, "View Full Menu" button
        button: "30px",   // menu card buttons, outline buttons (combo / find location)
        "pill-sm": "24px",// nav "Order Now" pill
        field: "16px",    // subscription email input + "Sign up" button
      },

      spacing: {
        // Layout rhythm from the 1440px frame
        gutter: "100px",        // page side padding (content area = 1240px)
        "menu-gap-y": "39px",   // vertical gap between menu card rows
        "nav-gap": "47px",      // gap between nav links
        "feature-gap": "129px", // gap between "Why Choose" columns
        // Component heights
        "btn-nav": "36px",      // nav pill
        "btn": "57px",          // hero buttons (cards use 52–57px, same token)
        "btn-lg": "59px",       // combo / find-a-location outline buttons
        "btn-xl": "76px",       // "View Full Menu"
        "field-h": "78px",      // subscription input & button
      },

      maxWidth: {
        content: "1240px", // 1440 − (2 × 100px gutter)
      },

      borderWidth: {
        // Outline buttons ("Find out more", "Build your Combo", "Find a Location")
        // consistently use 2px borders; hero arrow circle uses 1px.
        DEFAULT: "1px",
        "2": "2px",
      },
    },
  },
  plugins: [],
};

export default config;