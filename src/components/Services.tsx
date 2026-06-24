// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Scissors, Sparkles, Hand, Footprints, Smile, ShoppingBag } from 'lucide-react'

// const Services = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const services = [
//     {
//       icon: Scissors,
//       title: 'Onglerie',
//       description: 'Gel, capsule, vernis semi-permanent et Nail Art pour des ongles sublimes et durables.',
//       price: 'À partir de 5.000 FCFA',
//       features: ['Gel UV', 'Capsule', 'Vernis', 'Nail Art']
//     },
//     {
//       icon: ShoppingBag,
//       title: 'Press-On Nails',
//       description: 'Des ongles instantanés personnalisables pour toutes les occasions.',
//       price: 'À partir de 3.000 FCFA',
//       features: ['Sur mesure', 'Réutilisables', 'Multi-styles', 'Pose incluse']
//     },
//     {
//       icon: Hand,
//       title: 'Manucure',
//       description: 'Des soins complets pour des mains douces et des ongles parfaitement entretenus.',
//       price: 'À partir de 3.000 FCFA',
//       features: ['Soin complet', 'Massage', 'Hydratation', 'Vernis inclus']
//     },
//     {
//       icon: Footprints,
//       title: 'Pédicure',
//       description: 'Prenez soin de vos pieds avec nos pédicures relaxantes et professionnelles.',
//       price: 'À partir de 5.000 FCFA',
//       features: ['Bain relaxant', 'Gommage', 'Massage', 'Semi-permanent']
//     },
//     {
//       icon: Smile,
//       title: 'Soins du visage',
//       description: 'Des soins adaptés à votre peau pour un teint éclatant et une peau revitalisée.',
//       price: 'À partir de 7.500 FCFA',
//       features: ['Nettoyage', 'Hydratation', 'Masque', 'Soin personnalisé']
//     },
//     {
//       icon: Sparkles,
//       title: 'Accessoires',
//       description: 'Perruques et sacs de qualité premium pour compléter votre style.',
//       price: 'Sur commande',
//       features: ['Perruques', 'Sacs', 'Qualité premium', 'Conseil personnalisé']
//     }
//   ]

//   return (
//     <section id="services" className="py-24 bg-white">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-elegant">
//             Nos Services Premium
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-rose to-prune" />
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             Découvrez notre gamme complète de services de beauté, pensés pour sublimer 
//             votre beauté naturelle dans un cadre luxueux et professionnel.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.1 * index, duration: 0.6 }}
//               whileHover={{ y: -10 }}
//               className="relative p-8 overflow-hidden card-premium group"
//             >
//               {/* Effet hover gradient */}
//               <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-rose/10 to-prune/10 group-hover:opacity-100" />
              
//               <div className="relative z-10">
//                 <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 bg-gradient-to-br from-rose to-prune rounded-2xl group-hover:scale-110">
//                   <service.icon className="w-8 h-8 text-white" />
//                 </div>
                
//                 <h3 className="mb-4 text-2xl font-bold font-playfair text-elegant">
//                   {service.title}
//                 </h3>
                
//                 <p className="mb-6 text-gray-600">
//                   {service.description}
//                 </p>

//                 <div className="mb-6 space-y-2">
//                   {service.features.map((feature) => (
//                     <div key={feature} className="flex items-center space-x-2">
//                       <div className="w-2 h-2 rounded-full bg-champagne" />
//                       <span className="text-sm text-gray-600">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between pt-6 border-t border-gray-100">
//                   <span className="font-semibold text-prune">
//                     {service.price}
//                   </span>
//                   <a
//                     href="#booking"
//                     className="text-sm font-semibold transition-colors duration-300 text-champagne hover:text-prune"
//                   >
//                     Réserver →
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scissors, Sparkles, Hand, Footprints, Smile, ShoppingBag } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const scrollRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: Scissors,
      title: 'Onglerie',
      description: 'Gel, capsule, vernis semi-permanent et Nail Art pour des ongles sublimes et durables.',
      price: 'À partir de 5.000 FCFA',
      features: ['Gel UV', 'Capsule', 'Vernis', 'Nail Art']
    },
    {
      icon: ShoppingBag,
      title: 'Press-On Nails',
      description: 'Des ongles instantanés personnalisables pour toutes les occasions.',
      price: 'À partir de 3.000 FCFA',
      features: ['Sur mesure', 'Réutilisables', 'Multi-styles', 'Pose incluse']
    },
    {
      icon: Hand,
      title: 'Manucure',
      description: 'Des soins complets pour des mains douces et des ongles parfaitement entretenus.',
      price: 'À partir de 3.000 FCFA',
      features: ['Soin complet', 'Massage', 'Hydratation', 'Vernis inclus']
    },
    {
      icon: Footprints,
      title: 'Pédicure',
      description: 'Prenez soin de vos pieds avec nos pédicures relaxantes et professionnelles.',
      price: 'À partir de 5.000 FCFA',
      features: ['Bain relaxant', 'Gommage', 'Massage', 'Semi-permanent']
    },
    {
      icon: Smile,
      title: 'Soins du visage',
      description: 'Des soins adaptés à votre peau pour un teint éclatant et une peau revitalisée.',
      price: 'À partir de 7.500 FCFA',
      features: ['Nettoyage', 'Hydratation', 'Masque', 'Soin personnalisé']
    },
    {
      icon: Sparkles,
      title: 'Accessoires',
      description: 'Perruques et sacs de qualité premium pour compléter votre style.',
      price: 'Sur commande',
      features: ['Perruques', 'Sacs', 'Qualité premium', 'Conseil personnalisé']
    }
  ]

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-pearl lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-prune/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-rose/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl px-6 mx-auto lg:px-10">
        
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
              Nos prestations
            </p>
          </div>
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
              Services
              <br />
              <span className="italic font-normal text-prune">Premium</span>
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed lg:text-base text-elegant/50">
              Découvrez notre gamme complète de services de beauté, pensés pour sublimer 
              votre beauté naturelle.
            </p>
          </div>
        </motion.div>

        {/* Desktop : Grille 3 colonnes */}
        <div className="hidden grid-cols-1 gap-6 md:grid lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="relative p-8 transition-all duration-500 bg-white shadow-sm group rounded-2xl hover:shadow-xl"
            >
              {/* Dégradé au hover */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-prune/5 to-rose/5 group-hover:opacity-100" />
              
              <div className="relative z-10">
                {/* Icône violette */}
                <div className="flex items-center justify-center mb-6 transition-transform duration-500 shadow-lg w-14 h-14 bg-gradient-to-br from-prune to-purple-600 rounded-2xl group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Numéro */}
                <span className="block mb-4 text-xs font-light tracking-[0.3em] text-elegant/10 uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <h3 className="mb-3 text-xl font-medium font-playfair text-elegant">
                  {service.title}
                </h3>
                
                <p className="mb-6 text-sm font-light leading-relaxed transition-colors duration-500 text-elegant/40 group-hover:text-elegant/60">
                  {service.description}
                </p>

                <div className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-prune/30" />
                      <span className="text-xs font-light text-elegant/40">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <span className="text-sm font-medium text-prune">
                    {service.price}
                  </span>
                  <a
                    href="#booking"
                    className="text-xs font-medium tracking-wider uppercase transition-colors duration-300 text-elegant/30 hover:text-prune"
                  >
                    Réserver →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablette : Scroll horizontal */}
        <div className="lg:hidden">
          {/* Indicateur de scroll */}
          <div className="flex items-center justify-end gap-2 mb-6">
            <span className="text-xs font-light tracking-wider uppercase text-elegant/20">
              Glisser →
            </span>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex gap-5 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="relative flex-shrink-0 p-6 transition-all duration-500 bg-white shadow-sm snap-center group rounded-2xl hover:shadow-lg w-[280px]"
              >
                {/* Dégradé au hover */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-prune/5 to-rose/5 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  {/* Icône violette */}
                  <div className="flex items-center justify-center w-12 h-12 mb-5 transition-transform duration-500 shadow-lg rounded-2xl bg-gradient-to-br from-prune to-purple-600 group-hover:scale-110">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Numéro */}
                  <span className="block mb-3 text-xs font-light tracking-[0.3em] text-elegant/10 uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <h3 className="mb-2 text-lg font-medium font-playfair text-elegant">
                    {service.title}
                  </h3>
                  
                  <p className="mb-5 text-xs font-light leading-relaxed text-elegant/40">
                    {service.description}
                  </p>

                  <div className="mb-5 space-y-1.5">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-prune/30" />
                        <span className="text-xs font-light text-elegant/40">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-elegant/20">
                        +{service.features.length - 3} autres
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <span className="text-sm font-medium text-prune">
                      {service.price}
                    </span>
                    <a
                      href="#booking"
                      className="text-xs font-medium tracking-wider uppercase transition-colors duration-300 text-elegant/30 hover:text-prune"
                    >
                      →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Espaceur de fin pour le scroll */}
            <div className="flex-shrink-0 w-6" />
          </div>
        </div>

      </div>

      {/* Style pour cacher la scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Services