import { Button } from './ui/button'

function Navigation() {
  return (
    <nav className="border-b border-border bg-secondary/30 sticky top-24.25 md:top-28.25 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 py-3 overflow-x-auto">
          <Button
            variant="default"
            className="whitespace-nowrap cursor-pointer"
          >
            Personajes
          </Button>
          <Button
            variant="default"
            className="whitespace-nowrap cursor-pointer"
          >
            Temporadas
          </Button>
          <Button
            variant="default"
            className="whitespace-nowrap cursor-pointer"
          >
            Lugares
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
