import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import MenuSection from './components/Menu';
import About from './components/About';
import Order from './components/Order';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center text-2xl font-bold">
                🍪
              </div>
              <h1 className="text-3xl font-black tracking-tight">
                <span className="text-red-600">COOKIE</span>
                <span className="text-black">SKATER</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('home')} className="text-black font-bold text-sm hover:text-red-600 transition">
                HOME
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-black font-bold text-sm hover:text-red-600 transition">
                MENU
              </button>
              <button onClick={() => scrollToSection('about')} className="text-black font-bold text-sm hover:text-red-600 transition">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('order')} className="text-black font-bold text-sm hover:text-red-600 transition">
                ORDER
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-red-600">
            <div className="px-4 py-3 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-black font-bold hover:text-red-600">
                HOME
              </button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left px-3 py-2 text-black font-bold hover:text-red-600">
                MENU
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-black font-bold hover:text-red-600">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('order')} className="block w-full text-left px-3 py-2 text-black font-bold hover:text-red-600">
                ORDER
              </button>
            </div>
          </div>
        )}
      </nav>

      <div id="home" className="pt-20">
        <Hero />
      </div>
      <div id="menu">
        <MenuSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="order">
        <Order />
      </div>
    </div>
  );
}

export default App;
