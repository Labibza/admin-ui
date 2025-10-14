import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:justify-between">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />

        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>
        <hr />
        
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 text-center grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-6 rounded">
            Basic
            <br />
            Rp 50.000
          </div>
          <div className="bg-blue-200 scale-105 md:scale-105 p-6 rounded">
            Pro
            <br />
            Rp 100.000
          </div>
          <div className="bg-gray-200 p-6 rounded">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-2">
          <header className="bg-gray-300 p-4 md:col-span-12 text-center">Header</header>
          <aside className="bg-gray-200 p-4 md:col-span-3">Sidebar</aside>
          <main className="bg-white p-4 border md:col-span-9">Content</main>
          <footer className="bg-gray-300 p-4 md:col-span-12 text-center">Footer</footer>
        </div>
        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;