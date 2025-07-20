# Seemo Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and TailwindCSS. Features internationalization (Arabic/English), dark/light themes, beautiful animations, and excellent performance.

## ✨ Features

### 🌐 Internationalization (i18n)
- **Bilingual Support**: English (LTR) and Arabic (RTL) languages
- **Language Switcher**: Easy toggle between languages
- **RTL Layout**: Proper right-to-left layout for Arabic
- **Localized Content**: All text content is translatable

### 🎨 Theme System
- **Dark/Light Mode**: Toggle between themes
- **System Preference**: Automatic theme detection
- **Persistent Selection**: Theme preference saved in localStorage
- **Smooth Transitions**: Animated theme changes

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly**: Optimized for touch interactions
- **Flexible Layouts**: Adapts to portrait and landscape orientations

### 🎭 Animations & Interactions
- **Framer Motion**: Smooth page transitions and animations
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive hover states
- **Loading States**: Skeleton screens and spinners
- **Micro-interactions**: Delightful user feedback

### 🔍 SEO & Performance
- **Next SEO**: Comprehensive meta tags and Open Graph
- **Structured Data**: JSON-LD for better search engine understanding
- **Image Optimization**: Next.js Image component with lazy loading
- **Core Web Vitals**: Optimized for performance metrics
- **Web Manifest**: PWA-ready configuration

### ♿ Accessibility (WCAG 2.1 AA)
- **Semantic HTML**: Proper HTML structure and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators and trapping
- **Color Contrast**: Meets accessibility standards
- **Skip Links**: Quick navigation for screen readers

## 🏗️ Project Structure

```
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── about/
│   │   ├── projects/
│   │   ├── contact/
│   │   ├── layout.tsx         # Locale-specific layout
│   │   └── page.tsx           # Home page
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── theme-toggle.tsx
│   │   └── language-switcher.tsx
│   ├── layout/                # Layout components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/              # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   ├── seo/                   # SEO components
│   │   ├── seo-head.tsx
│   │   └── structured-data.tsx
│   └── providers/             # Context providers
│       └── theme-provider.tsx
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── types.ts               # TypeScript types
│   ├── constants.ts           # App constants
│   └── hooks/                 # Custom hooks
├── messages/                  # Translation files
│   ├── en.json
│   └── ar.json
├── public/                    # Static assets
│   ├── images/
│   ├── icons/
│   └── site.webmanifest
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Next.js middleware
└── tailwind.config.js         # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Your Portfolio"

# Email Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🛠️ Customization

### Personal Information

Update your personal information in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://your-domain.com',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    twitter: '@yourusername',
    github: 'yourusername',
    linkedin: 'yourusername',
  },
}
```

### Projects

Add your projects to the `PROJECTS` array in `lib/constants.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    techStack: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
    // ... other fields
  },
]
```

### Skills

Update your skills in `lib/constants.ts`:

```typescript
export const SKILLS: Skill[] = [
  {
    name: 'React',
    level: 'expert',
    category: 'frontend'
  },
  // ... more skills
]
```

### Translations

Update translations in `messages/en.json` and `messages/ar.json`:

```json
{
  "home": {
    "title": "Your Title",
    "description": "Your description"
  }
}
```

## 📦 Dependencies

### Core
- **Next.js 14+**: React framework with App Router
- **React 18+**: UI library
- **TypeScript**: Type safety
- **TailwindCSS**: Utility-first CSS framework

### Internationalization
- **next-intl**: Internationalization for Next.js
- **next-intl/middleware**: Routing middleware

### UI & Animations
- **Framer Motion**: Animation library
- **Radix UI**: Accessible UI primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Component variants
- **clsx & tailwind-merge**: Conditional classes

### Forms & Validation
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **@hookform/resolvers**: Form validation resolvers

### SEO & Performance
- **next-seo**: SEO optimization
- **next-themes**: Theme management

## 🧪 Testing

Run the test suite:

```bash
npm run test
# or
yarn test
```

Run tests in watch mode:

```bash
npm run test:watch
# or
yarn test:watch
```

## 🏗️ Building for Production

1. **Build the application**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the production server**
   ```bash
   npm run start
   # or
   yarn start
   ```

## 📊 Performance Optimization

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Font optimization with next/font
- Bundle analysis with @next/bundle-analyzer
- Compression and caching headers

### Performance Monitoring

Add bundle analyzer:

```bash
npm install --save-dev @next/bundle-analyzer
```

Update `next.config.js`:

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Analyze bundle:

```bash
ANALYZE=true npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Add `netlify.toml` configuration
- **Railway**: Connect GitHub repository
- **DigitalOcean App Platform**: Use Docker or buildpack
- **AWS Amplify**: Connect repository and configure build settings

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Radix UI** for accessible components

## 📞 Support

If you have any questions or need help with setup, please:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Contact me** via email or social media

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**
