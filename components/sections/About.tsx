'use client';

import { motion } from 'framer-motion';
import { Clock3, Gem, Wallet, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reasons = [
  {
    icon: Clock3,
    title: 'Fast Delivery',
    description: 'Quick turnaround with clear timelines and smooth communication.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Gem,
    title: 'Premium Quality',
    description: 'High-end visual standards crafted for modern digital platforms.',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Flexible packages designed to fit startups and growing brands.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Target,
    title: 'Results-Driven Strategy',
    description: 'Every creative decision aligns with your growth KPIs.',
    color: 'from-cyan-400 to-blue-500',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Built for Conversion-Driven Brands
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            K2 Ad Studio combines creative storytelling and ad strategy to help
            businesses scale with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-cyan-400/20 bg-white/5 shadow-xl shadow-cyan-500/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.08, rotate: 8 }}
                    transition={{ duration: 0.6 }}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-bold text-white">{reason.title}</h3>
                  <p className="text-slate-300">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
