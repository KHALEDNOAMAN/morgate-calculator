---
name: Monolithic Finance
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is centered on a **Premium Minimalist** aesthetic, tailored for high-stakes financial decision-making. By utilizing a stark black-and-white palette, the interface moves away from traditional "bank blue" toward a high-end, editorial feel that suggests precision, exclusivity, and clarity.

The emotional response should be one of "effortless control." The UI stays out of the way, allowing the data and the calculations to take center stage. There are no unnecessary decorations; every line and value is purposeful. The target audience is the sophisticated borrower who values efficiency and a modern, tech-forward approach to mortgage planning.

## Colors

The color palette is strictly monochromatic to emphasize hierarchy through contrast rather than hue.

- **Background (#000000):** Pure black is used for the base layer to create an infinite depth effect and ensure maximum OLED efficiency.
- **Surface/Inputs (#1A1A1A):** A deep charcoal used for interactive containers and input backgrounds, providing enough contrast against the pure black background to define boundaries.
- **Primary Text (#FFFFFF):** Reserved for high-priority information, headers, and active states.
- **Secondary Text (#A1A1A1):** Used for labels, descriptions, and deactivated states to reduce visual noise.
- **Accents (#FFFFFF):** Pure white is utilized for primary actions and interactive handles, ensuring they are the most prominent elements on the screen.

## Typography

This design system utilizes **Inter** for its systematic, neutral, and highly legible characteristics. The type scale is designed to handle dense financial data while maintaining an editorial feel.

- **Numbers:** All numerical data in the calculator should use tabular lining figures to ensure columns of numbers align perfectly.
- **Hierarchy:** Use `label-caps` for input labels and `display` for the final calculated monthly payment to create a clear visual path.
- **Uppercase:** Strategic use of uppercase for buttons and small labels reinforces the "professional/institutional" vibe.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a centered, tool-like feel, while transitioning to a **Fluid Grid** for mobile devices.

- **Desktop:** A 12-column grid with a max-width of 1100px. The calculator inputs typically occupy 7 columns, while the results summary occupies a "sticky" 4-column sidebar.
- **Mobile:** A single-column layout with 16px side margins. Inputs are stacked vertically with 24px (lg) spacing between groups.
- **Rhythm:** An 8px linear scale is used for all internal component spacing to maintain a tight, mathematical feel.

## Elevation & Depth

In a pure black environment, depth is achieved through **Tonal Layers** rather than shadows.

- **Level 0 (Background):** #000000.
- **Level 1 (Surface):** #1A1A1A. Used for input fields and cards.
- **Level 2 (Hover/Active):** #262626. Used to indicate interactivity on surfaces.
- **Outlines:** Subtle 1px borders using #333333 are used to define input boundaries without creating visual clutter.
- **Interactions:** Use a soft "glow" (0px 0px 12px rgba(255,255,255, 0.15)) only for primary action buttons on hover to suggest a digital luminescence.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness. This subtle rounding softens the harshness of the high-contrast palette while maintaining a precise, architectural feel. 

- **Inputs & Buttons:** Use the standard 4px (0.25rem) radius.
- **Tab Selectors:** Use the standard 4px radius for the container and the active segment.
- **Sliders:** The thumb (handle) should be a perfect circle (pill-shaped) to distinguish it as the primary touch point.

## Components

### Range Sliders
- **Track:** 4px height. Inactive track is #333333; active (left side) track is #FFFFFF.
- **Handle:** 20px diameter solid #FFFFFF circle. On hover, add a 4px semi-transparent white ring around the handle.

### Input Fields
- **Style:** Outlined.
- **Container:** #1A1A1A background with a #333333 border.
- **Active State:** Border transitions to #FFFFFF.
- **Label:** Positioned above the input using `label-caps` typography in #A1A1A1.

### Buttons
- **Primary:** Solid #FFFFFF background with #000000 text. Use `button` typography style (Uppercase).
- **Secondary/Ghost:** Transparent background with #FFFFFF border and text.
- **Hover State:** Primary buttons should reduce opacity to 90% or exhibit a subtle white outer glow.

### Tab Selectors (Residency Status)
- **Container:** Full width, #1A1A1A background.
- **Active Tab:** #FFFFFF background with #000000 text.
- **Inactive Tab:** #1A1A1A background with #A1A1A1 text.
- **Transition:** Use a horizontal sliding animation for the active state indicator.

### Results Card
- A distinct area (often a sidebar) with a 1px #333333 border.
- The "Monthly Payment" figure should be the largest typographic element on the page using `display` tokens.