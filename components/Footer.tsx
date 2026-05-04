'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="border-t border-cyan-400/20 bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-9 w-9 rounded-full border border-cyan-400/60 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
              <span className="text-2xl font-bold">K2 Ad Studio</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium video ad production and performance-focused creative for fast-growing brands.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Pricing', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-cyan-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>hello@k2adstudio.com</li>
              <li>+92 3400113341</li>
              <li>Skardu, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} K2 Ad Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
