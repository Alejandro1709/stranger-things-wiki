import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="font-sans min-h-screen bg-background">
      <Header
        title="STRANGER THINGS"
        description="Una wiki completa sobre la serie"
      />

      <Navigation activeSection="characters" onSectionChange={() => {}} />
    </div>
  )
}

export default App
