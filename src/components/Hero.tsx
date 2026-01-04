export default function Hero() {
  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            #f5f5f5 40px,
            #f5f5f5 80px,
            #f0d9d3 80px,
            #f0d9d3 120px
          )
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col justify-center">
          <div className="mb-8 bg-black text-white px-6 py-2 inline-block w-fit">
            <span className="text-red-600 mr-2">★</span>
            <span className="font-bold">EST. 2024</span>
            <span className="text-red-600 ml-2">★</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-tight mb-6">
            <div className="text-red-600">COOKIE</div>
            <div className="text-black">SKATER</div>
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            Radical cookies baked fresh daily. No tricks, just treats that'll have you grinding for more.
          </p>

          <div className="flex gap-4 mb-8">
            <button className="bg-red-600 text-white px-8 py-3 font-bold text-lg hover:bg-red-700 transition">
              VIEW MENU →
            </button>
            <button className="bg-white border-2 border-black text-black px-8 py-3 font-bold text-lg hover:bg-black hover:text-white transition">
              ORDER NOW
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center relative">
          <div className="relative">
            <svg className="absolute inset-0 w-80 h-80" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#f59e8b" strokeWidth="2" strokeDasharray="10,10" opacity="0.6" />
            </svg>

            <div className="w-80 h-80 bg-red-600 rounded-full flex items-center justify-center relative shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🍪</div>
                <div className="text-white font-bold text-sm tracking-wider">FRESH DAILY</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 bg-black text-white px-4 py-2 font-black text-lg">
            RAD!
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 font-bold flex items-center gap-2 hover:bg-red-700 transition cursor-pointer">
            <span className="text-xl">⚡</span>
            SKATE & BAKE
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 flex bg-striped" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          #e63946 0px,
          #e63946 40px,
          #000 40px,
          #000 80px,
          #fff 80px,
          #fff 120px
        )`
      }}>
      </div>
    </div>
  );
}
