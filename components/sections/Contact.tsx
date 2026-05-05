'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, MessageCircle, MessageCircleMore } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: '+92 3400113341',
      link: 'https://wa.me/3400113341',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'baltiboy477@fgmail.com',
      link: 'mailto:hello@k2adstudio.com',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Skardu, Pakistan',
      link: '#',
      color: 'from-sky-500 to-cyan-500',
    },
  ];

  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us your goals and we will craft a conversion-focused ad strategy
            for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border border-cyan-400/20 bg-white/5 shadow-xl shadow-cyan-500/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
                  <p className="text-slate-300">{info.content}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

        <div className="mb-10 text-center">
          <a
            href="https://wa.me/3400113341"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-3 font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-colors hover:bg-cyan-300"
          >
            <MessageCircleMore className="h-10 w-10" />
                    
          </a>
        </div>
  {/* 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border border-cyan-400/20 bg-white/5 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-semibold text-slate-200">
                        Your Name
                      </label>
                      <Input
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12 border-cyan-400/30 bg-black/35 text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300"
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-semibold text-slate-200">
                        Email Address
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="abc@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 border-cyan-400/30 bg-black/35 text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                    <label className="text-sm font-semibold text-slate-200">
                      Your Message
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="border-cyan-400/30 bg-black/35 text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-300"
                    />
                  </motion.div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full bg-cyan-400 py-6 text-lg text-black hover:bg-cyan-300"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}
      </div>
    </section>
  );
}
