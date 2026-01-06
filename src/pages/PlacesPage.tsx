import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function PlacesPage() {
  return (
    <>
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Lugares Emblemáticos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explora las locaciones más importantes de Hawkins y el Mundo del Revés
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Hawkins, Indiana</CardTitle>
            <CardDescription className="text-sm font-semibold text-accent">
              Ciudad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Un pequeño pueblo estadounidense que se convierte en el epicentro
              de eventos sobrenaturales. Hogar de los protagonistas y el
              Laboratorio Nacional de Hawkins.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default PlacesPage
