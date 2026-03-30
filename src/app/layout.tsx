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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%232563eb' width='100' height='100'/><text x='50' y='70' font-size='60' font-weight='bold' fill='white' text-anchor='middle'>BH</text></svg>" />
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
              <Link href="#services" className="text-gray-700 hover:text-amber-600 transition font-medium">Services</Link>
              <Link href="#cases" className="text-gray-700 hover:text-amber-600 transition font-medium">Case Studies</Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-amber-600 transition font-medium">Testimonials</Link>
              <Link href="#contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium">Contact</Link>
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
            <Link href="#services" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Services</Link>
            <Link href="#cases" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Case Studies</Link>
            <Link href="#testimonials" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Testimonials</Link>
            <Link href="#contact" className="block bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium text-center">Contact</Link>
          </nav>
        </header>

        {/* Main Content - Add padding to account for fixed header */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 text-gray-300 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">BrightLeaf Horizon</h3>
                <p className="text-sm leading-relaxed">Strategic growth partners for visionary brands. We translate market insights into compelling narratives that drive measurable impact.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="hover:text-amber-400 transition">Brand Strategy</a></li>
                  <li><a href="#services" className="hover:text-amber-400 transition">Creative Storytelling</a></li>
                  <li><a href="#services" className="hover:text-amber-400 transition">Digital Marketing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#cases" className="hover:text-amber-400 transition">Case Studies</a></li>
                  <li><a href="#testimonials" className="hover:text-amber-400 transition">Testimonials</a></li>
                  <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-400 transition">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition">Twitter</a></li>
                  <li><a href="mailto:hello@brightleaf.com" className="hover:text-amber-400 transition">Email</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-700 text-sm text-center">
              <p>&copy; 2026 BrightLeaf Horizon. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Mobile Menu Toggle Script */}
        <script dangerouslySetInnerHTML={{__html: `
          if (typeof document !== 'undefined') {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            if (menuBtn && mobileMenu) {
              menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
              });
              // Close menu when a link is clicked
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