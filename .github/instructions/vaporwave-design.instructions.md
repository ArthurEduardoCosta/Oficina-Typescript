---
name: vaporwave-design
description: Design guide for the Bingo Mixer's vaporwave sunset aesthetic. Follow these principles when creating or modifying components, styling, and visual effects.
applyTo: ["src/components/**/*.tsx", "src/index.css"]
---

# Vaporwave Sunset Design Guide

## Aesthetic Philosophy

The Bingo Mixer uses a **classic vaporwave aesthetic** with a dark, cyberpunk-inspired foundation layered with neon accents and smooth gradients. This creates a nostalgic 80s-90s retro-futuristic atmosphere perfect for a social mixer game.

### Core Principles
- **Dark Foundation**: Navy/purple gradients establish depth and mood
- **Neon Accents**: Hot pink and cyan provide electric, eye-catching highlights
- **Gradient Emphasis**: Text and interactive elements use gradient colors for visual interest
- **Smooth Transitions**: All color changes animate smoothly for immersion
- **High Contrast**: Dark backgrounds ensure light text/accents remain readable

---

## Color Palette

All colors are defined as Tailwind theme variables in `src/index.css`. **Use Tailwind classes only**—never hardcode hex values in components.

### Theme Variables (in `src/index.css`)

```css
@theme {
  --color-accent: #FF10F0;           /* Hot Pink - Primary buttons & accents */
  --color-accent-light: #FF69F0;     /* Light Pink - Hover states */
  --color-marked: #00FFFF;           /* Cyan - Marked/selected squares */
  --color-marked-border: #00D4FF;    /* Bright Cyan - Active borders */
  --color-bingo: #FF1493;            /* Deep Magenta - Winning line highlights */
}
```

### Extended Color Usage

| Element | Tailwind Class | Purpose |
|---------|---|---|
| Dark background base | `bg-slate-900`, `from-[#1a0033]` | Container backgrounds |
| Dark purple gradient | `via-purple-950` | Mid-gradient transitions |
| Black fallback | `to-black` | Gradient end |
| Cyan text/border | `text-cyan-300`, `border-cyan-500` | Secondary highlights, instructions |
| Pink text/border | `text-pink-400`, `border-pink-500` | Primary highlights, buttons |
| Semi-transparent dark | `bg-slate-800`, `bg-purple-950/60` | Cards, overlays |
| Gradient directions | `bg-gradient-to-br`, `from-pink-600 to-purple-600` | Visual flow & emphasis |

---

## Component Styling Patterns

### 1. **Backgrounds & Containers**

**Primary containers** (StartScreen, GameScreen):
```tsx
// Dark gradient background with depth
className="bg-gradient-to-br from-[#1a0033] via-purple-950 to-black"
```

**Secondary containers** (cards, modals):
```tsx
// Semi-transparent dark with subtle border
className="bg-purple-950/60 backdrop-blur rounded-lg border border-pink-500/30"
```

**Board/grid containers**:
```tsx
// Dark base with purple border accent
className="bg-slate-900/50 border border-purple-500/30"
```

### 2. **Text & Headings**

**Main titles** (use gradient for emphasis):
```tsx
className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300"
```

**Subtext & instructions** (readable cyan):
```tsx
className="text-cyan-300"
```

**Accent text** (primary highlights):
```tsx
className="text-pink-400"
```

### 3. **Interactive Elements (Buttons)**

**Primary buttons** (CTA):
```tsx
className="bg-gradient-to-r from-pink-600 to-pink-500 text-white active:from-pink-700 active:to-pink-600"
```

**Secondary buttons** (navigation):
```tsx
className="text-cyan-300 active:bg-purple-800"
```

### 4. **Bingo Square States**

**Unmarked squares** (default):
```tsx
stateClasses: 'bg-slate-800 border-slate-600 text-slate-300 active:bg-slate-700'
```

**Marked squares** (selected):
```tsx
stateClasses: 'bg-cyan-400/20 border-cyan-400 text-cyan-200'
```

**Winning squares** (5-in-a-row):
```tsx
stateClasses: 'bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 text-white'
```

### 5. **Headers & Banners**

**Page headers**:
```tsx
className="bg-gradient-to-r from-purple-900 to-pink-900 border-b border-cyan-500/50"
```

**Alert/status banners**:
```tsx
className="bg-gradient-to-r from-pink-600 to-purple-600 text-white"
```

### 6. **Modals & Overlays**

**Modal backdrop**:
```tsx
className="fixed inset-0 bg-black/70"
```

**Modal card**:
```tsx
className="bg-gradient-to-br from-purple-900 to-purple-950 border border-pink-500/50 rounded-xl"
```

---

## Gradient Patterns

### Direction & Effect

| Pattern | Tailwind Classes | Use Case |
|---------|---|---|
| Diagonal (top-left → bottom-right) | `bg-gradient-to-br from-[#1a0033] via-purple-950 to-black` | Full-page backgrounds, sunset effect |
| Horizontal (left → right) | `bg-gradient-to-r from-pink-600 to-purple-600` | Headers, banners, emphasis |
| Radial | `bg-gradient-radial` | Future: spotlight effects |
| Conic | `bg-gradient-conic` | Future: circular UI elements |

### Text Gradients

For important titles and CTAs:
```tsx
bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-300
```

---

## Animation & Transition

### Standard Motion

- **Transitions**: Use `transition-all duration-150` for smooth state changes on interactive elements
- **Hover states**: Buttons brighten (`active:from-pink-700`) or change background (`active:bg-purple-800`)
- **Winning animation**: The modal uses `animate-[bounce_0.5s_ease-out]` for celebration effect

### Guidelines

- ✅ Smooth color transitions between states
- ✅ Staggered reveals for page load (use `animation-delay` for future enhancements)
- ✅ High-impact moments (win animation, modal entrance)
- ❌ Avoid excessive micro-interactions; focus on meaningful motion

---

## Implementation Checklist

When **creating new components**, ensure:

- [ ] All colors use Tailwind classes (no hex hardcoding)
- [ ] Dark backgrounds use appropriate slate/purple shades
- [ ] Text is white or cyan for readability on dark backgrounds
- [ ] Primary CTAs use pink gradient or pink solid
- [ ] Borders use cyan or pink with reduced opacity (e.g., `border-pink-500/30`)
- [ ] Gradients follow project patterns (diagonal for backgrounds, horizontal for headers)
- [ ] Hover/active states brighten or darken appropriately
- [ ] Modal overlays use `bg-black/70` base
- [ ] Components have smooth `transition-all` for color changes

---

## Extending the Palette

### Adding New Colors

If new design needs arise, add to `@theme` in `src/index.css`:

```css
@theme {
  --color-new-accent: #FF00FF;  /* Magenta variation */
}
```

Then use as: `bg-new-accent`, `text-new-accent`, etc.

### Future Theme Support

To support multiple themes (vaporwave, minimalist, etc.) in the future:

1. Create theme-specific CSS files: `src/themes/vaporwave.css`, `src/themes/[future].css`
2. Use CSS variables with theme namespaces
3. Implement theme switcher in App.tsx
4. Document each theme in separate instruction file

**Current state**: Single vaporwave theme applied project-wide. Refactoring for theme switching is optional if needed later.

---

## Common Pitfalls to Avoid

- ❌ Using gray/white/green from the original design—replace with vaporwave palette
- ❌ Hardcoding hex colors—always use Tailwind classes from `@theme`
- ❌ Light backgrounds on dark text—maintain dark base with light text/accents
- ❌ Flat colors without gradients—use gradients for emphasis and visual interest
- ❌ Text on dark backgrounds without sufficient contrast—test with Wave or browser tools
- ❌ Disabling transitions—keep `transition-all` for smooth interactions

---

## Example: New Component with Vaporwave

```tsx
export function NewComponent() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-black p-6 rounded-lg border border-cyan-500/30">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 mb-4">
        New Feature
      </h2>
      <p className="text-cyan-200 mb-6">Description text in readable cyan</p>
      <button className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg active:from-pink-700 active:to-pink-600 transition-all">
        Action
      </button>
    </div>
  );
}
```

---

## References

- **Theme variables**: `src/index.css` (@theme block)
- **Tailwind v4 docs**: Use `@theme`, CSS variables, native opacity
- **Component examples**: See `src/components/` for BingoSquare, BingoModal, GameScreen styling patterns
- **Color palette inspiration**: Classic vaporwave aesthetic (80s-90s cyberpunk, neon on dark backgrounds)

---

## Questions or Updates?

If new design needs arise or vaporwave aesthetic needs refinement:
1. Update color palette in `src/index.css`
2. Update this guide with new patterns
3. Ensure all component files follow updated patterns
4. Test on multiple screen sizes for gradient/text rendering
