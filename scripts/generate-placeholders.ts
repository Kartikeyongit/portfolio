// scripts/generate-placeholders.ts
// Run with: npx tsx scripts/generate-placeholders.ts

import fs from 'fs'
import path from 'path'

const projects = [
  'collab-platform',
  'flash-sales',
  'dashboard-builder',
  'microservices',
  'blog-cms',
  'social-media',
  'voting',
  'chat',
]

const svgTemplate = (name: string) => `<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e1b4b"/>
      <stop offset="100%" style="stop-color:#312e81"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <text x="600" y="320" text-anchor="middle" fill="#818cf8" font-family="system-ui, sans-serif" font-size="48" font-weight="bold">
    ${name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
  </text>
  <text x="600" y="380" text-anchor="middle" fill="#6366f1" font-family="system-ui, sans-serif" font-size="24">
    Project Screenshot
  </text>
</svg>`

projects.forEach((project) => {
  const dir = path.join(process.cwd(), 'public', 'images', 'projects', project)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  const files = ['thumbnail.webp', 'hero.webp', 'architecture.webp', 'cursors.webp', 'history.webp', 'flash-sale.webp', 'admin.webp', 'editor.webp', 'sql.webp', 'dashboard.webp']
  files.forEach((file) => {
    const svgPath = path.join(dir, file.replace('.webp', '.svg'))
    fs.writeFileSync(svgPath, svgTemplate(project))
  })
})

console.log('✅ Placeholder images generated!')