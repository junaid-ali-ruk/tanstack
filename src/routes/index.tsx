import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Welcome to TanStack Start Starter - A modern web application framework for building high-performance, SEO-friendly applications with React and TypeScript.',
      },
      {
        name: 'keywords',
        content: 'TanStack, React, TypeScript, Web Framework, Modern Web Development, SEO Friendly, Performance Optimized, Frontend Development',
      },
    ],
  }),
})

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to TanStack Start Starter</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern web application framework built with React, TypeScript, and TanStack Router for building high-performance, SEO-friendly applications.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Built with modern React 19 and TypeScript</li>
          <li>TanStack Router for efficient client-side navigation</li>
          <li>SEO optimized with proper meta tags and structured data</li>
          <li>Performance optimized with Vite and modern build tools</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>PWA ready with service worker support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <p className="mb-4">Ready to build your next web application?</p>
        <Button className="px-6 py-2">Get Started</Button>
      </section>

      <footer className="mt-auto text-center text-sm text-gray-500">
        <p>© 2025 TanStack Start Starter. All rights reserved.</p>
        <p>Built with ❤️ using TanStack technologies</p>
      </footer>
    </main>
  )
}
