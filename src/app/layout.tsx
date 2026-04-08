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
              <Link href="/services" className="text-gray-700 hover:text-amber-600 transition font-medium">Services</Link>
              <Link href="/cases" className="text-gray-700 hover:text-amber-600 transition font-medium">Case Studies</Link>
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
            <Link href="/services" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Services</Link>
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
                  <li><Link href="/services" className="hover:text-amber-400 transition">Services</Link></li>
                  <li><Link href="/cases" className="hover:text-amber-400 transition">Case Studies</Link></li>
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
                  <li className="pt-2 border-t border-gray-800 mt-2 flex items-center gap-4">
                    <div>
                      <p className="text-gray-400 font-semibold mb-1 uppercase text-[10px] tracking-widest">Business Hours</p>
                      <p className="text-xs">Mon-Fri: 10am – 5pm</p>
                      <p className="text-xs">Sat: 1pm – 5pm</p>
                    </div>
                    <div className="flex gap-3 ml-2">
                      <a href="https://www.linkedin.com/company/brightleaf-horizon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-amber-400 transition">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/></svg>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61587168273948" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-amber-400 transition">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.734-.593-1.326-1.326-1.326z"/></svg>
                      </a>
                      <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-amber-400 transition">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47a2.5 2.5 0 0 1 3.54 3.54l-4.88 4.88 4.88 4.88a2.5 2.5 0 0 1-3.54 3.54l-4.88-4.88-4.88 4.88a2.5 2.5 0 0 1-3.54-3.54l4.88-4.88-4.88-4.88a2.5 2.5 0 0 1 3.54-3.54l4.88 4.88 4.88-4.88z"/></svg>
                      </a>
                    </div>
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