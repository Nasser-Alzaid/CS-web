export default function Menu() {
  const cookies = [
    { name: "Classic Chocolate Chip", price: "$3.99" },
    { name: "Double Chocolate Fudge", price: "$4.49" },
    { name: "Red Velvet Dream", price: "$4.49" },
    { name: "Peanut Butter Crunch", price: "$4.29" },
    { name: "Snickerdoodle", price: "$3.99" },
    { name: "White Chocolate Macadamia", price: "$4.49" },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-black mb-12 text-center">
          OUR MENU
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cookies.map((cookie, idx) => (
            <div key={idx} className="bg-white p-8 border-2 border-black hover:shadow-lg transition">
              <h3 className="text-2xl font-black mb-4">{cookie.name}</h3>
              <div className="text-3xl font-black text-red-600">{cookie.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
