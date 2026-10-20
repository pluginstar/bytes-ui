# Bytes UI

> Elevating Bits UI official documentation styles into a production-ready component library. Built with mathematical concentric radius and strict scale consistency.

## Overview

**Bytes UI** packages the refined, artisanal inline Tailwind styles found in the official [Bits UI](https://bits-ui.com) documentation into clean, modular, reusable Svelte 5 components.

### Core Principles

1. **Concentric Border Radius**  
   Strictly follows the concentric geometry equation:  
   $$\text{Inner Radius} = \text{Outer Radius} - \text{Padding}$$  
   A central `--radius` token dynamically coordinates all curves (Dialog: 20px, Card: 16px, Input: 10px, Item: 6px).

2. **Strict Scale (1:1 Alignment)**  
   Interactive elements share exact standardized heights across scales (`sm`: 36px, `default`: 48px, `lg`: 56px) to eliminate visual misalignments when placed side by side.

3. **Zero Component Margins**  
   Components contain zero outer margin (`m-*`), delegating layout spacing cleanly to parent container flex and grid gaps.

4. **Sleek Auto-Hiding Scrollbars**  
   Modern disappearing scrollbars inspired by Bits UI official documentation and macOS overlay styling.

---

## Installation

```bash
npm install bytes-ui bits-ui clsx tailwind-merge
```

## Quick Start

In your root layout (`src/routes/+layout.svelte`):

```svelte
<script lang="ts">
  import "bytes-ui/styles/theme.css";
  let { children } = $props();
</script>

{@render children()}
```

Then import and use components in your pages:

```svelte
<script lang="ts">
  import { Button, Input } from "bytes-ui";
</script>

<div class="flex gap-2">
  <Input placeholder="Search components..." />
  <Button>Search</Button>
</div>
```

---

## Included Primitives

- **Buttons & Toggles**: `Button`, `Toggle`, `ToggleGroup`
- **Inputs & Forms**: `Input`, `Checkbox`, `Switch`, `RadioGroup`, `PinInput`, `Label`
- **Data & Pickers**: `Calendar`, `RangeCalendar`, `DateField`, `DatePicker`, `DateRangeField`, `DateRangePicker`, `TimeField`, `TimeRangeField`, `Combobox`, `Select`
- **Overlays & Dialogs**: `Dialog`, `AlertDialog`, `Popover`, `Tooltip`, `DropdownMenu`, `ContextMenu`
- **Layout & Structure**: `Card`, `Accordion`, `Collapsible`, `Tabs`, `Separator`, `ScrollArea`, `Toolbar`, `Menubar`, `NavigationMenu`
- **Visual & Feedback**: `Avatar`, `Badge`, `Progress`, `Meter`, `RatingGroup`, `Slider`, `AspectRatio`, `LinkPreview`, `Command`, `Pagination`

---

## License

MIT © [pluginstar](https://github.com/pluginstar)
