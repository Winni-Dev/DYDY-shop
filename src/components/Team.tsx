// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Instagram } from 'lucide-react'

// const Team = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const teamMembers = [
//     {
//       name: 'Marie Kouassi',
//       role: 'Experte Onglerie',
//       image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500',
//       description: 'Plus de 8 ans d\'expérience en Nail Art et techniques avancées.'
//     },
//     {
//       name: 'Awa Diarra',
//       role: 'Spécialiste Soins Visage',
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500',
//       description: 'Experte en soins du visage et massages relaxants.'
//     },
//     {
//       name: 'Fatou Bamba',
//       role: 'Styliste Perruques',
//       image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=500',
//       description: 'Conseillère experte en coiffure et accessoires.'
//     }
//   ]

//   return (
//     <section id="team" className="py-24 bg-white">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-elegant">
//             Notre Équipe
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-rose to-prune" />
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             Des professionnelles passionnées à votre service pour sublimer votre beauté.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.2 * index, duration: 0.6 }}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <div className="relative mb-6 overflow-hidden rounded-card">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="object-cover w-full transition-transform duration-500 h-96 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 flex items-end justify-center p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-elegant/70 to-transparent group-hover:opacity-100">
//                   <button className="text-white transition-colors hover:text-champagne">
//                     <Instagram className="w-6 h-6" />
//                   </button>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <h3 className="mb-2 text-2xl font-bold font-playfair text-elegant">
//                   {member.name}
//                 </h3>
//                 <p className="mb-3 font-medium text-prune">{member.role}</p>
//                 <p className="text-gray-600">{member.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Team


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const teamMembers = [
    {
      name: 'Marie Kouassi',
      role: 'Experte Onglerie',
      image: 'https://images.pexels.com/photos/33954068/pexels-photo-33954068.jpeg',
      description: 'Plus de 8 ans d\'expérience en Nail Art et techniques avancées.'
    },
    {
      name: 'Awa Diarra',
      role: 'Spécialiste Soins Visage',
      image: 'https://images.pexels.com/photos/30938726/pexels-photo-30938726.jpeg',
      description: 'Experte en soins du visage et massages relaxants.'
    },
    {
      name: 'Fatou Bamba',
      role: 'Styliste Perruques',
      image: 'https://images.pexels.com/photos/11830095/pexels-photo-11830095.jpeg',
      description: 'Conseillère experte en coiffure et accessoires.'
    }
  ]

  return (
    <section id="team" className="relative py-24 overflow-hidden bg-pearl lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-prune/3 to-transparent rounded-full -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-rose/3 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

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
              Notre force
            </p>
          </div>
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
              L'Équipe
              <br />
              <span className="italic font-normal text-prune">Passionnée</span>
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed lg:text-base text-elegant/50">
              Des professionnelles passionnées à votre service pour sublimer votre beauté.
            </p>
          </div>
        </motion.div>

        {/* Grille équipe */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              {/* Photo */}
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[380px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay au hover */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-elegant/40 via-transparent to-transparent" />
                
                {/* Numéro */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-light tracking-[0.3em] text-white/60 uppercase bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Infos */}
              <div className="px-2">
                <span className="block mb-2 text-xs font-medium tracking-[0.2em] uppercase text-prune">
                  {member.role}
                </span>
                
                <h3 className="mb-3 text-2xl font-medium font-playfair text-elegant">
                  {member.name}
                </h3>

                {/* Ligne décorative */}
                <div className="w-8 h-[1px] bg-gradient-to-r from-prune/30 to-transparent mb-4" />
                
                <p className="text-sm font-light leading-relaxed text-elegant/40">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation équipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl pt-16 mx-auto mt-20 text-center border-t border-black/5"
        >
          <p className="text-base italic font-light leading-relaxed lg:text-lg text-elegant/40">
            "Chaque membre de notre équipe partage la même passion : révéler votre beauté 
            et vous offrir une expérience unique."
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Team