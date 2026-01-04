export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
          ABOUT US
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cookieskater was born from a simple idea: combine two passions into one. Skateboarding culture and delicious homemade cookies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every single cookie is baked fresh daily with premium ingredients. We never use preservatives or shortcuts. We just bake with love and deliver radical flavor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Supporting the local skate community is at the heart of everything we do. We're more than just a cookie shop—we're a lifestyle.
            </p>
          </div>

          <div className="bg-black text-white p-12 border-4 border-red-600">
            <h3 className="text-3xl font-black mb-8">WHY COOKIESKATER?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 font-black mr-4 text-2xl">→</span>
                <span className="font-bold text-lg">Fresh baked daily</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-black mr-4 text-2xl">→</span>
                <span className="font-bold text-lg">Premium ingredients only</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-black mr-4 text-2xl">→</span>
                <span className="font-bold text-lg">Zero preservatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-black mr-4 text-2xl">→</span>
                <span className="font-bold text-lg">Supporting skate culture</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
