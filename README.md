# PTMG Website

A professional services website for PTMG, built as a multi-page application using Vite, SCSS, and JavaScript.

## Features

- **Multi-Page Architecture**: Individual pages for different services like Accounting, Taxation, and IT Advisory.
- **Dynamic Team Page**: Powered by JSON data to manage team members.
- **Modern Styling**: Modular SCSS with a clean, professional design.
- **Optimized Build**: Fast development and production builds using Vite.

## Tech Stack

- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling.
- **[Sass/SCSS](https://sass-lang.com/)**: Professional-grade CSS extension.
- **JavaScript (ES6+)**: Vanilla JS for interactive components.
- **[Vite Plugin SVG Icons](https://github.com/vbenjs/vite-plugin-svg-icons)**: For efficient SVG icon management.

## Project Structure

- `src/`: Source files.
  - `accounting-auditing/`, `taxation/`, etc.: Page-specific HTML files.
  - `assets/`: Static assets like icons and images.
  - `css/`: Modular SCSS styles.
  - `js/`: JavaScript source files.
- `public/`: Static assets that are copied to the root of the build output.
  - `data/`: JSON files for dynamic content (info, people).

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### Production Build & Preview

To see how the website will look in production, it is recommended to run the build command followed by the preview command:

1. Build the project:
   ```bash
   npm run build
   ```
2. Preview the production build:
   ```bash
   npm run preview
   ```
The production preview will be available at `http://localhost:4173`.

## Configuration

The project uses `vite.config.js` to handle multi-page entry points. If you add a new page, ensure it is registered in the `rollupOptions.input` section of the config.
