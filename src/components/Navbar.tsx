


// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [activeSection, setActiveSection] = useState('hero')

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30)
      
//       // Détection de la section active
//       const sections = document.querySelectorAll('section[id]')
//       const scrollPosition = window.scrollY + 100

//       sections.forEach((section) => {
//         const sectionTop = (section as HTMLElement).offsetTop
//         const sectionHeight = section.clientHeight
//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           setActiveSection(section.id)
//         }
//       })
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { name: 'Accueil', href: '#hero' },
//     { name: 'À propos', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Galerie', href: '#gallery' },
//     { name: 'Contact', href: '#contact' },
//   ]

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
//       className={`fixed w-full z-50 transition-all duration-700 ${
//         scrolled 
//           ? 'bg-black/25 backdrop-blur-xl border-b border-white/5' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="px-6 mx-auto max-w-7xl lg:px-10">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo */}
//           <motion.a
//             href="#hero"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center gap-3 group"
//           >
//             <div className="relative overflow-hidden rounded-lg w-9 h-9">
//               <img 
//                 src="/favicon.png" 
//                 alt="DYDY SHOP" 
//                 className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>
//             <span className={`text-lg font-light tracking-[0.3em] uppercase transition-colors duration-500 ${
//               scrolled ? 'text-white' : 'text-white/80'
//             }`}>
//               DYDY SHOP
//             </span>
//           </motion.a>

//           {/* Desktop Navigation */}
//           <div className="items-center hidden gap-1 lg:flex">
//             {navItems.map((item) => {
//               const isActive = activeSection === item.href.replace('#', '')
//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="relative px-4 py-2 text-sm font-light tracking-wider uppercase transition-colors duration-500 group"
//                 >
//                   <span className={`relative z-10 transition-colors duration-500 ${
//                     isActive 
//                       ? 'text-white' 
//                       : scrolled 
//                         ? 'text-white/50 hover:text-white/80' 
//                         : 'text-white/50 hover:text-white/80'
//                   }`}>
//                     {item.name}
//                   </span>
//                   {/* Indicateur actif */}
//                   {isActive && (
//                     <motion.span
//                       layoutId="activeNav"
//                       className="absolute bottom-0 w-1 h-1 -translate-x-1/2 bg-white rounded-full left-1/2"
//                       transition={{ type: 'spring', stiffness: 380, damping: 30 }}
//                     />
//                   )}
//                   {/* Hover underline */}
//                   <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white/30 transition-all duration-500 group-hover:w-3/4" />
//                 </a>
//               )
//             })}
            
//             {/* Séparateur */}
//             <span className="w-px h-4 mx-2 bg-white/10" />
            
//             {/* Bouton réservation */}
//             <motion.a
//               href="#booking"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className={`relative px-6 py-2.5 text-xs font-light tracking-[0.2em] uppercase transition-all duration-500 rounded-full ${
//                 scrolled
//                   ? 'text-black bg-white hover:bg-white/90'
//                   : 'text-white border border-white/20 hover:border-white/40 hover:bg-white/5'
//               }`}
//             >
//               Réserver
//             </motion.a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 lg:hidden group"
//             aria-label="Menu"
//           >
//             <motion.span
//               animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//               className="w-5 h-[1px] bg-white transition-colors"
//             />
//             <motion.span
//               animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
//               className="w-5 h-[1px] bg-white transition-colors"
//             />
//             <motion.span
//               animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//               className="w-5 h-[1px] bg-white transition-colors"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 flex items-center justify-center bg-black/95 backdrop-blur-xl lg:hidden"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ delay: 0.1, duration: 0.5 }}
//               className="flex flex-col items-center gap-8"
//             >
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
//                   className="text-2xl font-light tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-500"
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
              
//               <motion.a
//                 href="#booking"
//                 onClick={() => setIsOpen(false)}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//                 className="px-8 py-3 mt-4 text-xs font-light tracking-[0.3em] uppercase text-black bg-white rounded-full hover:bg-white/90 transition-colors"
//               >
//                 Réserver
//               </motion.a>
//             </motion.div>

//             {/* Bouton fermeture mobile */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute transition-colors text-white/30 hover:text-white top-8 right-8"
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }

// export default Navbar


import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 mx-auto max-w-7xl lg:px-10">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 group"
            >
              <div className="relative overflow-hidden rounded-lg w-9 h-9">
                <img 
                  src="/favicon.png" 
                  alt="DYDY SHOP" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <span className={`text-lg font-light tracking-[0.3em] uppercase transition-colors duration-500 text-elegant`}>
                DYDY SHOP
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="items-center hidden gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-light tracking-wider uppercase transition-colors duration-500 group"
                  >
                    <span className={`relative z-10 transition-colors duration-500 ${
                      isActive 
                        ? 'text-elegant' 
                        : 'text-elegant/50 hover:text-elegant/80'
                    }`}>
                      {item.name}
                    </span>
                    {/* Indicateur actif */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 w-1 h-1 -translate-x-1/2 rounded-full left-1/2 bg-elegant"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Hover underline */}
                    <span className="absolute bottom-0 w-0 h-[1px] left-1/2 -translate-x-1/2 bg-elegant/30 transition-all duration-500 group-hover:w-3/4" />
                  </a>
                )
              })}
              
              {/* Séparateur */}
              <span className="w-px h-4 mx-2 bg-black/10" />
              
              {/* Bouton réservation */}
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-6 py-2.5 text-xs font-light tracking-[0.2em] uppercase transition-all duration-500 rounded-full text-white bg-elegant hover:bg-elegant/90"
              >
                Réserver
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 lg:hidden"
              aria-label="Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-5 h-[1px] transition-colors ${isOpen ? 'bg-elegant' : 'bg-elegant'}`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-5 h-[1px] transition-colors ${isOpen ? 'bg-elegant' : 'bg-elegant'}`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-5 h-[1px] transition-colors ${isOpen ? 'bg-elegant' : 'bg-elegant'}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-white/95 backdrop-blur-xl lg:hidden"
          >
            {/* Bouton fermeture */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute z-50 transition-colors text-elegant/30 hover:text-elegant top-8 right-8"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  className="text-2xl font-light tracking-[0.2em] uppercase text-elegant/50 hover:text-elegant transition-colors duration-500"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#booking"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="px-8 py-3 mt-4 text-xs font-light tracking-[0.3em] uppercase text-white rounded-full bg-elegant hover:bg-elegant/90 transition-colors"
              >
                Réserver
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar