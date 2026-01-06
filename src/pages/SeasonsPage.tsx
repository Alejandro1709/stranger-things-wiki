import { getSeasons } from '@/actions/seasons.action'
import PageHeader from '@/components/common/PageHeader'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'

function SeasonsPage() {
  const {
    data: seasons,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['seasons'],
    queryFn: getSeasons,
  })

  return (
    <>
      <PageHeader
        title="Temporadas"
        description="Un viaje a través de las cinco temporadas de misterio, horror y
          aventura"
      />

      {isLoading ? <p>Loading...</p> : null}
      {isError ? <p>{error.message}</p> : null}

      {seasons ? (
        <div className="space-y-4">
          {seasons.length > 0
            ? seasons.map((season) => (
                <Card
                  className="hover:shadow-lg transition-shadow"
                  key={season.id}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <CardTitle className="text-2xl">
                          Temporada {season.number}
                        </CardTitle>
                        <CardDescription className="text-base font-semibold text-foreground">
                          {season.title}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline">
                          {season.episodes} episodios
                        </Badge>
                        <Badge variant="outline">{season.releaseYear}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="leading-relaxed text-muted-foreground">
                      {season.description}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-sm font-semibold text-foreground">
                        Villano principal:
                      </span>
                      <Badge className="bg-destructive text-destructive-foreground">
                        {season.villain}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))
            : null}
        </div>
      ) : null}
    </>
  )
}

export default SeasonsPage
