import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-4xl font-bold">
      Hello World
      <Button>Button</Button>
    </div>
  )
}
