# Local Deployment Guide

This guide details how to build and run the S&S Solar web application locally in a production-like environment.

## Prerequisites

-   **Node.js**: Ensure Node.js is installed (v18 or higher recommended).
-   **npm**: Comes with Node.js.

## Installation

1.  **Clone the repository** (if not already done):
    ```bash
    git clone <repository-url>
    cd s&s-energy
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Building for Production

To create an optimized production build:

1.  **Run the build command**:
    ```bash
    npm run build
    ```

    This command will:
    -   Bundle the application using Vite.
    -   Output the production-ready files to the `dist/` directory.

2.  **Verify the output**:
    Check the `dist/` directory. You should see `index.html` and an `assets/` folder containing js files.

## Running Locally (Preview)

To simulate the production environment locally:

1.  **Start the preview server**:
    ```bash
    npm run preview
    ```

2.  **Access the application**:
    The terminal will verify the URL, typically:
    -   **Local**: [http://localhost:4173/](http://localhost:4173/)
    -   **Network**: [http://<your-ip>:4173/](http://<your-ip>:4173/)

    Open this URL in your browser to view the deployed application.

## Troubleshooting

-   **Blank Page**: If you see a blank page, ensure `index.html` does not contain conflicting `<script type="importmap">` tags or broken CSS links.
-   **Missing API Key**: If the AI features (Solar Advisor) don't work, ensure you have a standard `.env` file with `GEMINI_API_KEY` defined, or check console logs for errors. The app handles missing keys gracefully.
-   **Port Conflicts**: If port 4173 is in use, Vite will automatically try the next available port. Check the terminal output for the correct URL.

## Fixes Applied

### Blank Page in Local Preview
**Issue**: The application displayed a blank page when running `npm run preview`.
**Cause**: 
1.  **Top-level API Client Initialization**: The `services/gemini.ts` file was initializing the Google GenAI client at the top level. If the API key was missing or invalid during the build/runtime environment initialization, this caused the application to crash immediately upon loading.
2.  **Missing Global CSS**: The `index.css` file was not being imported in `index.tsx`, and the Tailwind CDN script in `index.html` is not ideal for production builds.

**Fix**:
1.  **Lazy Initialization**: Refactored `services/gemini.ts` to initialize the AI client only when `getSolarAdvice` is called, preventing startup crashes.
2.  **CSS Bundling**: Created `index.css` with Tailwind directives and imported it into `index.tsx` to ensure styles are properly bundled by Vite.

### Logo Mismatch
**Issue**: The application was displaying an incorrect/placeholder inline SVG logo instead of the official logo in the `assets` folder.
**Fix**:
1.  **Imported Asset**: Imported `logo.svg` from the `assets` directory into `Navbar.tsx`, `App.tsx`, and `SolarAdvisor.tsx`.
2.  **Replaced Component**: Replaced the inline SVG `LogoIcon` component with an `img` tag rendering the imported logo asset.
