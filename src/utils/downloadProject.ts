import JSZip from 'jszip';

// Project structure and files to include in the download
const projectFiles = {
  // Root files
  'README.md': '# Portfolio Project\n\nA modern React portfolio built with Vite, TypeScript, and Tailwind CSS.\n\n## Getting Started\n\n```bash\nnpm install\nnpm run dev\n```',
  'package.json': JSON.stringify({
    "name": "portfolio-project",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    },
    "dependencies": {
      "react": "^18.3.1",
      "react-dom": "^18.3.1",
      "react-router-dom": "^6.30.1",
      "lucide-react": "^0.462.0",
      "@tanstack/react-query": "^5.83.0",
      "class-variance-authority": "^0.7.1",
      "clsx": "^2.1.1",
      "tailwind-merge": "^2.6.0",
      "tailwindcss-animate": "^1.0.7"
    },
    "devDependencies": {
      "@types/react": "^18.3.12",
      "@types/react-dom": "^18.3.1",
      "@vitejs/plugin-react-swc": "^3.7.2",
      "autoprefixer": "^10.4.20",
      "postcss": "^8.5.1",
      "tailwindcss": "^3.4.15",
      "typescript": "^5.7.2",
      "vite": "^6.0.5"
    }
  }, null, 2),
  
  // Source files will be fetched dynamically
};

export const downloadProjectAsZip = async () => {
  const zip = new JSZip();
  
  try {
    // Add static files
    Object.entries(projectFiles).forEach(([path, content]) => {
      zip.file(path, content);
    });
    
    // Fetch and add source files
    const sourceFiles = [
      'src/App.tsx',
      'src/main.tsx',
      'src/index.css',
      'src/pages/Portfolio.tsx',
      'src/pages/NotFound.tsx',
      'src/components/Hero.tsx',
      'src/components/About.tsx',
      'src/components/Skills.tsx',
      'src/components/Projects.tsx',
      'src/components/Experience.tsx',
      'src/components/Contact.tsx',
      'src/components/Navigation.tsx',
      'src/lib/utils.ts',
      'tailwind.config.ts',
      'vite.config.ts',
      'index.html'
    ];

    // Fetch source files dynamically
    for (const filePath of sourceFiles) {
      try {
        const response = await fetch(`/${filePath}`);
        if (response.ok) {
          const content = await response.text();
          zip.file(filePath, content);
        }
      } catch (error) {
        console.warn(`Could not fetch ${filePath}:`, error);
      }
    }

    // Generate and download the zip
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-project.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
  } catch (error) {
    console.error('Error creating zip file:', error);
    alert('Error creating download file. Please try again.');
  }
};