// 'use client';

// import { motion } from 'framer-motion';
// import { Check } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

// const plans = [
//   {
//     name: 'Basic',
//     price: '$199',
//     description: 'Best for small businesses testing video ads.',
//     features: ['1 Video Ad', '2 Ad Variations', 'Basic Script Support', '3 Days Delivery'],
//     highlighted: false,
//   },
//   {
//     name: 'Standard',
//     price: '$399',
//     description: 'Perfect for scaling brands and regular campaigns.',
//     features: [
//       '3 Video Ads',
//       '6 Ad Variations',
//       'Advanced Script + Hooks',
//       'Priority Delivery',
//     ],
//     highlighted: true,
//   },
//   {
//     name: 'Premium',
//     price: '$699',
//     description: 'Built for aggressive growth and full-funnel performance.',
//     features: ['6 Video Ads', 'A/B Creative Strategy', 'Creative Direction', 'Weekly Optimization'],
//     highlighted: false,
//   },
// ];

// export default function Pricing() {
//   return (
//     <section id="pricing" className="bg-black py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
//             Pricing
//           </span>
//           <h2 className="mt-2 mb-4 text-4xl font-bold text-white md:text-5xl">
//             Flexible Packages for Every Stage
//           </h2>
//           <p className="mx-auto max-w-2xl text-lg text-slate-300">
//             Transparent pricing built around outcomes, speed, and creative quality.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={plan.name}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.08 }}
//             >
//               <Card
//                 className={`h-full border transition-all duration-300 ${
//                   plan.highlighted
//                     ? 'border-cyan-300 bg-cyan-400/10 shadow-2xl shadow-cyan-500/20'
//                     : 'border-cyan-400/20 bg-white/5 shadow-xl shadow-cyan-500/10'
//                 }`}
//               >
//                 <CardContent className="p-8">
//                   {plan.highlighted && (
//                     <span className="mb-5 inline-flex rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold uppercase text-black">
//                       Most Popular
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
//                   <p className="mt-2 text-slate-300">{plan.description}</p>
//                   <div className="mt-6 text-4xl font-extrabold text-white">{plan.price}</div>
//                   <ul className="mt-6 space-y-3">
//                     {plan.features.map((feature) => (
//                       <li key={feature} className="flex items-center gap-3 text-slate-200">
//                         <Check className="h-4 w-4 text-cyan-300" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Button
//                     className={`mt-8 w-full ${
//                       plan.highlighted
//                         ? 'bg-cyan-400 text-black hover:bg-cyan-300'
//                         : 'border border-cyan-400/35 bg-transparent text-cyan-100 hover:bg-cyan-400/15'
//                     }`}
//                   >
//                     Get Started
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter Reel',
    price: 'PKR 1,700',
    description: 'High-impact 30-second ad designed for quick engagement and conversions.',
    features: [
      '30 Second Video Ad',
      '1 Concept + 2 Variations',
      'Basic Script + Hook',
      'Fast Delivery',
    ],
    highlighted: false,
  },
  {
    name: 'Growth Film',
    price: 'PKR 3,400',
    description: 'A powerful 60-second video crafted to tell your brand story and drive results.',
    features: [
      '1 Minute Video Ad',
      '2 Concepts + Variations',
      'Advanced Scriptwriting',
      'Optimized for Ads Performance',
    ],
    highlighted: true,
  },
  {
    name: 'Dominance Cut',
    price: 'PKR 4,500',
    description: 'Premium 90-second cinematic ad built for maximum impact and brand authority.',
    features: [
      '1 Min 30 Sec Video Ad',
      'Full Creative Strategy',
      'Cinematic Direction',
      'Priority Delivery + Revisions',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-bold text-white md:text-5xl">
            Choose Your Video Package
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Premium video ads tailored to your brand — based on duration, impact, and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                className={`h-full border transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-cyan-300 bg-cyan-400/10 shadow-2xl shadow-cyan-500/20'
                    : 'border-cyan-400/20 bg-white/5 shadow-xl shadow-cyan-500/10'
                }`}
              >
                <CardContent className="p-8">
                  {plan.highlighted && (
                    <span className="mb-5 inline-flex rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold uppercase text-black">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-slate-300">{plan.description}</p>
                  <div className="mt-6 text-4xl font-extrabold text-white">{plan.price}</div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-200">
                        <Check className="h-4 w-4 text-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button
                    className={`mt-8 w-full ${
                      plan.highlighted
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                        : 'border border-cyan-400/35 bg-transparent text-cyan-100 hover:bg-cyan-400/15'
                    }`}
                  >
                    Get Started
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}