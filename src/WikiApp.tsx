import { RouterProvider } from 'react-router'
import { appRouter } from './routers/app.router'

function WikiApp() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default WikiApp
