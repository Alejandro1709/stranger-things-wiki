import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import { Outlet } from 'react-router'

function AppLayout() {
  return (
    <div className="font-sans min-h-screen bg-background">
      <Header
        title="STRANGER THINGS"
        description="Una wiki completa sobre la serie"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
