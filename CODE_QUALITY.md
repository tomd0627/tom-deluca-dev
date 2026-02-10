# Code Quality & Linting Setup

This project includes a comprehensive modern tooling setup to ensure code quality and consistency.

## 🛠️ Tools Included

### ESLint
- **Purpose**: JavaScript/TypeScript linting
- **Config**: `.eslintrc.json`
- **Plugins**: 
  - `eslint-plugin-astro` - Astro-specific linting rules
  - `@typescript-eslint` - TypeScript support

### Prettier
- **Purpose**: Code formatting (opinionated formatter)
- **Config**: `.prettierrc`
- **Plugin**: `prettier-plugin-astro` - Astro file support

### Stylelint
- **Purpose**: SCSS/CSS linting
- **Config**: `.stylelintrc.json`
- **Extends**: `stylelint-config-standard-scss`

### Husky + Lint-Staged
- **Purpose**: Git pre-commit hooks for automatic linting before commits
- **Config**: `.lintstagedrc.json`
- **Triggers**: Automatically runs linters on staged files before each commit

### TypeScript
- **Config**: `tsconfig.json` (enhanced with strict mode)
- **Script**: `npm run type-check` - Runs Astro's type checking

### EditorConfig
- **File**: `.editorconfig`
- **Purpose**: Maintains consistent coding styles across different editors

## 📋 Available Scripts

```bash
# Lint all files (check for issues)
npm run lint

# Fix linting and formatting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Type checking with Astro
npm run type-check

# Development
npm run dev

# Build
npm run build
```

## 🚀 Setup Instructions

### Initial Setup

After pulling these changes, install the new dev dependencies:

```bash
npm install
```

### Setup Git Hooks (One-time)

Husky will automatically install git hooks when you run `npm install`, but if you need to manually set it up:

```bash
npx husky install
```

This will enable automatic linting checks before each commit.

## 📝 How It Works

### Pre-Commit Automation
When you commit code, `lint-staged` automatically:
1. Runs ESLint on `.js`, `.ts`, `.astro` files and fixes violations
2. Runs Stylelint on `.scss` and `.css` files and fixes violations
3. Runs Prettier on all files for consistent formatting
4. Only commits staged files that pass checks

### Continuous Integration
GitHub Actions runs code quality checks on every push and pull request:
- ESLint for JavaScript/TypeScript
- Stylelint for CSS/SCSS
- Prettier formatting check
- TypeScript type checking
- Build verification

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `.eslintrc.json` | ESLint configuration |
| `.prettierrc` | Prettier configuration |
| `.stylelintrc.json` | Stylelint configuration |
| `.lintstagedrc.json` | Lint-staged configuration |
| `tsconfig.json` | TypeScript strictness rules |
| `.editorconfig` | Editor consistency settings |
| `.eslintignore` | Files to ignore for linting |
| `.prettierignore` | Files to ignore for formatting |
| `.github/workflows/code-quality.yml` | CI/CD workflow |

## 💡 Best Practices

### Before Committing
```bash
# Run this to fix issues automatically
npm run lint:fix

# Or run individually:
npm run format          # Auto-format code
npm run type-check      # Check for type errors
```

### Manual Checks
```bash
# Check for linting issues without fixing
npm run lint

# Check if code matches Prettier formatting (without modifying)
npx prettier --check "src/**/*.{js,ts,astro,scss,css}"
```

### Ignoring Rules (When Necessary)
Only use when absolutely necessary:

**For ESLint:**
```javascript
// eslint-disable-next-line rule-name
const problematicCode = ...;
```

**For Prettier:**
```javascript
// prettier-ignore
const unformattedCode = ...
```

**For Stylelint:**
```scss
/* stylelint-disable rule-name */
.some-rule { ... }
/* stylelint-enable rule-name */
```

## 🐛 Troubleshooting

### Pre-commit hook not running?
```bash
npx husky install
```

### Want to skip hooks (should be rare)?
```bash
git commit --no-verify
```

### Fix all linting issues in one go:
```bash
npm run lint:fix
```

### Check formatting without changes:
```bash
npx prettier --check "src/**/*.{js,ts,astro,scss,css}"
```

## 📚 Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Stylelint Documentation](https://stylelint.io/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Astro Documentation](https://docs.astro.build/)
