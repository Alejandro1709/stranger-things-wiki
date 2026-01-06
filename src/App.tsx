import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="font-sans min-h-screen bg-background">
      <Header
        title="STRANGER THINGS"
        description="Una wiki completa sobre la serie"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <h1>Holaaaaa</h1>
      </main>

      <Footer />
    </div>
  )
}

export default App
