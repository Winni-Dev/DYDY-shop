// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Quote } from 'lucide-react'

// const Founder = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section className="relative py-24 overflow-hidden bg-pearl">
//       {/* Élément décoratif */}
//       <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-rose/20" />
//       <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-prune/10" />
      
//       <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8 }}
//           className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
//         >
//           {/* Photo */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative z-10">
//               <img
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
//                 alt="Fondatrice DYDY SHOP"
//                 className="w-full h-[500px] object-cover rounded-card shadow-2xl"
//               />
//             </div>
//             <div className="absolute z-0 w-full h-full border-2 -bottom-6 -right-6 border-champagne rounded-card" />
//           </motion.div>

//           {/* Texte */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="relative">
//               <Quote className="absolute w-12 h-12 text-champagne/30 -top-8 -left-4" />
//               <h2 className="mb-6 text-4xl font-bold font-playfair md:text-5xl text-elegant">
//                 Mot de la Fondatrice
//               </h2>
//               <div className="w-24 h-1 mb-8 bg-gradient-to-r from-rose to-prune" />
              
//               <div className="space-y-6">
//                 <p className="text-lg leading-relaxed text-gray-600">
//                   Passionnée par l'univers de la beauté depuis mon plus jeune âge, j'ai toujours rêvé 
//                   de créer un espace où chaque femme pourrait se sentir unique et sublimée.
//                 </p>
                
//                 <p className="text-lg leading-relaxed text-gray-600">
//                   DYDY SHOP est né de cette vision : offrir des prestations d'exception dans un cadre 
//                   luxueux et chaleureux. Chaque détail a été pensé pour vous offrir une expérience 
//                   inoubliable.
//                 </p>

//                 <p className="text-lg leading-relaxed text-gray-600">
//                   Notre équipe de professionnelles passionnées met tout son savoir-faire à votre service 
//                   pour révéler votre beauté naturelle et sublimer votre élégance.
//                 </p>

//                 <div className="pt-6">
//                   <h3 className="text-3xl font-bold font-playfair text-prune">
//                     Diane YAO
//                   </h3>
//                   <p className="text-lg font-medium text-champagne">
//                     Fondatrice & Directrice Artistique
//                   </p>
//                 </div>

//                 <div className="flex pt-4 space-x-4">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-prune">10+</div>
//                     <div className="text-sm text-gray-600">Années d'expérience</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-prune">1000+</div>
//                     <div className="text-sm text-gray-600">Clientes satisfaites</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-prune">50+</div>
//                     <div className="text-sm text-gray-600">Prestations</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Founder


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import mme from '../IMAGES/mme.jpeg'

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

const Founder = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative py-24 overflow-hidden bg-white lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-rose/5 to-transparent rounded-full -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-prune/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
      
      {/* Ligne décorative verticale */}
      <div className="absolute top-0 bottom-0 hidden left-10 lg:block">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      </div>

      <div className="relative max-w-6xl px-6 mx-auto lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24"
        >
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src={mme}
                alt="Fondatrice DYDY SHOP"
                className="w-full h-[450px] lg:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-t from-black/20 to-transparent hover:opacity-100" />
            </div>
            
            {/* Bordure décorative */}
            <div className="absolute z-0 w-full h-full border border-champagne/30 rounded-2xl -bottom-4 -right-4" />
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5, ease: 'backOut' }}
              className="absolute z-20 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg -bottom-6 left-8"
            >
              <span className="w-2 h-2 rounded-full bg-prune" />
              <span className="text-xs font-medium tracking-wider uppercase text-elegant/60">
                Fondatrice
              </span>
            </motion.div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gradient-to-r from-champagne to-transparent" />
              <p className="text-xs font-medium tracking-[0.4em] uppercase text-champagne">
                Notre histoire
              </p>
            </div>

            <h2 className="mb-8 text-3xl font-medium leading-tight lg:text-4xl font-playfair text-elegant">
              Mot de la
              <br />
              <span className="italic font-normal text-prune">Fondatrice</span>
            </h2>

            {/* Grand guillemet décoratif */}
            <div className="relative pl-8 mb-10 border-l-2 border-prune/20">
              <span className="absolute top-0 left-0 text-6xl font-light leading-none -translate-x-3 -translate-y-4 text-prune/10 font-playfair">
                "
              </span>
              
              <div className="space-y-5">
                <p className="text-sm font-light leading-relaxed lg:text-base text-elegant/60">
                  Passionnée par l'univers de la beauté depuis mon plus jeune âge, j'ai toujours rêvé 
                  de créer un espace où chaque femme pourrait se sentir unique et sublimée.
                </p>
                
                <p className="text-sm font-light leading-relaxed lg:text-base text-elegant/60">
                  DYDY SHOP est né de cette vision : offrir des prestations d'exception dans un cadre 
                  luxueux et chaleureux. Chaque détail a été pensé pour vous offrir une expérience 
                  inoubliable.
                </p>

                <p className="text-sm font-light leading-relaxed lg:text-base text-elegant/60">
                  Notre équipe de professionnelles passionnées met tout son savoir-faire à votre service 
                  pour révéler votre beauté naturelle et sublimer votre élégance.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium lg:text-3xl font-playfair text-elegant">
                Diane YAO
              </h3>
              <p className="mt-1 text-sm font-light tracking-wider text-champagne">
                Fondatrice & Directrice Artistique
              </p>
              {/* Ligne signature */}
              <svg className="w-32 h-4 mt-3 text-prune/20" viewBox="0 0 120 12" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M3 9C20 1 45 14 60 6C75 -2 95 13 117 3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Chiffres avec animation */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-black/5">
              <div className="text-center">
                <AnimatedCounter value={10} suffix="+" />
                <span className="block mt-2 text-xs font-light tracking-wider uppercase text-elegant/30">
                  Années
                </span>
              </div>
              
              <div className="text-center">
                <AnimatedCounter value={1000} suffix="+" duration={2500} />
                <span className="block mt-2 text-xs font-light tracking-wider uppercase text-elegant/30">
                  Clientes
                </span>
              </div>
              
              <div className="text-center">
                <AnimatedCounter value={50} suffix="+" duration={1500} />
                <span className="block mt-2 text-xs font-light tracking-wider uppercase text-elegant/30">
                  Prestations
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Founder