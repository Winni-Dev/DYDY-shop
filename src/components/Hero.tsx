// import { motion } from 'framer-motion'
// import { ArrowRight, Sparkles } from 'lucide-react'

// const Hero = () => {
//   return (
//     <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden">
//       {/* Background avec overlay */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 z-10 bg-gradient-to-r from-prune/90 to-rose/70" />
//         <div 
//           className="w-full h-full bg-center bg-cover"
//           style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop')"
//           }}
//         />
//       </div>

//       {/* Contenu */}
//       <div className="relative z-20 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="flex justify-center mb-8"
//           >
//             <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
//               <Sparkles className="w-12 h-12 text-champagne" />
//             </div>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="mb-6 text-5xl font-bold text-white font-playfair md:text-7xl lg:text-8xl"
//           >
//             Révélez votre
//             <br />
//             <span className="text-champagne">élégance naturelle</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//             className="mb-12 text-xl font-light md:text-2xl text-white/90"
//           >
//             Onglerie, soins de beauté et accessoires féminins haut de gamme
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.8 }}
//             className="flex flex-col justify-center gap-4 sm:flex-row"
//           >
//             <motion.a
//               href="#booking"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center justify-center px-10 py-4 space-x-2 text-lg btn-primary"
//             >
//               <span>Réserver maintenant</span>
//               <ArrowRight className="w-5 h-5" />
//             </motion.a>
            
//             <motion.a
//               href="#services"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 bg-white/20 backdrop-blur-sm border-white/50 rounded-button hover:bg-white/30"
//             >
//               Découvrir nos services
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute z-20 transform -translate-x-1/2 bottom-10 left-1/2"
//       >
//         <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/50">
//           <div className="w-1 h-3 mt-2 rounded-full bg-white/70" />
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero


import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import soin from '../IMAGES/soin.png'
import ongleacc from '../IMAGES/ongleacc.jpeg'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop',
  },
  {
    image: ongleacc,
  },
  {
    image: soin,
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    const duration = 5000
    const interval = 50
    const steps = duration / interval

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + (100 / steps)
      })
    }, interval)

    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Carrousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 z-10 bg-black/60" />
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicateurs */}
      <div className="absolute z-30 flex items-center gap-4 transform -translate-x-1/2 bottom-10 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setProgress(0)
            }}
            className="group relative h-[1px] w-12 overflow-hidden rounded-full bg-white/20 transition-all duration-300 hover:bg-white/40"
            aria-label={`Slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Compteur */}
      <div className="absolute z-30 top-10 right-10">
        <span className="font-playfair text-white/30 text-xs tracking-[0.4em]">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Contenu */}
      <div className="relative z-20 max-w-4xl px-6 mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.5em' }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mb-8 text-xs font-light tracking-[0.5em] text-white/50 uppercase"
            >
              DYDY SHOP
            </motion.p>

            <h1 className="mb-6 text-4xl font-light leading-tight text-white sm:text-6xl lg:text-7xl font-playfair">
              Révélez votre
              <br />
              <span className="italic font-normal text-white/80">
                élégance naturelle
              </span>
            </h1>

            <p className="max-w-xl mx-auto mb-12 text-base font-light leading-relaxed text-white/40 sm:text-lg">
              Onglerie, soins de beauté et accessoires féminins haut de gamme
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-10 py-4 text-sm font-light tracking-wider text-white uppercase transition-all duration-500 border rounded-full group border-white/20 hover:border-white/50 hover:bg-white/5"
              >
                Réserver maintenant
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 text-sm font-light tracking-wider uppercase transition-all duration-500 text-white/50 hover:text-white/80"
              >
                Découvrir
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lignes décoratives */}
      <div className="absolute inset-y-0 z-10 hidden left-10 lg:block">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>
      <div className="absolute inset-y-0 z-10 hidden right-10 lg:block">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>
    </section>
  )
}

export default Hero