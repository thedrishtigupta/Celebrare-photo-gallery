import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-ivory">

      <header className="bg-ivory px-6 pt-10 pb-5 md:pt-12 md:pb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl font-medium text-forest text-center tracking-tight">
            Photo Gallery
          </h1>

          <p className="font-sans text-sm md:text-base text-charcoal/70 mt-3 text-center">
            Discover beautiful photography from around the world.
          </p>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <Gallery/>
      </main>

    </div>
  )
}

export default App