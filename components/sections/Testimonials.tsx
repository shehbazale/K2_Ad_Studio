'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    role: 'Founder, GlowKart',
    content:
      'K2 Ad Studio turned our product videos into conversion machines. We saw better ROAS within the first two weeks.',
    rating: 5,
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    name: 'Usman Riaz',
    role: 'Marketing Lead, UrbanHomes',
    content:
      'Fast communication, premium ad quality, and strong strategy. Our lead generation campaign improved immediately.',
    rating: 5,
    image:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    name: 'Hamza Ali',
    role: 'CEO, FitPrime',
    content:
      'Their creative team knows exactly how to hook viewers in the first 3 seconds. That changed our ad performance.',
    rating: 5,
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real feedback from brands that trust us with performance-focused
            ad creative.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-cyan-400/20 bg-white/5 backdrop-blur shadow-xl shadow-cyan-500/10">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-cyan-400/50"
                      unoptimized
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-5 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-cyan-300 text-cyan-300" />
                    ))}
                  </div>
                  <p className="leading-relaxed text-slate-200">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
