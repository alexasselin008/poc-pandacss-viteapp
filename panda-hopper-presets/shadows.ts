import type { SemanticTokens } from "@pandacss/types"

export const semanticShadows: SemanticTokens["shadows"] = {
    1: {
        value: {
            _light: `
                0 0 0 1px rgba(93, 101, 246, 0.05),
                0px 5px 10px rgba(93, 101, 246, 0.1)
                `,
            _dark: `
                0 0 0 1px rgba(93, 101, 246, 0.15),
                0px 5px 10px rgba(93, 101, 246, 0.1)
                `,
        },
    },
    2: {
        value: {
            _light: `
                0 0 0 1px rgba(93, 101, 246, 0.05),
                0px 0.1px 0.3px rgba(93, 101, 246, 0.022),
                0px 0.3px 0.7px rgba(93, 101, 246, 0.032),
                0px 0.6px 1.3px rgba(93, 101, 246, 0.04),
                0px 1.1px 2.2px rgba(93, 101, 246, 0.048),
                0px 2.1px 4.2px rgba(93, 101, 246, 0.058),
                0px 5px 10px rgba(93, 101, 246, 0.08);
                `,
            _dark: `
                0 0 0 1px rgba(93, 101, 246, 0.15),
                0px 0.1px 0.3px rgba(93, 101, 246, 0.022),
                0px 0.3px 0.7px rgba(93, 101, 246, 0.032),
                0px 0.6px 1.3px rgba(93, 101, 246, 0.04),
                0px 1.1px 2.2px rgba(93, 101, 246, 0.048),
                0px 2.1px 4.2px rgba(93, 101, 246, 0.058),
                0px 5px 10px rgba(93, 101, 246, 0.08);
                `,
        },
    },
    "alias-lifted": { value: "{shadows.1}" },
    "alias-floating": { value: "{shadows.2}" },
}