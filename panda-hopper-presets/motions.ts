import type { Tokens } from "@pandacss/types"

// export const keyframes: Theme["keyframes"] = {
//   "fade-in": {
//     to: {
//       opacity: 1,
//     },
//   },
//   "fade-out": {
//     to: {
//       opacity: 0,
//     },
//   },
//   "zoom-in": {
//     "0%": {
//       opacity: 0,
//       transform: "scale(0.5)",
//     },
//     "50%": {
//       opacity: 1,
//     },
//     "75%": {
//       transform: "scale(1.25)",
//     },
//     "100%": {
//       transform: "scale(1)",
//     },
//   },
//   "shrink-out": {
//     to: {
//       opacity: 0,
//       transform: "scale(0.75)",
//     },
//   },
// }

export const easings: Tokens["easings"] = {
  "productive": {
    value: "cubic-bezier(0.22, 0.61, 0.36, 1)",
  },
  "focus": {
    value: "cubic-bezier(0.46, 0.03, 0.52, 0.96)",
  },
  "expressive": {
    value: "cubic-bezier(0.58, 0.01, 0.15, 1.5)",
  },
}

export const durations: Tokens["durations"] = {
  1: { value: "100ms" },
  2: { value: "200ms" },
  3: { value: "300ms" },
  4: { value: "500ms" },
  5: { value: "800ms" },
}

// export const animations: Tokens["animations"] = {
//   "fade-in": {
//     value: "fade-in 0.125s ease-in-out",
//   },
//   "fade-out": {
//     value: "fade-out 0.125s ease-in-out",
//   },
//   "zoom-in": {
//     value: "zoom-in 0.125s ease-in-out",
//   },
//   "shrink-out": {
//     value: "shrink-out 0.125s ease-in-out",
//   },
// }