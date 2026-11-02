import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-white shadow-sm py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">
            Photo Gallery
          </h1>

          <p className="text-gray-500 mt-1">
            Discover beautiful photography from around the world.
          </p>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <Gallery/>
      </main>
      
    </div>
  )
}

export default App