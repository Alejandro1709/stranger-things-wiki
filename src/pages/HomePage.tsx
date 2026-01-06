import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function HomePage() {
  return (
    <>
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Personajes Principales
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conoce a los héroes y aliados que luchan contra las fuerzas oscuras
          del Mundo del Revés
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="group hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="relative w-full aspect-4/3 bg-muted overflow-hidden">
            <img
              src="https://elcomercio.pe/resizer/v2/7LDWIDZJQVBEPKYLEBHCBP6QBY.jpg?auth=9fd8ecc234d2e8113e494758617151508814b0b3b0c3bfee0d0b7c835ceba21f&width=4000&height=2000&quality=75&smart=true"
              alt="Personaje nombre"
              className="object-cover transition-all duration-500 group-hover:scale-110 absolute -top-7.5 w-full h-102.5"
            />
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-xl">Nombre del personaje</CardTitle>
              <Badge className="bg-green-500" variant="default">
                Vivo
              </Badge>
            </div>
            <CardDescription className="text-sm">
              Nombre del actor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
              fugit culpa dignissimos quaerat. Beatae, praesentium molestias
              dolor iusto commodi repellendus quod tempore, quibusdam in ipsum,
              quasi id quis quidem?
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground">
                Habilidades:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="secondary" className="text-xs">
                  Volar
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Super Fuerza
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Telekinesis
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Leer mentes
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="relative w-full aspect-4/3 bg-muted overflow-hidden">
            <img
              src="https://elcomercio.pe/resizer/v2/7LDWIDZJQVBEPKYLEBHCBP6QBY.jpg?auth=9fd8ecc234d2e8113e494758617151508814b0b3b0c3bfee0d0b7c835ceba21f&width=4000&height=2000&quality=75&smart=true"
              alt="Personaje nombre"
              className="object-cover transition-all duration-500 group-hover:scale-110 absolute -top-7.5 w-full h-102.5"
            />
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-xl">Nombre del personaje</CardTitle>
              <Badge className="bg-green-500" variant="default">
                Vivo
              </Badge>
            </div>
            <CardDescription className="text-sm">
              Nombre del actor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
              fugit culpa dignissimos quaerat. Beatae, praesentium molestias
              dolor iusto commodi repellendus quod tempore, quibusdam in ipsum,
              quasi id quis quidem?
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground">
                Habilidades:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="secondary" className="text-xs">
                  Volar
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Super Fuerza
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Telekinesis
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Leer mentes
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="relative w-full aspect-4/3 bg-muted overflow-hidden">
            <img
              src="https://elcomercio.pe/resizer/v2/7LDWIDZJQVBEPKYLEBHCBP6QBY.jpg?auth=9fd8ecc234d2e8113e494758617151508814b0b3b0c3bfee0d0b7c835ceba21f&width=4000&height=2000&quality=75&smart=true"
              alt="Personaje nombre"
              className="object-cover transition-all duration-500 group-hover:scale-110 absolute -top-7.5 w-full h-102.5"
            />
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-xl">Nombre del personaje</CardTitle>
              <Badge className="bg-green-500" variant="default">
                Vivo
              </Badge>
            </div>
            <CardDescription className="text-sm">
              Nombre del actor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
              fugit culpa dignissimos quaerat. Beatae, praesentium molestias
              dolor iusto commodi repellendus quod tempore, quibusdam in ipsum,
              quasi id quis quidem?
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground">
                Habilidades:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="secondary" className="text-xs">
                  Volar
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Super Fuerza
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Telekinesis
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Leer mentes
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="relative w-full aspect-4/3 bg-muted overflow-hidden">
            <img
              src="https://elcomercio.pe/resizer/v2/7LDWIDZJQVBEPKYLEBHCBP6QBY.jpg?auth=9fd8ecc234d2e8113e494758617151508814b0b3b0c3bfee0d0b7c835ceba21f&width=4000&height=2000&quality=75&smart=true"
              alt="Personaje nombre"
              className="object-cover transition-all duration-500 group-hover:scale-110 absolute -top-7.5 w-full h-102.5"
            />
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-xl">Nombre del personaje</CardTitle>
              <Badge className="bg-green-500" variant="default">
                Vivo
              </Badge>
            </div>
            <CardDescription className="text-sm">
              Nombre del actor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
              fugit culpa dignissimos quaerat. Beatae, praesentium molestias
              dolor iusto commodi repellendus quod tempore, quibusdam in ipsum,
              quasi id quis quidem?
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground">
                Habilidades:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="secondary" className="text-xs">
                  Volar
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Super Fuerza
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Telekinesis
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Leer mentes
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="relative w-full aspect-4/3 bg-muted overflow-hidden">
            <img
              src="https://elcomercio.pe/resizer/v2/7LDWIDZJQVBEPKYLEBHCBP6QBY.jpg?auth=9fd8ecc234d2e8113e494758617151508814b0b3b0c3bfee0d0b7c835ceba21f&width=4000&height=2000&quality=75&smart=true"
              alt="Personaje nombre"
              className="object-cover transition-all duration-500 group-hover:scale-110 absolute -top-7.5 w-full h-102.5"
            />
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-xl">Nombre del personaje</CardTitle>
              <Badge className="bg-green-500" variant="default">
                Vivo
              </Badge>
            </div>
            <CardDescription className="text-sm">
              Nombre del actor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure
              fugit culpa dignissimos quaerat. Beatae, praesentium molestias
              dolor iusto commodi repellendus quod tempore, quibusdam in ipsum,
              quasi id quis quidem?
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-foreground">
                Habilidades:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="secondary" className="text-xs">
                  Volar
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Super Fuerza
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Telekinesis
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Leer mentes
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default HomePage
