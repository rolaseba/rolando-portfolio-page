# Agent Guidelines

## Essential Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on all TypeScript/React files
- `npm run preview` - Preview production build locally
- `npm run lint -- <file-path>` - Lint specific file

**Note**: No test framework is currently configured. Add test setup if implementing tests.

## Code Style Guidelines

### Imports
- Import React explicitly in components: `import React from 'react'`
- Use named imports for icons from `lucide-react`: `{ Menu, X } from 'lucide-react'`
- Group imports: external libraries first, then internal modules
- Use relative paths for local files: `import Component from './components/Component'`
- Import React hooks from 'react': `import { useState, useEffect } from 'react'`

### Components
- Use functional components with arrow functions
- PascalCase naming for components
- Default export pattern: `export default ComponentName`
- Keep components focused on single sections/pages
- Section IDs should match component names for navigation (hero, about, projects, contact)

```tsx
const ComponentName = () => {
  return <div>...</div>;
};

export default ComponentName;
```

### TypeScript
- Strict mode is enabled - always use explicit typing
- Define interfaces for complex data structures in hooks
- Type form data, props, and hook returns explicitly
- Use proper typing for event handlers: `React.ChangeEvent<HTMLInputElement>`, `React.FormEvent`
- Type assertions only when necessary: `as UserData`
- Union types for related types: `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>`

### Styling
- Use Tailwind CSS utility classes exclusively
- Responsive design with mobile-first approach (sm:, md:, lg: prefixes)
- No custom CSS - all styling via Tailwind
- Common patterns: `className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"`
- Focus states: `focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none`
- Transitions: `transition-all duration-200`

### State Management
- Use React hooks: `useState`, `useEffect` from 'react'
- Custom hooks should start with `use` prefix
- Controlled components for forms with explicit typing
- Smooth scrolling using `scrollIntoView({ behavior: 'smooth' })`
- Use functional updates when deriving new state from old state

### Error Handling
- Always check for null/undefined before DOM operations
- Use optional chaining (`?.`) for safe property access
- Null checks for `document.getElementById` calls
- Type assertions only when necessary: `as UserData`

### Accessibility
- Add `aria-label` to buttons without text content
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Provide meaningful `alt` text for images
- Ensure keyboard navigation works for interactive elements

## File Structure

```
src/
├── components/       - Section-based components (Hero, About, Projects, Contact, Footer, Header)
├── hooks/           - Custom hooks (useUserData.ts, must start with 'use')
├── data/            - JSON data files (userData.json)
├── App.tsx          - Main application component
├── main.tsx         - Entry point with StrictMode
├── index.css        - Tailwind directives only
└── vite-env.d.ts    - Vite type definitions
```

## Key Patterns

### Data Flow
1. Content in `src/data/userData.json`
2. Custom hook (`useUserData`) loads and returns typed data
3. Components consume data via the hook

```tsx
const { personal, social } = useUserData();
```

### Icon Mapping Pattern
Use Record type for dynamic icon mapping:

```tsx
const iconMap: Record<string, React.ElementType> = {
  'CategoryName': IconComponent,
};

const IconComponent = iconMap[category] || DefaultIcon;
```

### Smooth Scrolling
```tsx
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Form Pattern
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: ''
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle submission
};
```

## Configuration

- **ESLint**: Configured with TypeScript ESLint and React rules (react-hooks, react-refresh)
- **TypeScript**: Strict mode enabled, noUnusedLocals/Parameters, noFallthroughCasesInSwitch
- **Build**: Vite with React plugin, excludes lucide-react from optimization
- **Styles**: Tailwind CSS with Inter font family

## Development Notes

- Profile images and resume PDF should be in public folder or accessible via URL
- Social links are pulled from userData.json - update there for changes
- Section IDs match component names for navigation (hero, about, projects, contact)
- Mobile menu state is managed at component level
- Forms default to `mailto:` for email submission (no backend configured)
