'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/K2%20ad%20poster.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/65" />
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.35) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 60%, rgba(37, 99, 235, 0.35) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.35) 0%, transparent 55%)',
              'radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.35) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {[...Array(28)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm">
              AI-powered ad production for growth-focused brands
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight text-white md:text-6xl"
            >
              We Create High-Converting Video Ads for Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg text-slate-300"
            >
              Boost your brand with cinematic AI-powered ads that drive real
              results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-cyan-400 px-8 py-6 text-lg text-black hover:bg-cyan-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-cyan-400/50 bg-white/5 px-8 py-6 text-lg text-cyan-100 hover:bg-cyan-400/15"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="rounded-3xl border border-cyan-400/25 bg-white/5 p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/K2%20ad%20poster.png"
                  alt="K2 Ad Studio poster"
                  width={1200}
                  height={900}
                  className="h-[340px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cyan-300/50 p-2">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-cyan-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
