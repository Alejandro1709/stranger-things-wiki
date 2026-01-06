import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-primary">Esta página no existe</h1>

      <Button variant="default" asChild>
        <Link to="/">Ir al inicio</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
