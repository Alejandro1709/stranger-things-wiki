import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function SeasonsPage() {
  return (
    <>
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Temporadas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Un viaje a través de las cinco temporadas de misterio, horror y
          aventura
        </p>
      </div>

      <div className="space-y-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <CardTitle className="text-2xl">Temporada 1</CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  The Vanishing of Will Byers
                </CardDescription>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">8 episodios</Badge>
                <Badge variant="outline">2016</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="leading-relaxed text-muted-foreground">
              Will Byers desaparece misteriosamente y sus amigos descubren a una
              niña con poderes sobrenaturales. Juntos descubren un mundo
              paralelo oscuro conocido como el Mundo del Revés.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-sm font-semibold text-foreground">
                Villano principal:
              </span>
              <Badge className="bg-destructive text-destructive-foreground">
                Demogorgon
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SeasonsPage
