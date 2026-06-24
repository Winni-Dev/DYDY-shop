// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { X, ZoomIn } from 'lucide-react'

// const Gallery = () => {
//   const [activeFilter, setActiveFilter] = useState('all')
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const filters = [
//     { id: 'all', name: 'Tout' },
//     { id: 'nails', name: 'Ongles' },
//     { id: 'wigs', name: 'Perruques' },
//     { id: 'bags', name: 'Sacs' }
//   ]

//   const galleryItems = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=500', category: 'nails', title: 'French Manucure Premium' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=500', category: 'nails', title: 'Nail Art Créatif' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=500', category: 'wigs', title: 'Perruque Naturelle' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1583394833099-4c6b4d2b3e0d?q=80&w=500', category: 'bags', title: 'Sac Élégant' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=500', category: 'nails', title: 'Gel Parfait' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500', category: 'wigs', title: 'Style Glamour' },
//     { id: 7, src: 'https://images.unsplash.com/photo-1581101765291-bda6493a65a1?q=80&w=500', category: 'bags', title: 'Accessoire Luxe' },
//     { id: 8, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=500', category: 'nails', title: 'Design Unique' }
//   ]

//   const filteredItems = activeFilter === 'all' 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === activeFilter)

//   return (
//     <section id="gallery" className="py-24 bg-pearl">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-elegant">
//             Notre Galerie
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-rose to-prune" />
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             Découvrez nos plus belles réalisations et laissez-vous inspirer par notre savoir-faire.
//           </p>
//         </motion.div>

//         {/* Filtres */}
//         <div className="flex justify-center mb-12 space-x-4">
//           {filters.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-6 py-2 rounded-button transition-all duration-300 ${
//                 activeFilter === filter.id
//                   ? 'bg-prune text-white'
//                   : 'bg-white text-elegant hover:bg-rose/20'
//               }`}
//             >
//               {filter.name}
//             </button>
//           ))}
//         </div>

//         {/* Grille */}
//         <motion.div 
//           layout
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
//         >
//           <AnimatePresence>
//             {filteredItems.map((item) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative overflow-hidden cursor-pointer group rounded-card"
//                 onClick={() => setSelectedImage(item.src)}
//               >
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-elegant/80 to-transparent group-hover:opacity-100">
//                   <div>
//                     <h3 className="text-lg font-semibold text-white">{item.title}</h3>
//                     <div className="flex items-center mt-2 space-x-2 text-sm text-white/80">
//                       <ZoomIn className="w-4 h-4" />
//                       <span>Voir en grand</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Lightbox */}
//         <AnimatePresence>
//           {selectedImage && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
//               onClick={() => setSelectedImage(null)}
//             >
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute text-white transition-colors top-4 right-4 hover:text-champagne"
//               >
//                 <X className="w-8 h-8" />
//               </button>
//               <motion.img
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 src={selectedImage}
//                 alt="Vue agrandie"
//                 className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
//                 onClick={(e) => e.stopPropagation()}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }

// export default Gallery


import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const filters = [
    { id: 'all', name: 'Tout' },
    { id: 'nails', name: 'Ongles' },
    { id: 'wigs', name: 'Perruques' },
    { id: 'bags', name: 'Sacs' }
  ]

  const galleryItems = [
    { id: 1, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800', category: 'nails', title: 'French Manucure Premium' },
    { id: 2, src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800', category: 'nails', title: 'Nail Art Créatif' },
    { id: 3, src: 'https://images.pexels.com/photos/13221802/pexels-photo-13221802.jpeg', category: 'wigs', title: 'Perruque Naturelle' },
    { id: 4, src: 'https://images.pexels.com/photos/5591912/pexels-photo-5591912.jpeg', category: 'bags', title: 'Sac Élégant' },
    { id: 5, src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800', category: 'nails', title: 'Gel Parfait' },
    { id: 6, src: 'https://images.pexels.com/photos/17652445/pexels-photo-17652445.jpeg', category: 'wigs', title: 'Style Glamour' },
    { id: 7, src: 'https://images.pexels.com/photos/31929486/pexels-photo-31929486.jpeg', category: 'bags', title: 'Accessoire Luxe' },
    { id: 8, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800', category: 'nails', title: 'Design Unique' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const selectedImage = selectedIndex !== null ? filteredItems[selectedIndex] : null

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length)
    }
  }, [selectedIndex, filteredItems.length])

  const goToPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length)
    }
  }, [selectedIndex, filteredItems.length])

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'Escape') setSelectedIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, goToNext, goToPrev])

  // Bloquer le scroll quand lightbox ouverte
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedIndex])

  return (
    <section id="gallery" className="relative py-24 overflow-hidden bg-white lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-prune/3 to-transparent rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose/3 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

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
              Portfolio
            </p>
          </div>
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
              Notre
              <br />
              <span className="italic font-normal text-prune">Galerie</span>
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed lg:text-base text-elegant/50">
              Découvrez nos plus belles réalisations et laissez-vous inspirer par notre savoir-faire.
            </p>
          </div>
        </motion.div>

        {/* Filtres */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="inline-flex p-1 bg-black/[0.03] rounded-full">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-5 py-2 text-xs font-light tracking-wider uppercase rounded-full transition-all duration-500 ${
                  activeFilter === filter.id
                    ? 'text-white'
                    : 'text-elegant/30 hover:text-elegant/60'
                }`}
              >
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-prune"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille */}
        <motion.div 
          layout
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative overflow-hidden cursor-pointer group rounded-2xl aspect-square"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-elegant/70 via-elegant/10 to-transparent" />
                
                {/* Contenu overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-light tracking-wider uppercase text-white/50">
                    {item.category === 'nails' ? 'Ongles' : item.category === 'wigs' ? 'Perruques' : 'Sacs'}
                  </span>
                  <h3 className="mt-1 text-sm font-medium text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute z-20 transition-colors top-6 right-6 text-white/40 hover:text-white"
            >
              <X className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            {/* Compteur */}
            <div className="absolute z-20 transform -translate-x-1/2 top-6 left-1/2">
              <span className="text-xs font-light tracking-[0.3em] text-white/40">
                {String(selectedIndex! + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
              </span>
            </div>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-h-[80vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="object-contain max-h-[80vh] max-w-[90vw] rounded-2xl"
              />

              {/* Infos image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                <span className="text-xs font-light tracking-wider uppercase text-white/50">
                  {selectedImage.category === 'nails' ? 'Ongles' : selectedImage.category === 'wigs' ? 'Perruques' : 'Sacs'}
                </span>
                <h3 className="mt-1 text-lg font-light text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>

            {/* Bouton précédent */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrev()
              }}
              className="absolute z-20 flex items-center justify-center transition-all duration-300 group left-4 lg:left-8"
            >
              <div className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-full lg:w-14 lg:h-14 border-white/10 group-hover:border-white/30 group-hover:bg-white/5">
                <ChevronLeft className="w-5 h-5 transition-colors text-white/60 group-hover:text-white" />
              </div>
            </button>

            {/* Bouton suivant */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute z-20 flex items-center justify-center transition-all duration-300 group right-4 lg:right-8"
            >
              <div className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-full lg:w-14 lg:h-14 border-white/10 group-hover:border-white/30 group-hover:bg-white/5">
                <ChevronRight className="w-5 h-5 transition-colors text-white/60 group-hover:text-white" />
              </div>
            </button>

            {/* Indicateur de navigation clavier */}
            <div className="absolute z-20 flex gap-2 transform -translate-x-1/2 bottom-6 left-1/2">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIndex(index)
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    index === selectedIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery