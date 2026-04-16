# Design System Strategy: Clinical Precision & Elite Institutionality

## 1. Overview & Creative North Star: "The Clinical Curator"
The Creative North Star for this design system is **"The Clinical Curator."** In the world of elite orthopedics, we move away from the chaotic, cluttered visuals of "general" medicine and toward a high-end, editorial experience. This system rejects the standard medical template in favor of an institutional aesthetic that feels both avant-garde and deeply trustworthy.

The design breaks the "template" look through **Architectural Asymmetry**. We utilize generous, intentional whitespace (breathing room) and large-scale editorial typography to frame high-quality 3D anatomical renders. By overlapping typography with medical imagery and using a sophisticated layering of whites and silvers, we create a digital environment that feels like a prestigious private surgical suite: sterile, precise, and technologically superior.

## 2. Colors & Surface Philosophy
The palette is rooted in deep institutional authority and clinical purity.

### Color Tokens
- **Primary (Deep Navy):** `#031632` / `primary-container`: `#1a2b48`. This is our "Ink" – used for authoritative headers and deep-focus backgrounds.
- **Surface (Medical White):** `#f7f9fb`. The baseline for our environment.
- **Tertiary (Success Green):** `#00a673` (on-tertiary-container). Used sparingly as a "surgical precision" accent for CTAs.

### The "No-Line" Rule
To maintain a premium, modern feel, **1px solid borders are prohibited for sectioning.** Conventional lines create visual "noise" that feels dated. Instead, define boundaries through:
- **Background Shifts:** Place a `surface-container-low` section against a `surface` background.
- **Tonal Transitions:** Use soft shifts from `#F8FAFC` to `#E2E8F0` to signal a change in content without hard breaks.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine medical paper or frosted glass.
- **Base Layer:** `surface` (#f7f9fb).
- **Nested Content:** Place `surface-container-lowest` (#ffffff) cards on top of `surface-container-low` sections to create a soft, natural lift.
- **The "Glass & Gradient" Rule:** For floating navigation or surgical stat cards, use Glassmorphism. Apply `surface` at 70% opacity with a 20px backdrop-blur.

### Signature Textures
Avoid flat backgrounds for large areas. Apply a subtle linear gradient to the Hero background: `primary` (#031632) to `primary-container` (#1a2b48) at a 135-degree angle. This adds "soul" and depth, mimicking the lighting of a professional photo studio.

## 3. Typography: The Authority Scale
We use a dual-sans-serif approach to balance modern technology with institutional tradition.

- **Display & Headlines (Manrope):** Chosen for its geometric precision. Use `display-lg` (3.5rem) for hero statements with tight tracking (-0.02em) to evoke a premium, editorial feel.
- **Body & Labels (Inter):** The workhorse of clinical readability. Inter's tall x-height ensures legibility for complex medical terminology.
- **The Hierarchy Rule:** Headlines should be high-contrast (Primary #031632) against Body text (Secondary #595f66). This "color weight" ensures the user's eye gravitates toward the most authoritative information first.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often too "heavy" for a clean medical aesthetic. We use **Tonal Layering** to convey importance.

- **The Layering Principle:** Depth is achieved by stacking. A card in `surface-container-lowest` (pure white) sits on a `surface-container-high` section to provide focus without a single drop shadow.
- **Ambient Shadows:** Where floating elements (like 3D anatomical renders) require a "lift," use a shadow with a blur of 40px and 4% opacity, tinted with the `on-surface` color. It should feel like ambient light in a bright room, not a digital effect.
- **The "Ghost Border" Fallback:** If a container needs definition for accessibility, use a "Ghost Border": `outline-variant` (#c5c6ce) at 15% opacity. It should be felt, not seen.

## 5. Components

### Buttons (Surgical Precision)
- **Primary:** `primary-container` background with `on-primary` text. Corners: `md` (0.375rem). No shadow; use a 2px inset hover state for a "pressed" feel.
- **CTA (Success Green):** Used only for "Book Consultation" or "Emergency Contact." Use a subtle gradient from `#10B981` to `#059669`.

### Cards & Lists
- **Rule:** Forbid divider lines.
- **Implementation:** Use vertical white space from the spacing scale (e.g., 32px gaps) or use a `surface-variant` background for every second list item to create a "zebra" effect that is sophisticated, not "table-like."

### Input Fields
- **Style:** "Floating Label" style. Background: `surface-container-lowest`.
- **Active State:** A 1px "Ghost Border" in `primary` only when focused. This keeps the form looking sterile and clean until interaction is required.

### Specialized Component: The "Anatomical Spotlight"
A custom container designed to house 3D renders. It uses a `surface-bright` circular background with a `backdrop-blur` and a `primary` outline at 5% opacity to "anchor" the anatomical model to the page.

## 6. Do's and Don'ts

### Do:
- **Use Large Margins:** Ensure the "Elite" feel by giving content 2x the standard padding.
- **Embrace Asymmetry:** Place an anatomical render off-center, overlapping a headline to break the "boxed" feel.
- **Use "On-Surface-Variant" for captions:** It provides a softer contrast that feels more sophisticated than pure black.

### Don't:
- **Don't use 100% Black:** It is too harsh for a medical environment. Use `primary` (#031632) for your darkest tones.
- **Don't use Rounded-Full (Pills):** Except for small badges. For buttons and cards, stick to `md` (0.375rem) to maintain an institutional, structured look.
- **Don't use stock iconography:** Use custom, thin-stroke (1.5px) medical icons that match the `outline` token.
