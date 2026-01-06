import { RouterProvider } from 'react-router'
import { appRouter } from './routers/app.router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient()

function WikiApp() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={appRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default WikiApp
