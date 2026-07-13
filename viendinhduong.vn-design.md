---
version: alpha
name: UDN Academic Portal
description: A bright, institutional university portal with strong blue navigation, golden accents, and dense news-driven content.
colors:
  primary: "#0E4E86"
  primary-strong: "#003C6A"
  tertiary: "#2B7BBB"
  neutral: "#504E4E"
  surface: "#FFFFFF"
  surface-muted: "#F5F7FA"
  border: "#E5E7EB"
  on-surface: "#1F2937"
  on-surface-muted: "#6B7280"
  inverse-surface: "#0E4E86"
  inverse-on-surface: "#FFFFFF"
  error: "#D64545"
typography:
  headline-display:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: 0px
  headline-lg:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: 0px
  headline-md:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0px
  headline-sm:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: "20.4px"
    letterSpacing: "0.85px"
  body-lg:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "18.75px"
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  label-lg:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "18.75px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0px
  label-md:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  label-sm:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  caption:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
  overline:
    fontFamily: "UTM-AVO, UTM Helvetlns"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "16px"
  md: "24px"
  lg: "36px"
  xl: "70px"
  gutter: "24px"
  margin: "16px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#E8BE18"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
    height: "40px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
    height: "40px"
  chip:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  navbar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-sm}"
    height: "40px"
  section-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  alert-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# UDN Academic Portal

## Overview

The site feels like a formal public institution with a strong academic identity and a practical, news-first structure. It is visually bright, information-dense, and highly navigable, designed for students, staff, researchers, and the general public who need quick access to announcements and university services. The emotional tone is trustworthy and civic-minded rather than playful, with blue and gold reinforcing authority and pride.

## Colors

- **Primary (#0E4E86):** A deep university blue used for the main navigation bar, section headers, and high-trust interface elements. It anchors the system and communicates institutional credibility.
- **Primary strong (#003C6A):** A darker navy variant for emphasis, depth, and active states when stronger contrast is needed.
- **Secondary (#F6CE2E):** A bright golden yellow used as the signature accent, especially in the logo area, primary buttons, and callout details. It adds energy and ceremonial prestige.
- **Tertiary (#2B7BBB):** A lighter blue support tone for links, banners, and secondary accents that need to stay within the university palette.
- **Neutral (#504E4E):** The main body text color, chosen for readable, slightly softened contrast rather than pure black.
- **Surface (#FFFFFF):** The dominant background for content cards, header areas, and the overall page canvas.
- **Surface muted (#F5F7FA):** A subtle cool background for gentle separation between blocks without heavy visual weight.
- **Border (#E5E7EB):** A light divider color used on cards, inputs, and content panels to maintain structure.
- **On-surface (#1F2937):** A stronger near-black for high-priority text when standard body gray is not enough.
- **On-surface muted (#6B7280):** Supporting text, metadata, and timestamps.
- **Inverse surface (#0E4E86) / Inverse on-surface (#FFFFFF):** Used together in dark navigation or overlay contexts where white text sits on blue.

## Typography

UTM-AVO and UTM Helvetlns are the core type families, matching the site’s utilitarian and modern institutional feel. Headings are bold and compact, with clear size steps that support scannable news hierarchy across crowded pages. Body text stays plain and highly legible, while labels and navigation items rely on stronger weight and occasional uppercase treatment for emphasis.

- **Headline display, lg, md:** Large news and hero headlines; they carry the page’s most prominent messaging and should remain bold, concise, and tightly set.
- **Headline sm:** Used for smaller section titles and prominent labels; the slightly wider tracking helps it feel crisp in navigation-like contexts.
- **Body lg, md, sm:** Standard paragraph, summary, and metadata text. Body sizing should remain conservative and readable, since the layout is content-heavy.
- **Label lg, md, sm:** Buttons, nav items, utility links, and interface chrome. These often appear compact, strong, and visually efficient.
- **Caption and overline:** Dates, secondary annotations, and small supporting text. Overline styling can be used for uppercase or all-caps utility labels when needed.

## Layout & Spacing

The page uses a fixed, centered content column with wide white margins on the left and right, creating a formal portal feel rather than a fluid editorial canvas. Sections stack vertically with clear separation: a compact utility header, a dense main navigation row, a large hero carousel, then stacked promotional banners and card-based news blocks. The spacing rhythm is conservative and predictable, using 6px, 16px, 24px, 36px, and 70px steps to create structure without wasting space.

Cards and content panels typically use 16px internal padding and 24px gutters between major columns. Section blocks are separated by visible whitespace instead of decorative containers, which keeps the interface readable despite the volume of information. Inputs and buttons stay compact and aligned to the grid, reinforcing the site’s functional, administrative character.

## Elevation & Depth

Depth is understated. The system relies more on contrast, white surfaces, thin borders, and occasional soft shadows than on strong elevation effects. Cards use a light 1px border and, where present, a very subtle shadow to separate them from the white page without feeling heavy.

Overlays in the hero carousel use translucent dark bands to protect text legibility on top of photography. Primary emphasis is created through color blocks, not shadow stacks, which suits the civic and informational tone.

## Shapes

The shape language is restrained and practical, with small corner radii used for modern softness but no decorative rounding. Interactive elements and cards favor 4px to 8px radii, while badges and chips can move to full pill shapes when they need to feel more compact and friendly. Overall, the system feels architectural and orderly rather than expressive.

## Components

### Buttons

- **Primary buttons (`button-primary`):** Yellow-filled CTAs with dark text, 4px radius, and generous horizontal padding. They should feel prominent but not oversized, with a minimum 40px touch height.
- **Secondary buttons (`button-secondary`):** Transparent or lightly outlined actions with neutral text. Use these for less prominent actions beside the primary CTA.
- **Link buttons (`button-link`):** White or inverse text with no border and no padding, suitable for top utility links and narrow navigation treatments.
- Hover states should deepen or slightly darken the accent rather than introduce new hues. Keep button typography bold enough to read clearly in dense navigation and banner contexts.

### Cards

Cards (`card`) are white, bordered, and lightly padded. Use them for news lists, announcements, and content modules. Keep internal spacing tight and structured; image thumbnails, dates, and summaries should align cleanly in rows or short stacks.

### Inputs

Inputs are compact, white, and lightly bordered with rounded corners. The search field in the header should remain understated, with clear placeholder text and a simple icon treatment. Prefer 40px height for consistency with buttons and nav controls.

### Navigation

The main navigation bar uses the primary blue background with white, bold, compact labels. Items are arranged in a single dense row, emphasizing speed and clarity over spaciousness. The home icon and utility links should remain visually distinct from the core nav items.

### Banners and Hero Areas

Promotional banners use strong image backgrounds with blue overlays and high-contrast white text. These areas can be visually bolder than the rest of the interface, but they should still stay within the blue-gold institutional palette. Hero carousels should include subtle pagination indicators and readable caption overlays.

### Chips and Status Labels

Chips should be small, rounded, and mostly tonal rather than saturated. Use them for categories, filters, and quick metadata. They should feel like compact utilities, not decorative pills.

### Lists

News and announcement lists should prioritize readability: thumbnail, title, and date/metadata in a clean vertical rhythm. Use thin separators or card boundaries rather than heavy dividers. Keep list items aligned and avoid dense blocks of unbroken text.

## Do's and Don'ts

- Do use the blue and gold palette to reinforce the university’s identity.
- Do keep headings bold, compact, and highly scannable.
- Do preserve generous white space around the main content column even if the page is information-dense.
- Do use thin borders and subtle shadows instead of heavy depth effects.
- Don't introduce playful gradients, neon colors, or soft pastel branding.
- Don't make cards overly rounded or pill-like; keep the interface grounded and institutional.
- Don't use long paragraph-heavy blocks without clear typographic hierarchy and spacing.
- Don't replace the strong blue navigation with low-contrast or muted alternatives.
