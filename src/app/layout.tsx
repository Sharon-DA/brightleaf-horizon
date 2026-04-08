// src/app/layout.tsx
import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'BrightLeaf Horizon | Strategic Brand Growth Agency',
  description: 'Strategic brand growth partner delivering market positioning, creative storytelling, and digital marketing solutions. Transform your brand and drive measurable results across healthcare, clean energy, architecture, and more.',
  keywords: 'brand strategy, brand positioning, marketing agency, creative storytelling, digital marketing, brand growth',
  openGraph: {
    title: 'BrightLeaf Horizon | Strategic Brand Growth Agency',
    description: 'We translate complex market insights into compelling narratives that move audiences, build authority, and drive measurable growth.',
    url: 'https://brightleafhorizon.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="icon" type="image/jpeg" href="/blh-logo.jpeg" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {/* Sticky Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <img src="/blh-logo.jpeg" alt="BrightLeaf Horizon" className="h-16 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">BrightLeaf</h1>
                <p className="text-xs text-amber-600 font-semibold">HORIZON</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-amber-600 transition font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 transition font-medium">About Us</Link>
              <Link href="/#services" className="text-gray-700 hover:text-amber-600 transition font-medium">Services</Link>
              <Link href="/#cases" className="text-gray-700 hover:text-amber-600 transition font-medium">Case Studies</Link>
              <Link href="/contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 hover:opacity-70 transition" id="mobile-menu-btn">
              <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <nav id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-3 animate-in fade-in">
            <Link href="/" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">About Us</Link>
            <Link href="/#services" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Services</Link>
            <Link href="/#contact" className="block bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium text-center">Contact</Link>
          </nav>
        </header>

        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 text-gray-300 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">BrightLeaf Horizon</h3>
                <p className="text-sm leading-relaxed">Strategic growth partners for visionary brands. Since 2024, we have translated market insights into compelling narratives that drive measurable impact.</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-amber-400 transition">About Us</Link></li>
                  <li><Link href="/#services" className="hover:text-amber-400 transition">Services</Link></li>
                  <li><Link href="/#cases" className="hover:text-amber-400 transition">Case Studies</Link></li>
                  <li><Link href="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 text-lg">📞</span>
                    <a href="tel:3035216710" className="hover:text-amber-400 transition">303-521-6710</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 text-lg">✉️</span>
                    <a href="mailto:brightleafhealth@brightleafh.com" className="hover:text-amber-400 transition break-all">brightleafhealth@brightleafh.com</a>
                  </li>
                  <li className="pt-2 border-t border-gray-800 mt-2">
                    <p className="text-gray-400 font-semibold mb-1 uppercase text-[10px] tracking-widest">Business Hours</p>
                    <p className="text-xs">Mon-Fri: 10am – 5pm</p>
                    <p className="text-xs">Sat: 1pm – 5pm</p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Location</h4>
                <div className="text-sm space-y-1 text-gray-400">
                  <p className="text-white font-medium">Denver Office</p>
                  <p>1801 California St,</p>
                  <p>Denver, CO 80202,</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-700 text-sm text-center">
              <p>&copy; 2024–2026 BrightLeaf Horizon. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{__html: `
          if (typeof document !== 'undefined') {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            if (menuBtn && mobileMenu) {
              menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
              });
              mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                  mobileMenu.classList.add('hidden');
                });
              });
            }
          }
        `}} />
      </body>
    </html>
  );
}