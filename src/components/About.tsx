

// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Sparkles, Heart, Shield } from 'lucide-react'

// const About = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-50px" })

//   const features = [
//     {
//       icon: Sparkles,
//       title: 'Excellence',
//       description: 'Des prestations de haute qualité réalisées par des expertes passionnées.',
//       accent: 'from-prune/10 to-rose/5',
//       iconBg: 'from-prune to-purple-600',
//     },
//     {
//       icon: Heart,
//       title: 'Passion',
//       description: 'Un amour du métier qui se ressent dans chaque détail de nos services.',
//       accent: 'from-rose/10 to-champagne/5',
//       iconBg: 'from-rose to-champagne',
//     },
//     {
//       icon: Shield,
//       title: 'Confiance',
//       description: 'Des produits premium et une hygiène irréprochable pour votre sécurité.',
//       accent: 'from-champagne/10 to-prune/5',
//       iconBg: 'from-champagne to-prune',
//     }
//   ]

//   return (
//     <section id="about" className="relative py-24 overflow-hidden lg:py-32 bg-pearl">
      
//       {/* Fond décoratif subtil */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-prune/5 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

//       <div className="relative max-w-6xl px-6 mx-auto lg:px-10">
        
//         {/* En-tête */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="mb-20 lg:mb-28"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <span className="w-8 h-[1px] bg-gradient-to-r from-champagne to-transparent" />
//             <motion.p
//               initial={{ opacity: 0, x: -10 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="text-xs font-medium tracking-[0.4em] uppercase text-champagne"
//             >
//               Notre univers
//             </motion.p>
//           </div>
          
//           <h2 className="mb-8 text-4xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
//             L'excellence
//             <br />
//             <span className="italic font-normal text-prune">à la française</span>
//           </h2>

//           <p className="max-w-2xl text-base font-light leading-relaxed lg:text-lg text-elegant/60">
//             Bienvenue dans l'univers DYDY SHOP, où la beauté rencontre l'excellence. 
//             Notre institut est né d'une passion pour l'élégance féminine et le bien-être, 
//             offrant une expérience unique à chaque femme qui franchit nos portes.
//           </p>
//         </motion.div>

//         {/* Features */}
//         <div className="grid grid-cols-1 gap-6 mb-20 lg:gap-8 md:grid-cols-3 lg:mb-28">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
//               whileHover={{ y: -6 }}
//               className="relative p-8 transition-all duration-500 bg-white shadow-sm group rounded-2xl hover:shadow-xl"
//             >
//               {/* Dégradé subtil au hover */}
//               <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
//               <div className="relative z-10">
//                 {/* Icône */}
//                 <div className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
//                   <feature.icon className="w-6 h-6 text-white" />
//                 </div>
                
//                 {/* Numéro */}
//                 <span className="block mb-4 text-xs font-light tracking-[0.3em] text-elegant/15 uppercase">
//                   {String(index + 1).padStart(2, '0')}
//                 </span>
                
//                 <h3 className="mb-3 text-xl font-medium font-playfair text-elegant">
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-sm font-light leading-relaxed transition-colors duration-500 text-elegant/40 group-hover:text-elegant/60">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Citation + Chiffres */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="relative overflow-hidden bg-white shadow-sm rounded-3xl"
//         >
//           <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-bl from-rose/10 to-transparent -translate-y-1/3 translate-x-1/3" />
          
//           <div className="relative p-10 lg:p-14">
//             {/* Grand guillemet */}
//             <span className="absolute font-light leading-none top-8 left-8 text-8xl lg:text-9xl text-prune/5 font-playfair">
//               "
//             </span>
            
//             <div className="relative max-w-3xl mx-auto text-center">
//               <p className="mb-12 text-base italic font-light leading-relaxed lg:text-xl text-elegant/60">
//                 Chez DYDY SHOP, nous croyons que chaque femme mérite de se sentir belle et confiante. 
//                 Notre mission est de révéler votre beauté naturelle à travers des soins personnalisés 
//                 et des produits d'exception.
//               </p>
              
//               {/* Chiffres */}
//               <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/5">
//                 {[
//                   { number: '10+', label: 'Années d\'expérience' },
//                   { number: '1000+', label: 'Clientes satisfaites' },
//                   { number: '50+', label: 'Prestations' },
//                 ].map((stat) => (
//                   <div key={stat.label} className="text-center">
//                     <span className="block text-3xl font-medium lg:text-4xl font-playfair text-prune">
//                       {stat.number}
//                     </span>
//                     <span className="block mt-2 text-xs font-light tracking-wider uppercase text-elegant/30">
//                       {stat.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }

// export default About

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Gem, Heart, Shield } from 'lucide-react'

// Composant pour l'animation de compteur
const AnimatedCounter = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing pour un ralenti à la fin
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="block text-3xl font-medium lg:text-4xl font-playfair text-prune">
      {count}{suffix}
    </span>
  )
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const features = [
    {
      icon: Gem,
      title: 'Excellence',
      description: 'Des prestations de haute qualité réalisées par des expertes passionnées.',
      accent: 'from-prune/10 to-rose/5',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Un amour du métier qui se ressent dans chaque détail de nos services.',
      accent: 'from-rose/10 to-champagne/5',
    },
    {
      icon: Shield,
      title: 'Confiance',
      description: 'Des produits premium et une hygiène irréprochable pour votre sécurité.',
      accent: 'from-champagne/10 to-prune/5',
    }
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden lg:py-32 bg-pearl">
      
      {/* Fond décoratif subtil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-prune/5 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-6xl px-6 mx-auto lg:px-10">
        
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-champagne to-transparent" />
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs font-medium tracking-[0.4em] uppercase text-champagne"
            >
              Notre univers
            </motion.p>
          </div>
          
          <h2 className="mb-8 text-4xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
            L'excellence
            <br />
            <span className="italic font-normal text-prune">à la française</span>
          </h2>

          <p className="max-w-2xl text-base font-light leading-relaxed lg:text-lg text-elegant/60">
            Bienvenue dans l'univers DYDY SHOP, où la beauté rencontre l'excellence. 
            Notre institut est né d'une passion pour l'élégance féminine et le bien-être, 
            offrant une expérience unique à chaque femme qui franchit nos portes.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 mb-20 lg:gap-8 md:grid-cols-3 lg:mb-28">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="relative p-8 transition-all duration-500 bg-white shadow-sm group rounded-2xl hover:shadow-xl"
            >
              {/* Dégradé subtil au hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icône - Toutes en violet */}
                <div className="flex items-center justify-center mb-6 transition-transform duration-500 shadow-lg w-14 h-14 bg-gradient-to-br from-prune to-purple-600 rounded-2xl group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Numéro */}
                <span className="block mb-4 text-xs font-light tracking-[0.3em] text-elegant/15 uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <h3 className="mb-3 text-xl font-medium font-playfair text-elegant">
                  {feature.title}
                </h3>
                
                <p className="text-sm font-light leading-relaxed transition-colors duration-500 text-elegant/40 group-hover:text-elegant/60">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation + Chiffres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden bg-white shadow-sm rounded-3xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-bl from-rose/10 to-transparent -translate-y-1/3 translate-x-1/3" />
          
          <div className="relative p-10 lg:p-14">
            {/* Grand guillemet */}
            <span className="absolute font-light leading-none text-8xl top-8 left-8 lg:text-9xl text-prune/5 font-playfair">
              "
            </span>
            
            <div className="relative max-w-3xl mx-auto text-center">
              <p className="mb-12 text-base italic font-light leading-relaxed lg:text-xl text-elegant/60">
                Chez DYDY SHOP, nous croyons que chaque femme mérite de se sentir belle et confiante. 
                Notre mission est de révéler votre beauté naturelle à travers des soins personnalisés 
                et des produits d'exception.
              </p>
              
              {/* Chiffres avec animation de compteur */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/5">
                <div className="text-center">
                  <AnimatedCounter value={10} suffix="+" />
                  <span className="block mt-2 text-xs font-light tracking-wider uppercase text-elegant/30">
                    Années d'expérience
                  </span>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter value={1000} suffix="+" duration={2500} />
                  <span className="block mt-2 text-xs font-light tracking-wider uppercase text-elegant/30">
                    Clientes satisfaites
                  </span>
                </div>
                
                <div className="text-center">
                  <AnimatedCounter value={50} suffix="+" duration={1500} />
                  <span className="block mt-2 text-xs font-light tracking-wider uppercase text-elegant/30">
                    Prestations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About