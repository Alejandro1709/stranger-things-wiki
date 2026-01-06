import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <>
      <h1 className="text-3xl font-primary">Esta página no existe</h1>

      <Button variant="default" asChild>
        <Link to="/">Ir al inicio</Link>
      </Button>
    </>
  )
}

export default NotFoundPage
