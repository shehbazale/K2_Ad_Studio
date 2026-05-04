'use client';

import { motion } from 'framer-motion';
import {
  Video,
  Megaphone,
  PenTool,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Video,
    title: 'Video Ad Production',
    description:
      'Cinematic short-form and long-form video ads designed to maximize attention and conversions.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Megaphone,
    title: 'Social Media Advertising',
    description:
      'Performance-focused ad campaigns for Meta, TikTok, and YouTube with precise audience targeting.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: PenTool,
    title: 'Branding & Design',
    description:
      'Premium visual identity systems that give your brand a modern and memorable digital presence.',
    color: 'from-cyan-500 to-sky-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            What We Do Best
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Conversion-focused creative services engineered for brands that want
            measurable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full cursor-pointer overflow-hidden border border-cyan-400/20 bg-white/5 shadow-xl shadow-cyan-500/10 backdrop-blur hover:-translate-y-1 hover:border-cyan-300/40 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-slate-300">
                      {service.description}
                    </p>
                    <div className="mt-6 h-0.5 w-14 rounded-full bg-cyan-400/60 transition-all duration-300 group-hover:w-24" />
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
