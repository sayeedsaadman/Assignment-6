# Digital Workflow & AI Agent Marketplace

A modern, responsive React web application that serves as a marketplace for premium AI tools, design assets, templates, and productivity software. Users can explore various AI agents (like Resume Builders, Data Storytelling, and HR Automation), select pricing plans, and add them to their cart seamlessly.

## 🚀 Features

- **Dynamic Product Listing:** Browse through a variety of AI models and agents loaded dynamically from a JSON integration.
- **Cart System:** Interactive and responsive Cart system to keep track of selected AI tools and models.
- **Modern UI/UX:** Built with a glassmorphism and modern gradient design philosophy for a highly aesthetic, premium look.
- **Toasts Notifications:** Beautiful alert and notification system integrated via `react-toastify` to provide immediate feedback to users during actions (e.g., adding to cart).
- **Interactive UI Components:** Includes tab navigations, custom banners, pricing sections, and stepped guides for quick adoption.

## 💻 Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 4, custom Vanilla CSS, and daisyUI for rapid, beautiful UI components.
- **Icons & Assets:** FontAwesome and Flaticon icons.
- **Notifications:** React Toastify


## 📂 Project Structure

```
├── public/                 # Static assets like models.json
├── src/                    
│   ├── assets/             # Images and visual assets
│   ├── components/         # Reusable React components (Banner, Cart, Models, NavBar, etc.)
│   ├── App.jsx             # Main application component & layout 
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global stylesheet and Tailwind directives
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```


## 🔨 Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This command bundles your app into static files in the `dist/` directory, which can be easily deployed to hosting platforms like Vercel, Netlify, or GitHub Pages.

## 📝 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
