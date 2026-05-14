---
name: vaporwave-design
description: Design guide for the Bingo Mixer's vaporwave sunset aesthetic. Follow these principles when creating or modifying components, styling, and visual effects.
applyTo: ["src/components/**/*.tsx", "src/index.css"]
---

# Vaporwave Sunset Design Guide

## 🚀 Quick Start

**For new components**, copy this template and customize:
```tsx
// ALWAYS use these Tailwind classes, never hex codes
className="bg-gradient-to-br from-purple-900 to-black p-6 rounded-lg border border-cyan-500/30"
```

**NEVER do this:**
- ❌ `style={{ backgroundColor: '#FF10F0' }}` — Use Tailwind classes
- ❌ `className="bg-gray-100"` — Use dark colors (slate/purple)
- ❌ `className="text-gray-700"` — Use cyan/pink text

---

## Aesthetic Philosophy

The Bingo Mixer uses a **classic vaporwave aesthetic** with a dark, cyberpunk-inspired foundation layered with neon accents and smooth gradients. This creates a nostalgic 80s-90s retro-futuristic atmosphere perfect for a social mixer game.

### Core Principles
- **Dark Foundation**: Navy/purple gradients establish depth and mood
- **Neon Accents**: Hot pink (#FF10F0) and cyan (#00FFFF) provide electric highlights
- **Gradient Emphasis**: Text and interactive elements use gradients for visual pop
- **Smooth Transitions**: All color changes use `transition-all duration-150`
- **High Contrast**: Dark backgrounds ensure light text remains readable (WCAG AA minimum)

---

## Color Palette Reference

**All colors are defined in `src/index.css`.** See [Theme Variables Below](#theme-variables-src/indexcss).

### Theme Variables (in `src/index.css`)

```css
@theme {
  --color-accent: #FF10F0;           /* Hot Pink - Primary buttons & accents */
  --color-accent-light: #FF69F0;     /* Light Pink - Hover states */
  --color-marked: #00FFFF;           /* Cyan - Marked/selected squares */
  --color-marked-border: #00D4FF;    /* Bright Cyan - Active borders */
  --color-bingo: #FF1493;            /* Deep Magenta - Winning highlights */
}
```

### Color Usage Quick Reference

| Use Case | Tailwind Class | Example |
|---|---|---|
| **Main background** | `bg-gradient-to-br from-[#1a0033] via-purple-950 to-black` | [StartScreen.tsx](src/components/StartScreen.tsx#L7) |
| **Page header** | `bg-gradient-to-r from-purple-900 to-pink-900` | [GameScreen.tsx](src/components/GameScreen.tsx#L19) |
| **Main title** | `text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300` | [StartScreen.tsx](src/components/StartScreen.tsx#L10) |
| **Instruction text** | `text-cyan-300` | [GameScreen.tsx](src/components/GameScreen.tsx#L26) |
| **Primary button** | `bg-gradient-to-r from-pink-600 to-pink-500 active:from-pink-700` | [StartScreen.tsx](src/components/StartScreen.tsx#L23) |
| **Unmarked square** | `bg-slate-800 border-slate-600 text-slate-300` | [BingoSquare.tsx](src/components/BingoSquare.tsx#L10) |
| **Marked square** | `bg-cyan-400/20 border-cyan-400 text-cyan-200` | [BingoSquare.tsx](src/components/BingoSquare.tsx#L12) |
| **Winning square** | `bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400` | [BingoSquare.tsx](src/components/BingoSquare.tsx#L14) |
| **Modal card** | `bg-gradient-to-br from-purple-900 to-purple-950 border-pink-500/50` | [BingoModal.tsx](src/components/BingoModal.tsx#L5) |
| **Card border** | `border border-cyan-500/30` or `border-pink-500/30` | [BingoBoard.tsx](src/components/BingoBoard.tsx#L11) |

---

## Component Styling Patterns

### 1. Full-Page Backgrounds

**Pattern:** Dark gradient with depth (top-left dark → bottom-right black)

```tsx
// StartScreen & GameScreen use this
<div className="bg-gradient-to-br from-[#1a0033] via-purple-950 to-black min-h-full">
```

**Why:** Creates atmospheric sunset/cyberpunk mood instantly

---

### 2. Cards & Containers

**Pattern:** Semi-transparent dark with borders and backdrop blur

```tsx
// How to style a container/card:
<div className="bg-purple-950/60 backdrop-blur rounded-lg p-6 border border-pink-500/30">
  {/* content */}
</div>
```

**Real example** — [StartScreen.tsx L14](src/components/StartScreen.tsx#L14):
```tsx
<div className="bg-purple-950/60 backdrop-blur rounded-lg p-6 shadow-lg border border-pink-500/30">
```

---

### 3. Text & Headings

**Main titles** (always use gradient):
```tsx
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300">
  Bingo Mixer
</h1>
```

**Secondary text** (always use cyan):
```tsx
<p className="text-cyan-300">Find your people!</p>
```

**DO NOT use:**
- ❌ `text-gray-900` — Use `text-cyan-300` or white
- ❌ `text-gray-600` — Use `text-cyan-200` for muted

---

### 4. Interactive Elements (Buttons)

**Primary buttons** (CTA — "Start Game", "Keep Playing"):
```tsx
<button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg active:from-pink-700 active:to-pink-600 transition-all">
  Action
</button>
```

**Secondary buttons** (Back, navigation):
```tsx
<button className="text-cyan-300 px-3 py-1.5 rounded active:bg-purple-800">
  ← Back
</button>
```

---

### 5. Bingo Square States (Most Important!)

Location: [src/components/BingoSquare.tsx](src/components/BingoSquare.tsx#L8-L16)

**Template for state-based styling:**
```tsx
const stateClasses = square.isMarked
  ? isWinning
    ? 'bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 text-white'      // 🎉 Winning!
    : 'bg-cyan-400/20 border-cyan-400 text-cyan-200'                                // ✅ Marked
  : 'bg-slate-800 border-slate-600 text-slate-300 active:bg-slate-700';            // ⭕ Default
```

**Visual progression:**
| State | Background | Border | Text | Checkmark |
|---|---|---|---|---|
| **Unmarked** | `bg-slate-800` | `border-slate-600` | `text-slate-300` | — |
| **Marked** | `bg-cyan-400/20` | `border-cyan-400` | `text-cyan-200` | `✓` cyan |
| **Winning** | `bg-gradient from-pink-500 to-pink-600` | `border-pink-400` | `text-white` | — |

---

### 6. Headers & Banners

**Page header** (with gradient):
```tsx
<header className="bg-gradient-to-r from-purple-900 to-pink-900 border-b border-cyan-500/50">
```

**Status banner** (alert/bingo):
```tsx
<div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2">
  🎉 BINGO! You got a line!
</div>
```

---

### 7. Modals & Overlays

**Modal backdrop** (dark overlay):
```tsx
<div className="fixed inset-0 bg-black/70">
```

**Modal card** (gradient with border):
```tsx
<div className="bg-gradient-to-br from-purple-900 to-purple-950 border border-pink-500/50 rounded-xl p-6">
```

**Real example** — [BingoModal.tsx](src/components/BingoModal.tsx)

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

## Animation & Transitions

**ALWAYS include `transition-all duration-150`** on interactive elements:

```tsx
// ✅ CORRECT
<button className="bg-slate-800 active:bg-slate-700 transition-all duration-150">
  Click me
</button>

// ❌ WRONG (no transition — feels broken)
<button className="bg-slate-800 active:bg-slate-700">
  Click me
</button>
```

### Hover/Active States

- **Buttons:** Darken on `active:` (e.g., `active:from-pink-700`)
- **Text buttons:** Change background (e.g., `active:bg-purple-800`)
- **Squares:** Subtle darkening (e.g., `active:bg-slate-700`)

### Animations

```tsx
// Modal entrance animation (already in BingoModal.tsx)
animate-[bounce_0.5s_ease-out]

// Future: page load stagger
animation-delay: 100ms  // Use this for sequential reveals
```

---

## Troubleshooting & Visual Debugging

### Problem: Text is hard to read on dark background

**Cause:** Using gray text (`text-gray-600`, `text-gray-500`)

**Fix:**
```tsx
// ❌ WRONG
<p className="text-gray-600">Instruction text</p>

// ✅ CORRECT
<p className="text-cyan-300">Instruction text</p>
```

---

### Problem: Component looks washed out / not vaporwave

**Cause:** Using default Tailwind colors instead of gradients

**Fix:**
```tsx
// ❌ WRONG
<div className="bg-white p-4">
<div className="bg-gray-100 border border-gray-200">

// ✅ CORRECT
<div className="bg-purple-950/60 backdrop-blur p-4 border border-pink-500/30">
```

---

### Problem: Colors don't match on preview vs. production

**Cause:** Not using `@theme` variables from `src/index.css`

**Fix:** Always use Tailwind class names, never hex values in JSX:
```tsx
// ❌ WRONG
style={{ color: '#FF10F0' }}

// ✅ CORRECT
className="text-accent"  // Maps to #FF10F0 via @theme
```

---

## Accessibility Checklist

When styling components:

- [ ] Text contrast ratio ≥ 4.5:1 (WCAG AA) — test with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ ] Don't use color alone to convey information — add text/icons (e.g., ✓ checkmark for marked squares)
- [ ] Hover/focus states are visible and distinct
- [ ] Interactive elements have at least 44x44px touch targets (mobile-friendly)
- [ ] Modal has proper focus management and backdrop

**Current status:** ✅ Bingo Mixer passes WCAG AA contrast tests

---

## Implementation Checklist

When **creating or modifying components**, verify:

- [ ] **No hardcoded colors** — use only Tailwind classes from `src/index.css` `@theme`
- [ ] **Dark foundation** — background uses slate/purple shades or gradients
- [ ] **Readable text** — all text is white, cyan, or pink (NEVER gray)
- [ ] **Button styling** — primary CTAs use pink gradient, secondary use cyan
- [ ] **Borders** — use cyan or pink with `/30` opacity (e.g., `border-pink-500/30`)
- [ ] **Gradients** — diagonal for backgrounds (`to-br`), horizontal for headers (`to-r`)
- [ ] **Transitions** — interactive elements have `transition-all duration-150`
- [ ] **Hover states** — buttons/squares darken or brighten on `active:`
- [ ] **Modal styling** — uses purple gradient + pink border (see [BingoModal.tsx](src/components/BingoModal.tsx))
- [ ] **Accessibility** — text contrast ≥ 4.5:1, touch targets ≥ 44x44px

---

## Real Component Examples from Project

### 1. StartScreen.tsx — Landing Page

```tsx
// File: src/components/StartScreen.tsx
export function StartScreen({ onStart }: StartScreenProps) {
  return (
    // 🎨 Dark gradient background fills entire viewport
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-br from-[#1a0033] via-purple-950 to-black">
      <div className="text-center max-w-sm">
        {/* 💫 Gradient title */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 mb-2">
          Bingo Mixer
        </h1>
        {/* 💎 Cyan subtext */}
        <p className="text-lg text-cyan-300 mb-8">Find your people!</p>
        
        {/* 📦 Semi-transparent card with backdrop blur */}
        <div className="bg-purple-950/60 backdrop-blur rounded-lg p-6 shadow-lg border border-pink-500/30 mb-8">
          <h2 className="font-semibold text-pink-300 mb-3">How to play</h2>
          <ul className="text-left text-cyan-200 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        {/* 🎯 Pink gradient button (CTA) */}
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg active:from-pink-700 active:to-pink-600 transition-all"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
```

---

### 2. BingoSquare.tsx — Game State Logic

**This is THE key component** — all game states happen here:

```tsx
// File: src/components/BingoSquare.tsx
export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  // 🎮 State machine: unmarked → marked → winning
  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-pink-500 to-pink-600 border-pink-400 text-white'      // 🏆 BINGO!
      : 'bg-cyan-400/20 border-cyan-400 text-cyan-200'                                // ✅ Marked
    : 'bg-slate-800 border-slate-600 text-slate-300 active:bg-slate-700';            // ⭕ Default

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
    >
      <span>{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-cyan-300 text-xs">✓</span>
      )}
    </button>
  );
}
```

---

## Common Pitfalls & How to Fix

| Mistake | Why It's Wrong | Fix |
|---|---|---|
| `className="bg-white"` | Breaks vaporwave aesthetic | Use `bg-slate-800` or gradient |
| `className="text-gray-600"` | Unreadable on dark background | Use `text-cyan-300` |
| `style={{ color: '#FF10F0' }}` | Bypasses Tailwind theme system | Use `className="text-accent"` |
| `onClick={() => setState(!state)}` (no transition) | Feels jarring, unpolished | Add `transition-all duration-150` |
| `border border-gray-200` | Wrong palette | Use `border-cyan-500/30` or `border-pink-500/30` |
| `<h1 className="text-pink-400">` (flat color) | Boring for titles | Use gradient: `bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300` |

---

## Extending the Design System

### Adding a New Color

If you need a new accent:

1. Add to `src/index.css`:
```css
@theme {
  --color-purple-accent: #9D4EDD;
}
```

2. Use in components:
```tsx
className="bg-purple-accent text-purple-accent border-purple-accent"
```

---

### Future: Multi-Theme Support

To add light/dark themes later (not currently needed):

1. Create theme files: `src/themes/vaporwave.css`, `src/themes/light.css`
2. Use CSS variables with theme prefixes
3. Implement toggle in `App.tsx`
4. Document each theme separately

**Current status:** Vaporwave only (project-wide). Easy to extend if needed.

---

## Testing & Verification

### Before pushing changes:

1. **Visual check** — Run `npm run dev`, browse each screen
2. **Contrast check** — Use [WebAIM](https://webaim.org/resources/contrastchecker/) or browser DevTools (Accessibility tab)
3. **Mobile test** — Check on phone/tablet viewport
4. **Transitions test** — Verify buttons/squares animate smoothly on click

### Build verification:
```bash
npm run build     # No TypeScript errors?
npm run lint      # No linting issues?
npm test          # All tests pass?
```

---

## Quick Reference: File Locations

| Purpose | File |
|---|---|
| Theme colors | [src/index.css](src/index.css#L3-L9) |
| Start screen | [src/components/StartScreen.tsx](src/components/StartScreen.tsx) |
| Game board | [src/components/GameScreen.tsx](src/components/GameScreen.tsx) |
| Bingo squares | [src/components/BingoSquare.tsx](src/components/BingoSquare.tsx) |
| Win modal | [src/components/BingoModal.tsx](src/components/BingoModal.tsx) |
| Grid layout | [src/components/BingoBoard.tsx](src/components/BingoBoard.tsx) |

---

## Support & Questions

**Found a design issue?**
1. Check this guide for existing pattern
2. Reference the real component examples above
3. Update `src/index.css` if adding new colors
4. Update this file with new patterns

**Questions?** Refer to [Tailwind v4 docs](https://tailwindcss.com/) for class reference.
