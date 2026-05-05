'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'E-commerce Product Launch Ad',
    category: 'Video Ads',
    video: '/Video/Numberdar%20paint%20final.mp4',
    image: '/food_menu.jpg',
    description:
      'Cinematic launch video with a data-driven script that improved purchase intent and ad recall.',
  },
  {
    id: 2,
    title: 'Digital Marketing Campaign',
    category: 'Graphic Design',
    image: '/digital_marketing.png',
    description:
      'Multi-platform ad set designed for qualified leads and faster response rates for digital marketing campaigns.',
  },
  {
    id: 3,
    title: 'Fitness Brand Retargeting Reel',
    category: 'Video Ads',
    video: '/Video/Zain%20trader%20video.mp4',
    image: '/gym_thumbnail.png',
    description:
      'Retargeting-focused visual storytelling that boosted click-through performance.',
  },
  {
    id: 4,
    title: 'Restaurant Awareness Creative',
    category: 'Graphic Design',
    image: '/menu.png',
    description:
      'High-end brand visuals and ad creative optimized for local reach and social engagement.',
  },
  {
    id: 5,
    title: 'Travel Agency Promo Spot',
    category: 'Video Ads',
    video: '/Video/meta_ad.mp4',
    image: '/luxus_tour.jpg',
    description:
      'Story-led promotional ad crafted for brand trust and high watch-through rates.',
  },
  {
    id: 6,
    title: 'Restaurant Menu',
    category: 'Graphic Design',
    image: '/food_menu.jpg',
    description:
      'Menu design for a restaurant',
  },
  {
    id: 7,
    title: 'Tourism Poster',
    category: 'Graphic Design',
    image: '/tour.png',
    description:
      'Tourism poster for a tourism agency',
  },
  {
    id: 7,
    title: 'Quran Poster',
    category: 'Graphic Poster',
    image: 'quran.png',
    description:
      'Quran poster for a Quran academy',
  },
];

const categories = ['All', 'Video Ads', 'Graphic Design'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Portfolio Showcase
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore selected high-converting ad campaigns and creative executions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                  : 'border-cyan-400/30 bg-transparent text-cyan-100 hover:bg-cyan-400/10'
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-cyan-400/15 shadow-lg shadow-cyan-900/20"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full h-full">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="h-full w-full object-cover blur-[1.5px] transition-transform duration-500 group-hover:scale-110"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute left-4 top-4 rounded-full border border-cyan-300/60 bg-black/65 p-1.5 backdrop-blur">
                    <Image
                      src="/bg.png"
                      alt="K2 Ad Studio logo"
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  </div>
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full border border-cyan-300/60 bg-black/60 p-3 backdrop-blur">
                        <PlayCircle className="h-8 w-8 text-cyan-300" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-cyan-300 text-sm font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                    <span className="mt-3 inline-block text-sm text-slate-200">
                      View project details
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-h-[85vh] max-w-4xl overflow-hidden border border-cyan-400/20 bg-slate-950 text-slate-100">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-white">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {selectedProject.video ? (
                <div className="relative mb-6 w-full overflow-hidden rounded-lg bg-black">
                  <video
                    src={selectedProject.video}
                    className="max-h-[60vh] w-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : (
                <div className="mb-6 max-h-[55vh] w-full overflow-y-auto rounded-lg">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={1200}
                    height={1800}
                    className="h-auto w-full object-contain"
                  />
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-slate-300">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
