# RanjuUI

> Semantic, lightweight, zero dependencies. ~54KB CSS + ~21KB JS.

RanjuUI is an ultra-lightweight HTML + CSS + JS UI component library with zero dependencies. No framework, no build tools, no complexity. Just include two files and start building.

40+ production-ready components styled with CSS custom properties, dark mode support, and responsive design out of the box. Semantic HTML and ARIA attributes throughout.

See live demo and docs at [**alps-is-core.github.io/RanjuUI**](https://alps-is-core.github.io/RanjuUI/)

---

## Install

### CDN

```html
<link rel="stylesheet" href="https://alps-is-core.github.io/RanjuUI/ranju.css">
<script src="https://alps-is-core.github.io/RanjuUI/ranju.js" defer></script>
```

### Download

Download `ranju.css` and `ranju.js` from this repo and drop them into your project:

```html
<link rel="stylesheet" href="ranju.css">
<script src="ranju.js" defer></script>
```

### npm

```bash
npm install @alps/ranjuui
```

## Usage

Components use plain HTML with CSS classes. No JavaScript configuration needed for most components:

```html
<!-- Button variants -->
<button class="btn">Primary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-destructive">Delete</button>

<!-- Card -->
<div class="card">
  <div class="card-header">
    <div class="card-title">Title</div>
    <div class="card-description">Description</div>
  </div>
  <div class="card-content">Content here</div>
  <div class="card-footer">
    <button class="btn btn-sm">Action</button>
  </div>
</div>

<!-- Alert -->
<div class="alert alert-success">
  <div class="alert-content">
    <div class="alert-title">Done</div>
    <div class="alert-description">Operation completed.</div>
  </div>
</div>

<!-- Tabs -->
<div class="tabs">
  <div class="tabs-list">
    <button class="tabs-trigger active" data-tab="one">Tab 1</button>
    <button class="tabs-trigger" data-tab="two">Tab 2</button>
  </div>
  <div class="tab-panel active" data-tab-panel="one">Content 1</div>
  <div class="tab-panel" data-tab-panel="two">Content 2</div>
</div>

<!-- Dialog -->
<button class="btn" data-dialog-open="my-dialog">Open</button>
<div class="dialog-overlay" id="my-dialog" data-state="closed">
  <div class="dialog">
    <div class="dialog-header">
      <div class="dialog-title">Title</div>
    </div>
    <div class="dialog-body">Content</div>
    <div class="dialog-footer">
      <button class="btn" data-dialog-close>Close</button>
    </div>
  </div>
</div>
```

## JavaScript API

Interactive components are auto-initialized. A minimal JS API is exposed for programmatic control:

```js
// Theme
Ranju.theme.toggle()        // switch light/dark
Ranju.theme.set('dark')     // force dark
Ranju.theme.current()       // returns 'light' or 'dark'

// Toast notifications
Ranju.toast({
  title: 'Saved',
  description: 'Changes saved.',
  variant: 'success',       // 'success' | 'destructive' | 'warning'
  position: 'bottom-right'  // top-right, top-left, bottom-left, etc.
})

// Dialog
Ranju.dialog.open('my-dialog')
Ranju.dialog.close('my-dialog')

// Command palette (Ctrl+K built-in)
Ranju.command.open('cmd')
Ranju.command.close('cmd')

// Calendar
Ranju.calendar(element, {
  onSelect: function(date) { console.log(date) }
})
```

## Dark Mode

Auto-detects system preference. Saved to localStorage. Toggle with:

```html
<html data-theme="dark">
```

Or via JS: `Ranju.theme.toggle()`

## Customization

Override CSS custom properties:

```css
:root {
  --primary: #8b5cf6;
  --primary-fg: #ffffff;
  --radius: 0.75rem;
  --font-sans: 'Your Font', system-ui, sans-serif;
}
```

## Components

**Layout:** Typography, Grid, Container, Flex Utilities, Spacing, Aspect Ratio, Separator, Scroll Area

**Data Display:** Avatar, Badge, Card, Data Table, Empty State, Kbd, Skeleton, Meter, Progress, Spinner

**Forms:** Button, Input, Textarea, Checkbox, Radio, Switch, Slider, Toggle, Combobox, Select, Label

**Navigation:** Breadcrumb, Menubar, Navbar, Pagination, Sidebar, Tabs

**Overlays:** Accordion, Alert, Calendar, Carousel, Collapsible, Command Palette, Context Menu, Dialog, Drawer, Dropdown, Hover Card, Popover, Sheet, Toast, Tooltip

## Individual Components

Each component is available as a standalone file in `src/css/` and `src/js/`:

```
src/css/button.css      # just button styles
src/css/dialog.css      # just dialog/sheet/drawer
src/js/toast.js         # just toast logic
```

Import only what you need, or use the bundled `ranju.css` + `ranju.js` for everything.

## Build

Concatenate source files into the bundle:

```bash
make dist
```

Requires `cat` (unix) or equivalent. See `Makefile` for the file order.

## Project Structure

```
src/css/          42 individual component CSS files
src/js/           20 individual component JS files
ranju.css         concatenated CSS bundle
ranju.js          concatenated JS bundle
index.html        documentation & live demo
Makefile          build system
package.json      npm package config
```

## Examples

Full pages built with RanjuUI — no extra frameworks, just these components:

- **[SaaS Landing Page](https://alps-is-core.github.io/RanjuUI/examples/saas-landing.html)** — Hero, features grid, pricing cards, testimonials, FAQ accordion, CTA
- **[Dashboard App](https://alps-is-core.github.io/RanjuUI/examples/dashboard.html)** — Sidebar, stat cards, data table, tabs, command palette, toasts, dialogs

[View all examples →](https://alps-is-core.github.io/RanjuUI/examples/)

## Browser Support

Chrome, Firefox, Safari, Edge — all modern browsers. Standard CSS and ES5 JavaScript.

## License

[MIT](LICENSE)
