# Greeshma R R - Modern React Portfolio

A cutting-edge portfolio website showcasing modern frontend development skills with React, TypeScript, and advanced web technologies.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **3D Animations**: React Three Fiber for immersive 3D backgrounds
- **Smooth Animations**: Framer Motion for fluid transitions
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach with modern layouts
- **Interactive Components**: Project cards, skills visualization, contact forms
- **Performance Optimized**: Lazy loading, code splitting, optimized assets

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#4F46E5) / Electric Blue (#3B82F6)
- **Secondary**: Emerald Green (#10B981)
- **Accent**: Vibrant Pink (#EC4899)
- **Background**: Dark Slate (#111827) / Light Mode (#F9FAFB)

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + React Three Fiber
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React + Lottie animations

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section with 3D background
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills visualization
│   ├── Projects.tsx    # Project showcase
│   ├── Experience.tsx  # Career timeline
│   ├── Publications.tsx # Research publications
│   ├── Contact.tsx     # Contact form
│   └── Navbar.tsx      # Navigation component
├── lib/
│   └── utils.ts        # Utility functions
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (recommended: Node.js 20.x for better compatibility)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/greeshmarr/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

### Alternative Development Options

If you encounter Node.js ESM compatibility issues with Node.js v22:

1. **Use Node.js v20** (recommended):
```bash
nvm use 20
npm run dev
```

2. **Use alternative build tools**:
```bash
# Using Parcel
npm install -g parcel
parcel index.html

# Using webpack-dev-server
npm install -g webpack-dev-server
webpack serve
```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Sections Overview

1. **Hero**: 3D animated landing with Three.js stars background
2. **About**: Career journey and personal story
3. **Skills**: Interactive skill charts and technology showcase
4. **Projects**: Portfolio of featured projects with live demos
5. **Experience**: Professional timeline with achievements
6. **Publications**: Research papers and academic contributions
7. **Contact**: Form with validation and social links

## 🎯 Performance Features

- Lazy loading for optimal performance
- Code splitting by route/component
- Optimized images and assets
- SEO-friendly meta tags
- Accessibility compliance

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions for improvements, feel free to open an issue.

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

---

**Built with ❤️ by Greeshma R R**
