# TomDeLuca/dev

A modern portfolio website built with Astro, featuring a responsive design, form validation, smooth animations, and comprehensive code quality tooling.

## 🚀 Tech Stack

- **Framework**: [Astro 5.16.11+](https://astro.build) - Static site generator optimized for performance
- **Styling**: [SCSS 1.94.0](https://sass-lang.com) - CSS preprocessor with variables, mixins, and responsive design patterns
- **JavaScript**: Vanilla ES6+ with animations and form validation
- **Animation**: [GSAP 3.13.0](https://greensock.com/gsap) - Professional-grade animation library
- **TypeScript**: 5.9.3 (strict mode enabled)
- **Node.js**: 16+ (tested with v24.12.0)

## 📋 Code Quality Tools

- **Linting**: [ESLint 9.39.2](https://eslint.org) - JavaScript/TypeScript linting with flat config
- **Formatting**: [Prettier 3.8.1](https://prettier.io) + [prettier-plugin-astro 0.14.1](https://github.com/withastro/prettier-plugin-astro)
- **Style Linting**: [Stylelint 17.1.1](https://stylelint.io) with SCSS support
- **Type Checking**: [Astro Check](https://docs.astro.build/en/guides/typescript/) - TypeScript validation for Astro files
- **Git Hooks**: [Husky 9.0.11](https://typicode.github.io/husky) + [lint-staged 16.2.7](https://github.com/okonet/lint-staged) - Pre-commit code quality checks

## 🛠️ Installation

### Prerequisites

- Node.js 16+
- npm or pnpm

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd tom-deluca-dev

# Install dependencies
npm install

# Verify installation with linting
npm run lint
```

## 📦 Available Scripts

### Development

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run start        # Alias for dev
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Quality

```bash
npm run lint         # Run ESLint + Stylelint checks
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format all files with Prettier
npm run type-check   # TypeScript type checking
```

### Pre-commit Hooks

The project uses Husky to run quality checks before commits:

- ESLint with auto-fix
- Stylelint with auto-fix
- Prettier formatting

Bad commits are blocked unless all checks pass.

## 📁 Project Structure

```
src/
├── components/           # Reusable Astro components
│   ├── elements/        # Basic UI components (buttons, cards, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── forms/           # Form components
│   └── sections/        # Page sections (Hero, Skills, Experience, etc.)
├── layouts/             # Page layouts (Layout.astro, LayoutFullHeight.astro)
├── pages/               # Route pages (auto-routed by filename)
├── scripts/             # JavaScript modules
│   ├── formValidation.js   # Form validation logic
│   ├── _animations.js      # GSAP animation setup
│   ├── _header.js          # Header interactions
│   ├── _footer.js          # Footer interactions
│   ├── _projectCard.js     # Project card flip animations
│   ├── _smoothScroll.js    # Smooth scroll for anchor links
│   ├── _utils.js           # Utility functions
│   ├── init.js             # Main initialization entry point
│   └── index.js            # Script bundler entry point
├── styles/              # SCSS stylesheets
│   ├── base/           # Core styles (buttons, forms, animations)
│   ├── components/      # Component-specific styles
│   ├── layout/          # Layout styles
│   ├── settings/        # Variables and configuration
│   └── styles.scss      # Main stylesheet
├── assets/              # Images, fonts, media
└── env.d.ts            # TypeScript environment declarations
```

## 🎨 Styling Architecture

The project uses SCSS with:

- **Variables**: Color palette, typography, spacing, breakpoints in `_variables.scss`
- **Responsive Mixins**: `mq-up()` (min-width) and `mq-down()` (max-width) for consistent media queries
- **Modular Structure**: Base, component, and layout styles organized separately
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design

## ✅ Form Validation

The project includes modern, accessible form validation:

**Features:**

- Real-time validation on blur and input
- Native HTML5 validation attributes
- Custom validation rules per field
- Error messages displayed below each field
- Form submission blocked if invalid
- Focus management (focuses first invalid field on submit)
- WCAG accessibility guidelines (ARIA labels, roles, alerts)

**File**: `src/scripts/formValidation.js`

## 💾 Format-on-Save

VS Code is configured for automatic formatting on save:

**Formatters by file type:**

- `.astro` → Astro VS Code extension
- `.js`, `.ts`, `.scss`, `.css`, `.html` → Prettier

**Required VS Code Extensions:**

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

**Settings** are in `.vscode/settings.json` with:

- `editor.formatOnSave: true`
- `editor.codeActionsOnSave` for ESLint & Stylelint fixes

## 🔍 Linting Configuration

**ESLint** (`eslint.config.js`):

- Separate rules for `.js`, `.ts`, and `.astro` files
- TypeScript strict mode
- Browser globals enabled for client-side code
- ARIA and accessibility rules

**Prettier** (`.prettierrc`):

- 2-space indentation
- Single quotes
- Line width: 100 characters
- Astro file support via plugin

**Stylelint** (`.stylelintrc.json`):

- Standard SCSS configuration
- Enforces consistent formatting
- Validates CSS/SCSS syntax

## 🚀 Deployment

This is a static site generated by Astro. Deploy the `dist/` folder to:

- Netlify
- Vercel
- GitHub Pages
- Any static host

## 📊 Performance

- **Astro**: Delivers zero JavaScript by default, only what's needed
- **GSAP**: Imported only where animations are used
- **SCSS**: Compiled to optimized CSS
- **Image Optimization**: Static images in `public/` and `src/assets/`

Test performance on your live site with [Lighthouse](https://developers.google.com/web/tools/lighthouse):

```bash
npx lighthouse https://your-live-site.com --preset=desktop --view
```

## 🤝 Contributing

When making changes:

1. Create a branch: `git checkout -b feature/my-feature`
2. Make changes and ensure linting passes: `npm run lint`
3. Format code: `npm run format`
4. Commit (pre-commit hooks will run automatically)
5. Push and create a pull request

Note: Commits with linting errors will be blocked by Husky pre-commit hooks.

## 📝 License

See [LICENSE](LICENSE) file for details.

---

**Questions?** Check the [documentation](docs/) or open an issue.
