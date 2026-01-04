export default function Order() {
  return (
    <div className="bg-red-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8">READY TO ORDER?</h2>
        <p className="text-xl mb-12">
          Fresh cookies delivered to your door. Order online and get 10% off your first order!
        </p>
        <button className="bg-black text-white px-12 py-4 font-bold text-lg hover:bg-gray-900 transition">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
