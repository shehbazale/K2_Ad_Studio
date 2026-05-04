'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/components/data/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/75 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_10px_40px_rgba(6,182,212,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/bg.png"
              alt="K2 Ad Studio logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border border-cyan-400/60 object-cover shadow-[0_0_18px_rgba(34,211,238,0.45)]"
            />
            <span className="text-xl font-bold tracking-tight text-white">
              K2 <span className="text-cyan-400">Ad Studio</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-slate-200 hover:text-cyan-300' : 'text-slate-200 hover:text-cyan-300'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
              </motion.button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-200' : 'text-slate-200'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-200' : 'text-slate-200'} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors hover:bg-cyan-400/10 ${
                  isScrolled ? 'text-slate-200' : 'text-slate-200'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-cyan-400 text-black hover:bg-cyan-300"
            >
              Get a Quote
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
