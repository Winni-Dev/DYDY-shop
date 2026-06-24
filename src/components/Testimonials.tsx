// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
// import { Star, Quote } from 'lucide-react'
// import 'swiper/css'
// import 'swiper/css/pagination'

// const Testimonials = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const testimonials = [
//     {
//       name: 'Sarah Koné',
//       rating: 5,
//       text: 'Une expérience incroyable ! Mes ongles n\'ont jamais été aussi beaux. L\'équipe est professionnelle et attentionnée.',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150'
//     },
//     {
//       name: 'Aminata Touré',
//       rating: 5,
//       text: 'Le meilleur institut de beauté d\'Abidjan. Les soins du visage sont divins et les résultats visibles immédiatement.',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150'
//     },
//     {
//       name: 'Grace Yao',
//       rating: 5,
//       text: 'Je recommande DYDY SHOP les yeux fermés. Service impeccable, cadre luxueux et résultats exceptionnels.',
//       image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150'
//     }
//   ]

//   return (
//     <section id="testimonials" className="py-24 bg-white">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-elegant">
//             Avis Clientes
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-rose to-prune" />
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             Découvrez ce que nos clientes disent de leur expérience chez DYDY SHOP.
//           </p>
//         </motion.div>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 }
//           }}
//           className="pb-12"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="p-8 card-premium"
//               >
//                 <Quote className="w-10 h-10 mb-4 text-rose/30" />
                
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-current text-champagne" />
//                   ))}
//                 </div>

//                 <p className="mb-6 italic text-gray-600">
//                   "{testimonial.text}"
//                 </p>

//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="object-cover w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-elegant">{testimonial.name}</h4>
//                     <p className="text-sm text-champagne">Cliente fidèle</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   )
// }

// export default Testimonials


import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const testimonials = [
    {
      name: 'Sarah Koné',
      rating: 5,
      text: 'Une expérience incroyable ! Mes ongles n\'ont jamais été aussi beaux. L\'équipe est professionnelle et attentionnée.',
      image: 'https://images.pexels.com/photos/5571633/pexels-photo-5571633.jpeg'
    },
    {
      name: 'Aminata Touré',
      rating: 5,
      text: 'Le meilleur institut de beauté d\'Abidjan. Les soins du visage sont divins et les résultats visibles immédiatement.',
      image: 'https://images.pexels.com/photos/17300288/pexels-photo-17300288.jpeg'
    },
    {
      name: 'Grace Yao',
      rating: 5,
      text: 'Je recommande DYDY SHOP les yeux fermés. Service impeccable, cadre luxueux et résultats exceptionnels.',
      image: 'https://images.pexels.com/photos/33128558/pexels-photo-33128558.jpeg'
    },
    {
      name: 'Fatim Konaté',
      rating: 5,
      text: 'Des ongles magnifiques qui tiennent parfaitement. L\'accueil est chaleureux et le service irréprochable.',
      image: 'https://images.pexels.com/photos/11056943/pexels-photo-11056943.jpeg'
    },
    {
      name: 'Aïcha Diallo',
      rating: 5,
      text: 'Ma pédicure était parfaite ! Un moment de détente absolue dans un cadre somptueux. Je reviendrai sans hésiter.',
      image: 'https://images.pexels.com/photos/3534956/pexels-photo-3534956.jpeg'
    }
  ]

  const goTo = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(goToNext, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, goToNext])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-pearl lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-prune/3 to-transparent rounded-full -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-rose/3 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-5xl px-6 mx-auto lg:px-10">
        
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-champagne to-transparent" />
            <p className="text-xs font-medium tracking-[0.4em] uppercase text-champagne">
              Témoignages
            </p>
          </div>
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
              Avis
              <br />
              <span className="italic font-normal text-prune">Clientes</span>
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed lg:text-base text-elegant/50">
              Découvrez ce que nos clientes disent de leur expérience chez DYDY SHOP.
            </p>
          </div>
        </motion.div>

        {/* Carrousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* Grand guillemet décoratif */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[12rem] font-light leading-none text-prune/[0.03] font-playfair select-none pointer-events-none">
            "
          </div>

          {/* Cartes */}
          <div className="relative overflow-hidden min-h-[320px] lg:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative p-8 bg-white shadow-sm lg:p-10 rounded-3xl"
              >
                <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start lg:gap-10">
                  
                  {/* Photo + Étoiles */}
                  <div className="flex flex-col items-center flex-shrink-0 mb-6 lg:mb-0">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-prune to-purple-600 blur-sm opacity-20" />
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative object-cover w-20 h-20 border-2 rounded-full border-prune/10"
                      />
                    </div>
                    
                    {/* Étoiles */}
                    <div className="flex gap-0.5">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-champagne" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Texte */}
                  <div className="flex-1">
                    <p className="mb-6 text-base italic font-light leading-relaxed lg:text-lg text-elegant/60">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-medium font-playfair text-elegant">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs font-light tracking-wider uppercase text-champagne">
                        Cliente fidèle
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Bouton précédent */}
            <button
              onClick={goToPrev}
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full group border-elegant/10 hover:border-prune/30 hover:bg-prune/5"
            >
              <ChevronLeft className="w-4 h-4 transition-colors text-elegant/30 group-hover:text-prune" />
            </button>

            {/* Points */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'w-6 h-2 bg-prune'
                      : 'w-2 h-2 bg-elegant/10 hover:bg-elegant/20'
                  }`}
                />
              ))}
            </div>

            {/* Bouton suivant */}
            <button
              onClick={goToNext}
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full group border-elegant/10 hover:border-prune/30 hover:bg-prune/5"
            >
              <ChevronRight className="w-4 h-4 transition-colors text-elegant/30 group-hover:text-prune" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials