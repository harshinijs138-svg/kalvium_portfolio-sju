# Kalvium Squad Portfolio

A modern, interactive portfolio showcasing Squad 138 & 139 CSE students from St. Joseph's University.

## About

This project features a portfolio website with student profiles, skills, and contact information. Built with modern web technologies for a smooth, engaging user experience.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd neon

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion, AOS
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # Static data and content
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Images and static assets
```

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## License

MIT
