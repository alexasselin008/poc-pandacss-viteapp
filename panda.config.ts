import { defineConfig } from "@pandacss/dev"
import { preset } from "./panda-hopper-presets"

export default defineConfig({
    // Whether to use css reset
    preflight: false,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    // theme: {
    //   extend: {}
    // },

    // The output directory for your css system
    outdir: "styled-system",

    prefix: "hop",
    jsxFramework: "react",
    outExtension: "js",
    presets: [preset],
    separator: "-", // only affect css
    strictTokens: true,
})