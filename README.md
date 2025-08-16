# React + Vite + TypeScript + Tailwind CSS Project

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Hot Module Replacement** - Instant updates during development

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles with Tailwind directives
└── assets/          # Static assets
```

## Tailwind CSS

This project uses Tailwind CSS v4 with PostCSS. The configuration is in:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## Development

The development server will automatically reload when you make changes to your code. The project includes:

- TypeScript compilation
- ESLint for code quality
- Hot Module Replacement (HMR)
- Tailwind CSS with JIT compilation

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Technologies Used

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [PostCSS](https://postcss.org/) - CSS processing
