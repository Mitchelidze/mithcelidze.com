# Project Overview: mithcelidze.com

This is the personal portfolio and blog of Miranda T., a Senior Product Designer. The project is built with **Next.js** and focuses on a clean, professional, and interactive user experience to showcase design work and thoughts on product design.

## Core Technologies
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [tw-animate-css](https://github.com/up-9/tw-animate-css)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)

## Project Structure
- `app/`: Contains the main application routes and layouts (Next.js App Router).
  - `page.tsx`: The main landing page consolidating all sections.
  - `layout.tsx`: Root layout with font and theme providers.
- `components/`: React components.
  - `ui/`: Low-level UI primitives (buttons, carousels, etc.) managed via shadcn/ui.
  - `*-section.tsx`: Large feature sections (Hero, Work, About, Blog).
- `lib/`: Utility functions and static data.
  - `blog-posts.ts`: Contains the content for blog posts.
  - `utils.ts`: Tailwind CSS class merging and other helpers.
- `hooks/`: Custom React hooks.
- `public/`: Static assets (images, icons, etc.).

## Building and Running

### Development
Start the development server with Turbopack enabled:
```bash
npm run dev
```

### Production
Build the application for production:
```bash
npm run build
```
Start the production server:
```bash
npm run start
```

### Code Quality
- **Linting:** `npm run lint`
- **Formatting:** `npm run format`
- **Type Checking:** `npm run typecheck`

## Development Conventions

- **Component Organization:** Follow the existing pattern of separating UI primitives in `components/ui/` and feature-specific components in `components/`.
- **Styling:** Use Tailwind CSS utility classes. Avoid custom CSS unless absolutely necessary (prefer `app/globals.css` for global styles).
- **Icons:** Use `lucide-react` for all iconography.
- **Data:** Static content like blog posts should be added to `lib/blog-posts.ts`.
- **shadcn/ui:** When adding new UI components, use `npx shadcn@latest add <component-name>`.
- **Type Safety:** Ensure all new components and functions are properly typed with TypeScript.
