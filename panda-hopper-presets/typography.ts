import type { TextStyles, Tokens } from "@pandacss/types"

export const fontSizes: Tokens["fontSizes"] = {
    1: { value: ".625rem" },
    2: { value: ".75rem" },
    3: { value: ".875rem" },
    4: { value: "1rem" },
    5: { value: "1.125rem" },
    6: { value: "1.375rem" },
    7: { value: "1.75rem" },
    8: { value: "2rem" },
    9: { value: "2.5rem" },
    10: { value: "3.75rem" },
    11: { value: "5rem" },
}

// TODO: is it the good naming?
export const fontWeights: Tokens["fontWeights"] = {
  400: { value: "400" },
  500: { value: "500" },
  600: { value: "600" },
}

// TODO: is it the good naming?
// TODO: is it the good units?
export const lineHeights: Tokens["lineHeights"] = {
  1: { value: "1rem" },
  2: { value: "1.2rem" },
  3: { value: "1.25rem" },
  4: { value: "1.3333333rem" },
  5: { value: "1.454595rem" },
  6: { value: "1.5rem" },
}

// export const letterSpacings: Tokens["letterSpacings"] = {
//   "050": {
//     value: "-0.01em",
//   },
//   "100": {
//     value: "-0.008em",
//   },
//   "200": {
//     value: "-0.006em",
//   },
//   "300": {
//     value: "-0.004em",
//   },
//   "400": {
//     value: "-0.002em",
//   },
//   "500": {
//     value: "0em",
//   },
//   "600": {
//     value: "0.002em",
//   },
// }

export const fonts: Tokens["fonts"] = {
  interphases: {
    value:
      "\"TT Interphases Variable\", Arial, Helvetica, sans-serif",
  }
}

// TODO add labels
export const textStyles: TextStyles = {
  "text-xs": {
    value: {
      fontSize: 1,
      lineHeight: 2,
    },
  },
  "text-sm": {
    value: {
      fontSize: 2,
      lineHeight: 4,
    },
  },
  "text-md": {
    value: {
      fontSize: 3,
      lineHeight: 5,
    },
  },
  "text-lg": {
    value: {
      fontSize: 4,
      lineHeight: 6,
    },
  },
  "text-xl": {
    value: {
      fontSize: 5,
      lineHeight: 4,
    },
  },
  "text-2xl": {
    value: {
      fontSize: 6,
      lineHeight: 5,
    },
  },
  "text-3xl": {
    value: {
      fontSize: 7,
      lineHeight: 5,
    },
  },
  "text-4xl": {
    value: {
      fontSize: 8,
      lineHeight: 3,
    },
  },
  "text-5xl": {
    value: {
      fontSize: 9,
      lineHeight: 2,
    },
  },
  "heading-2xs": {
    value: {
      fontSize: 4,
      lineHeight: 3,
      fontWeight: 600
    },
  },
  "heading-xs": {
    value: {
      fontSize: 5,
      lineHeight: 4,
      fontWeight: 600
    },
  },
  "heading-sm": {
    value: {
      fontSize: 6,
      lineHeight: 5,
      fontWeight: 600
    },
  },
  "heading-md": {
    value: {
      fontSize: 7,
      lineHeight: 5,
      fontWeight: 600
    },
  },
  "heading-lg": {
    value: {
      fontSize: 8,
      lineHeight: 6,
      fontWeight: 600
    },
  },
  "heading-xl": {
    value: {
      fontSize: 9,
      lineHeight: 2,
      fontWeight: 600
    },
  },
}