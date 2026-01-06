import { Button } from './ui/button'

interface NavigationProps {
  activeSection: 'characters' | 'seasons' | 'locations'
  onSectionChange: (section: 'characters' | 'seasons' | 'locations') => void
}

function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="border-b border-border bg-secondary/30 sticky top-24.25 md:top-28.25 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 py-3 overflow-x-auto">
          <Button
            variant={activeSection === 'characters' ? 'default' : 'ghost'}
            onClick={() => onSectionChange('characters')}
            className="whitespace-nowrap cursor-pointer"
          >
            Personajes
          </Button>
          <Button
            variant={activeSection === 'seasons' ? 'default' : 'ghost'}
            onClick={() => onSectionChange('seasons')}
            className="whitespace-nowrap cursor-pointer"
          >
            Temporadas
          </Button>
          <Button
            variant={activeSection === 'locations' ? 'default' : 'ghost'}
            onClick={() => onSectionChange('locations')}
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
