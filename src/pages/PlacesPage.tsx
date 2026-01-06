import { getLocations } from '@/actions/locations.action'
import PageHeader from '@/components/common/PageHeader'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'

function PlacesPage() {
  const {
    data: locations,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  })

  return (
    <>
      <PageHeader
        title="Lugares Emblemáticos"
        description="Explora las locaciones más importantes de Hawkins y el Mundo del Revés"
      />

      {isLoading ? <p>Loading...</p> : null}
      {isError ? <p>{error.message}</p> : null}

      {locations ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.length > 0
            ? locations.map((location) => (
                <Card
                  className="hover:shadow-lg transition-shadow"
                  key={location.id}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{location.name}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-accent">
                      {location.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {location.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            : null}
        </div>
      ) : null}
    </>
  )
}

export default PlacesPage
