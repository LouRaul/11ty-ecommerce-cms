# Modern Eleventy Marketing Starter

A lightning-fast marketing website starter built with Eleventy, Tailwind CSS, and Vite. Perfect for landing pages, marketing sites, and blogs.

## ✨ Features

- 🚀 Fast build times with Eleventy 3.0
- 🎨 Tailwind CSS v3 with JIT compilation
- ⚡ Vite for asset bundling and HMR
- 🖼 Automatic image optimization
- 📱 Mobile-first, responsive design
- 🔍 SEO-friendly with meta tags
- 📊 Common marketing components included
- 🌐 RSS feed generation
- 🎯 Alpine.js for interactivity
- 📝 Blog support with markdown
- 🔄 Live reload in development
- 📦 Zero-config deployment to Netlify/Vercel

## 🚀 Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/eleventy-marketing-starter.git my-website
   cd my-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── src/
│   ├── _data/          # Global site data
│   ├── _includes/      # Templates & partials
│   ├── assets/         # Styles, scripts, and images
│   ├── posts/          # Blog posts
│   └── index.njk       # Homepage
├── public/             # Static files
├── .eleventy.js       # Eleventy config
├── vite.config.js     # Vite config
├── tailwind.config.js # Tailwind config
└── package.json
```

## 🛠 Development

### Adding New Pages

Create new `.njk` or `.md` files in the `src` directory:

```njk
---
layout: layouts/base.njk
title: About Us
description: Learn more about our company
---

<div class="container mx-auto px-4">
  <h1>About Us</h1>
</div>
```

### Working with Data

Add global data in `src/_data/site.js`:

```javascript
module.exports = {
  title: "Your Site Name",
  description: "Your site description"
  // ... other data
};
```

### Creating Blog Posts

Add markdown files to `src/posts/`:

```markdown
---
title: My First Post
date: 2024-02-28
description: This is my first blog post
---

Content goes here...
```

## 🎨 Customization

### Tailwind Configuration

Modify `tailwind.config.js` to add your custom design tokens:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        // ... more colors
      }
    }
  }
};
```

### Site Metadata

Update `src/_data/site.js` with your site's information:

```javascript
module.exports = {
  title: "Your Site Name",
  description: "Your site description",
  url: "https://yoursite.com",
  // ... more metadata
};
```

## 📦 Deployment

### Netlify

1. Push your repository to GitHub
2. Connect your repository to Netlify
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `_site`

### Vercel

1. Push your repository to GitHub
2. Import your repository to Vercel
3. Use these build settings:
   - Build command: `npm run build`
   - Output directory: `_site`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.