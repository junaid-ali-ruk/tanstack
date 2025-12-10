import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?inline'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter | Modern Web Application Framework',
      },
      {
        name: 'description',
        content: 'TanStack Start Starter is a modern web application framework built with React, TypeScript, and TanStack Router for building high-performance, SEO-friendly applications.',
      },
      {
        name: 'keywords',
        content: 'TanStack, React, TypeScript, Web Framework, Modern Web Development, SEO Friendly, Performance Optimized',
      },
      {
        name: 'author',
        content: 'TanStack Team',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://tanstack-start-starter.com',
      },
      {
        property: 'og:title',
        content: 'TanStack Start Starter | Modern Web Application Framework',
      },
      {
        property: 'og:description',
        content: 'TanStack Start Starter is a modern web application framework built with React, TypeScript, and TanStack Router for building high-performance, SEO-friendly applications.',
      },
      {
        property: 'og:image',
        content: 'https://tanstack-start-starter.com/logo512.png',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'TanStack Start Starter | Modern Web Application Framework',
      },
      {
        name: 'twitter:description',
        content: 'TanStack Start Starter is a modern web application framework built with React, TypeScript, and TanStack Router for building high-performance, SEO-friendly applications.',
      },
      {
        name: 'twitter:image',
        content: 'https://tanstack-start-starter.com/logo512.png',
      },
      {
        name: 'twitter:site',
        content: '@tanstack',
      },
      {
        name: 'twitter:creator',
        content: '@tanstack',
      },
      // Canonical URL
      {
        name: 'canonical',
        content: 'https://tanstack-start-starter.com',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://tanstack-start-starter.com',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/logo192.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "TanStack Start Starter",
          "description": "TanStack Start Starter is a modern web application framework built with React, TypeScript, and TanStack Router for building high-performance, SEO-friendly applications.",
          "url": "https://tanstack-start-starter.com",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "All",
          "author": {
            "@type": "Organization",
            "name": "TanStack Team",
            "url": "https://tanstack.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://tanstack-start-starter.com"
          }
        }),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: appCss }} />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
