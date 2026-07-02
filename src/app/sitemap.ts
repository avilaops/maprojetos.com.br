import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avilaops.github.io/matheus';
  
  // Base routes
  const routes = ['', '/projetos', '/servicos', '/sobre', '/contato'];
  
  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic project routes
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projetos/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...projectUrls];
}
