/* eslint-disable */
export type Token = "colors.neutral-1" | "colors.neutral-2" | "colors.neutral-3" | "colors.neutral-4" | "colors.neutral-5" | "colors.neutral-6" | "colors.neutral-7" | "colors.neutral-8" | "colors.neutral-9" | "colors.neutral-10" | "colors.green-1" | "colors.green-2" | "colors.green-3" | "colors.green-4" | "colors.green-5" | "colors.green-6" | "colors.green-7" | "colors.green-8" | "colors.green-9" | "colors.green-10" | "colors.orange-1" | "colors.orange-2" | "colors.orange-3" | "colors.orange-4" | "colors.orange-5" | "colors.orange-6" | "colors.orange-7" | "colors.orange-8" | "colors.orange-9" | "colors.orange-10" | "colors.purple-1" | "colors.purple-2" | "colors.purple-3" | "colors.purple-4" | "colors.purple-5" | "colors.purple-6" | "colors.purple-7" | "colors.purple-8" | "colors.purple-9" | "colors.purple-10" | "colors.success-1" | "colors.success-2" | "colors.success-3" | "colors.success-4" | "colors.success-5" | "colors.success-6" | "colors.success-7" | "colors.success-8" | "colors.success-9" | "colors.success-10" | "colors.warning-1" | "colors.warning-2" | "colors.warning-3" | "colors.warning-4" | "colors.warning-5" | "colors.warning-6" | "colors.warning-7" | "colors.warning-8" | "colors.warning-9" | "colors.warning-10" | "colors.alert-1" | "colors.alert-2" | "colors.alert-3" | "colors.alert-4" | "colors.alert-5" | "colors.alert-6" | "colors.alert-7" | "colors.alert-8" | "colors.alert-9" | "colors.alert-10" | "colors.white" | "colors.black" | "colors.gray" | "radii.1" | "radii.2" | "radii.3" | "radii.4" | "radii.pill" | "radii.circular" | "fontSizes.1" | "fontSizes.2" | "fontSizes.3" | "fontSizes.4" | "fontSizes.5" | "fontSizes.6" | "fontSizes.7" | "fontSizes.8" | "fontSizes.9" | "fontSizes.10" | "fontSizes.11" | "fontWeights.400" | "fontWeights.500" | "fontWeights.600" | "lineHeights.1" | "lineHeights.2" | "lineHeights.3" | "lineHeights.4" | "lineHeights.5" | "lineHeights.6" | "fonts.interphases" | "spacing.1" | "spacing.2" | "spacing.3" | "spacing.4" | "spacing.5" | "spacing.6" | "spacing.7" | "spacing.8" | "spacing.9" | "spacing.10" | "spacing.11" | "spacing.12" | "sizes.1" | "sizes.2" | "sizes.3" | "sizes.4" | "sizes.5" | "sizes.6" | "sizes.7" | "sizes.8" | "sizes.9" | "sizes.10" | "sizes.11" | "sizes.12" | "sizes.13" | "sizes.14" | "sizes.15" | "sizes.16" | "sizes.17" | "sizes.18" | "sizes.breakpoint-xs" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "easings.productive" | "easings.focus" | "easings.expressive" | "durations.1" | "durations.2" | "durations.3" | "durations.4" | "durations.5" | "breakpoints.xs" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "colors.accent-1" | "colors.accent-2" | "colors.accent-3" | "colors.accent-4" | "colors.accent-5" | "colors.accent-6" | "colors.accent-7" | "colors.accent-8" | "colors.accent-9" | "colors.accent-10" | "colors.bg-alias-body" | "colors.bg-alias-surface" | "colors.bg-alias-soft-break" | "colors.bg-alias-mid-break" | "colors.bg-alias-hard-break" | "colors.bg-alias-basic" | "colors.bg-alias-basic-hover" | "colors.bg-alias-basic-active" | "colors.bg-alias-basic-transparent" | "colors.bg-alias-basic-transparent-hover" | "colors.bg-alias-basic-transparent-active" | "colors.bg-alias-static-white" | "colors.bg-alias-grey-hover" | "colors.bg-alias-grey-active" | "colors.bg-alias-accent" | "colors.bg-alias-accent-hover" | "colors.bg-alias-accent-active" | "colors.bg-alias-accent-faint" | "colors.bg-alias-accent-light" | "colors.bg-alias-accent-transparent" | "colors.bg-alias-accent-transparent-hover" | "colors.bg-alias-accent-transparent-active" | "colors.bg-alias-alert" | "colors.bg-alias-alert-hover" | "colors.bg-alias-alert-active" | "colors.bg-alias-alert-faint" | "colors.bg-alias-alert-light" | "colors.bg-alias-alert-transparent" | "colors.bg-alias-alert-transparent-hover" | "colors.bg-alias-alert-transparent-active" | "colors.bg-alias-warning" | "shadows.1" | "shadows.2" | "shadows.alias-lifted" | "shadows.alias-floating" | "spacing.-1" | "spacing.-2" | "spacing.-3" | "spacing.-4" | "spacing.-5" | "spacing.-6" | "spacing.-7" | "spacing.-8" | "spacing.-9" | "spacing.-10" | "spacing.-11" | "spacing.-12"

export type ColorToken = "neutral-1" | "neutral-2" | "neutral-3" | "neutral-4" | "neutral-5" | "neutral-6" | "neutral-7" | "neutral-8" | "neutral-9" | "neutral-10" | "green-1" | "green-2" | "green-3" | "green-4" | "green-5" | "green-6" | "green-7" | "green-8" | "green-9" | "green-10" | "orange-1" | "orange-2" | "orange-3" | "orange-4" | "orange-5" | "orange-6" | "orange-7" | "orange-8" | "orange-9" | "orange-10" | "purple-1" | "purple-2" | "purple-3" | "purple-4" | "purple-5" | "purple-6" | "purple-7" | "purple-8" | "purple-9" | "purple-10" | "success-1" | "success-2" | "success-3" | "success-4" | "success-5" | "success-6" | "success-7" | "success-8" | "success-9" | "success-10" | "warning-1" | "warning-2" | "warning-3" | "warning-4" | "warning-5" | "warning-6" | "warning-7" | "warning-8" | "warning-9" | "warning-10" | "alert-1" | "alert-2" | "alert-3" | "alert-4" | "alert-5" | "alert-6" | "alert-7" | "alert-8" | "alert-9" | "alert-10" | "white" | "black" | "gray" | "accent-1" | "accent-2" | "accent-3" | "accent-4" | "accent-5" | "accent-6" | "accent-7" | "accent-8" | "accent-9" | "accent-10" | "bg-alias-body" | "bg-alias-surface" | "bg-alias-soft-break" | "bg-alias-mid-break" | "bg-alias-hard-break" | "bg-alias-basic" | "bg-alias-basic-hover" | "bg-alias-basic-active" | "bg-alias-basic-transparent" | "bg-alias-basic-transparent-hover" | "bg-alias-basic-transparent-active" | "bg-alias-static-white" | "bg-alias-grey-hover" | "bg-alias-grey-active" | "bg-alias-accent" | "bg-alias-accent-hover" | "bg-alias-accent-active" | "bg-alias-accent-faint" | "bg-alias-accent-light" | "bg-alias-accent-transparent" | "bg-alias-accent-transparent-hover" | "bg-alias-accent-transparent-active" | "bg-alias-alert" | "bg-alias-alert-hover" | "bg-alias-alert-active" | "bg-alias-alert-faint" | "bg-alias-alert-light" | "bg-alias-alert-transparent" | "bg-alias-alert-transparent-hover" | "bg-alias-alert-transparent-active" | "bg-alias-warning"

export type RadiusToken = "1" | "2" | "3" | "4" | "pill" | "circular"

export type FontSizeToken = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11"

export type FontWeightToken = "400" | "500" | "600"

export type LineHeightToken = "1" | "2" | "3" | "4" | "5" | "6"

export type FontToken = "interphases"

export type SpacingToken = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12"

export type SizeToken = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "breakpoint-xs" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl"

export type EasingToken = "productive" | "focus" | "expressive"

export type DurationToken = "1" | "2" | "3" | "4" | "5"

export type BreakpointToken = "xs" | "sm" | "md" | "lg" | "xl"

export type ShadowToken = "1" | "2" | "alias-lifted" | "alias-floating"

export type Tokens = {
		colors: ColorToken
		radii: RadiusToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		lineHeights: LineHeightToken
		fonts: FontToken
		spacing: SpacingToken
		sizes: SizeToken
		easings: EasingToken
		durations: DurationToken
		breakpoints: BreakpointToken
		shadows: ShadowToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"