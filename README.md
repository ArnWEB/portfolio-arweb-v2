# Arnab Kundu - AI Engineer Portfolio

A modern, responsive portfolio website showcasing my work as an AI Engineer specializing in LLM systems, RAG architectures, and AI pipeline development.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Build Tool**: Vite 8

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio_v2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
portfolio_v2/
├── public/
│   └── me.mp4              # Video introduction
├── src/
│   ├── components/
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Sidebar.tsx    # Side navigation
│   │   ├── Hero.tsx       # Hero section
│   │   ├── FeaturedWork.tsx  # Projects showcase
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Pipeline.tsx       # AI pipeline diagram
│   │   ├── Education.tsx      # Education section
│   │   ├── Skills.tsx         # Technical skills
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Footer.tsx         # Footer
│   │   ├── ChatWidget.tsx     # Langflow chat
│   │   ├── ScrollIndicator.tsx # Scroll navigation
│   │   └── Motion3D.tsx       # Animation utilities
│   ├── App.tsx            # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Features

- Responsive design (mobile, tablet, desktop)
- Clean, modern UI with technical grid aesthetic
- 3D scroll animations using Framer Motion
- Mobile-friendly navigation with hamburger menu
- Video introduction in hero section
- Skills & experience showcase
- Social media links

## Sections

1. **Hero** - Introduction with video
2. **Featured Work** - Project showcase
3. **Experience** - Work history
4. **Pipeline** - AI system architecture
5. **Education** - Academic background
6. **Skills** - Technical expertise
7. **Contact** - Get in touch

## Customization

### Colors

Edit the theme colors in `src/index.css`:

```css
@theme {
  --color-primary: #006859;
  --color-tertiary: #006382;
  --color-surface: #ffffff;
  --color-on-background: #1a1a1a;
  --color-on-surface-variant: #4a4a4a;
}
```

### Video

Replace `public/me.mp4` with your own video file.

## Deployment

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## License

MIT License