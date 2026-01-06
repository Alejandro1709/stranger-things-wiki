import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '@/actions/characters.action'
import PageHeader from '@/components/common/PageHeader'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function HomePage() {
  const {
    data: characters,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
  })

  return (
    <>
      <PageHeader
        title="Personajes Principales"
        description="Conoce a los héroes y aliados que luchan contra las fuerzas oscuras del
        Mundo del Revés"
      />

      {isLoading ? <p>Loading...</p> : null}
      {isError ? <p>{error.message}</p> : null}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {characters && characters.length > 0
          ? characters?.map((character) => (
              <Card
                className="group hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                key={character.id}
              >
                {/* <div className="relative w-full aspect-4/3 bg-muted overflow-hidden">
                  <img
                    src="https://elcomercio.pe/resizer/v2/7LDWIDZJQVBEPKYLEBHCBP6QBY.jpg?auth=9fd8ecc234d2e8113e494758617151508814b0b3b0c3bfee0d0b7c835ceba21f&width=4000&height=2000&quality=75&smart=true"
                    alt="Personaje nombre"
                    className="object-cover transition-all duration-500 group-hover:scale-110 absolute -top-7.5 w-full h-102.5"
                  />
                </div> */}

                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{character.name}</CardTitle>
                    <Badge
                      className={`${
                        character.status === 'vivo'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                      variant="default"
                    >
                      {character.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {character.actor}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {character.description}
                  </p>

                  {character.abilities && character.abilities.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">
                        Habilidades:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {character.abilities.map((ability, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          : null}
      </div>
    </>
  )
}

export default HomePage
