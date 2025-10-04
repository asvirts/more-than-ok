# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 MDX blog application that uses file-based content management. Blog posts are stored as `.mdx` files in `content/posts/` and rendered using `next-mdx-remote`. The project uses Tailwind CSS for styling and is configured for deployment on Vercel.

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler without emitting files

## Architecture

### Content Management

- **Posts Location**: All blog posts are MDX files in `content/posts/`
- **Post Structure**: Each post has frontmatter (title, slug, date, excerpt, coverImage, author) and MDX content
- **MDX Library**: `lib/mdx.ts` provides three key functions:
  - `getAllPosts()` - Returns sorted array of post metadata
  - `getPostBySlug(slug)` - Returns single post with content
  - `getAllPostSlugs()` - Returns slugs for static generation

### Routing

- Home page (`app/page.tsx`) - Displays all posts via `AllPosts` component
- Post pages (`app/posts/[slug]/page.tsx`) - Renders individual posts using `MDXRemote`
- Uses Next.js 15 App Router with static generation via `generateStaticParams()`

### Key Dependencies

- `next-mdx-remote` - Server-side MDX rendering
- `gray-matter` - Frontmatter parsing
- `styled-components` - CSS-in-JS (configured with `SC_DISABLE_SPEEDY` for performance)
- `@tailwindcss/typography` - Prose styling for MDX content
- `date-fns` - Date formatting utilities

### Path Aliases

- `@/*` maps to root directory (configured in tsconfig.json)

### Styling

- Tailwind CSS v4 with PostCSS
- Custom container classes and typography plugin
- Inter font loaded via `next/font/google`

## Creating New Posts

Add a new `.mdx` file to `content/posts/` with this frontmatter structure:

```yaml
---
title: "Post Title"
slug: "url-slug"
date: "2024-10-04"
excerpt: "Brief description"
coverImage: "/images/cover.jpg" # optional
author: # optional
  firstName: "First"
  lastName: "Last"
  image: "/images/avatar.jpg"
---
```
