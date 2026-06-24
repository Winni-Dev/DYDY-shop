// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { CheckCircle2, Sparkles } from 'lucide-react'

// const WhyUs = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const reasons = [
//     {
//       title: 'Produits de qualité',
//       description: 'Nous utilisons exclusivement des marques premium reconnues mondialement.'
//     },
//     {
//       title: 'Hygiène irréprochable',
//       description: 'Protocoles stricts de désinfection et matériel stérilisé pour chaque cliente.'
//     },
//     {
//       title: 'Équipe expérimentée',
//       description: 'Des professionnelles formées aux dernières techniques et tendances.'
//     },
//     {
//       title: 'Service personnalisé',
//       description: 'Chaque prestation est adaptée à vos envies et à votre morphologie.'
//     },
//     {
//       title: 'Résultats durables',
//       description: 'Des techniques avancées pour des résultats qui durent dans le temps.'
//     },
//     {
//       title: 'Cadre luxueux',
//       description: 'Un environnement premium pour une expérience de beauté exceptionnelle.'
//     }
//   ]

//   return (
//     <section className="relative py-24 overflow-hidden bg-pearl">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-full h-full" style={{
//           backgroundImage: 'radial-gradient(circle at 25% 25%, #7A4E8A 1px, transparent 1px), radial-gradient(circle at 75% 75%, #D4B483 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }} />
//       </div>

//       <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <div className="flex justify-center mb-6">
//             <Sparkles className="w-12 h-12 text-champagne" />
//           </div>
//           <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-elegant">
//             Pourquoi nous choisir
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-rose to-prune" />
//         </motion.div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={reason.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//               className="p-8 card-premium"
//             >
//               <CheckCircle2 className="w-10 h-10 mb-4 text-champagne" />
//               <h3 className="mb-3 text-xl font-bold font-playfair text-elegant">
//                 {reason.title}
//               </h3>
//               <p className="text-gray-600">
//                 {reason.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WhyUs

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const reasons = [
    {
      number: '01',
      title: 'Produits de qualité',
      description: 'Nous utilisons exclusivement des marques premium reconnues mondialement.'
    },
    {
      number: '02',
      title: 'Hygiène irréprochable',
      description: 'Protocoles stricts de désinfection et matériel stérilisé pour chaque cliente.'
    },
    {
      number: '03',
      title: 'Équipe expérimentée',
      description: 'Des professionnelles formées aux dernières techniques et tendances.'
    },
    {
      number: '04',
      title: 'Service personnalisé',
      description: 'Chaque prestation est adaptée à vos envies et à votre morphologie.'
    },
    {
      number: '05',
      title: 'Résultats durables',
      description: 'Des techniques avancées pour des résultats qui durent dans le temps.'
    },
    {
      number: '06',
      title: 'Cadre luxueux',
      description: 'Un environnement premium pour une expérience de beauté exceptionnelle.'
    }
  ]

  return (
    <section id="why-us" className="relative py-24 overflow-hidden bg-white lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-prune/3 to-transparent rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose/3 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

      {/* Points décoratifs discrets */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, #7A4E8A 1px, transparent 1px), radial-gradient(circle at 70% 80%, #7A4E8A 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

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
              La différence
            </p>
          </div>
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
              Pourquoi
              <br />
              <span className="italic font-normal text-prune">nous choisir</span>
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed lg:text-base text-elegant/50">
              Six bonnes raisons de nous confier votre beauté.
            </p>
          </div>
        </motion.div>

        {/* Grille des raisons */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
              className="relative p-8 transition-all duration-500 bg-white shadow-sm group rounded-2xl hover:shadow-lg border border-black/[0.02]"
            >
              {/* Dégradé violet au hover */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-prune/[0.02] to-rose/[0.02] group-hover:opacity-100" />
              
              <div className="relative z-10">
                {/* Numéro + Check */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-light tracking-[0.3em] text-elegant/10 uppercase">
                    {reason.number}
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 transition-transform duration-500 rounded-full shadow-md bg-gradient-to-br from-prune to-purple-600 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="mb-3 text-lg font-medium transition-colors duration-500 font-playfair text-elegant group-hover:text-prune">
                  {reason.title}
                </h3>

                {/* Ligne décorative */}
                <div className="w-8 h-[1px] bg-gradient-to-r from-prune/20 to-transparent mb-4 group-hover:w-12 transition-all duration-500" />
                
                <p className="text-sm font-light leading-relaxed transition-colors duration-500 text-elegant/40 group-hover:text-elegant/60">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bandeau confiance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-prune to-purple-700"
        >
          {/* Motif décoratif */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 -translate-x-1/2 translate-y-1/2 bg-white rounded-full" />
          </div>

          <div className="relative px-8 py-12 text-center lg:px-16 lg:py-16">
            <span className="block mb-4 text-xs font-medium tracking-[0.4em] uppercase text-white/50">
              Notre engagement
            </span>
            <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed text-white/80 lg:text-xl">
              Votre satisfaction est notre priorité absolue. 
              Chaque prestation est réalisée avec soin et passion 
              pour vous offrir une expérience inoubliable.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyUs