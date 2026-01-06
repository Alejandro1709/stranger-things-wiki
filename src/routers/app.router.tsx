import { createBrowserRouter } from 'react-router'
import AppLayout from '@/layouts/AppLayout'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'
import SeasonsPage from '@/pages/SeasonsPage'
import PlacesPage from '@/pages/PlacesPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/temporadas',
        element: <SeasonsPage />,
      },
      {
        path: '/lugares',
        element: <PlacesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
