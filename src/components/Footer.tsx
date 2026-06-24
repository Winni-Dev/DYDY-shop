// import { motion } from 'framer-motion'
// import { Sparkles, Heart } from 'lucide-react'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="py-16 text-white bg-elegant">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-3">
//           <div>
//             <div className="flex items-center mb-6 space-x-2">
//               <Sparkles className="w-8 h-8 text-champagne" />
//               <span className="text-2xl font-bold text-white font-playfair">
//                 DYDY SHOP
//               </span>
//             </div>
//             <p className="leading-relaxed text-gray-400">
//               Votre institut de beauté premium à Abidjan. 
//               Sublimer votre beauté naturelle est notre passion.
//             </p>
//           </div>

//           <div>
//             <h4 className="mb-6 text-xl font-bold font-playfair">Liens rapides</h4>
//             <ul className="space-y-3">
//               <li><a href="#services" className="text-gray-400 transition-colors hover:text-champagne">Services</a></li>
//               <li><a href="#gallery" className="text-gray-400 transition-colors hover:text-champagne">Galerie</a></li>
//               <li><a href="#booking" className="text-gray-400 transition-colors hover:text-champagne">Réservation</a></li>
//               <li><a href="#contact" className="text-gray-400 transition-colors hover:text-champagne">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="mb-6 text-xl font-bold font-playfair">Newsletter</h4>
//             <p className="mb-4 text-gray-400">
//               Recevez nos offres et actualités en exclusivité.
//             </p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Votre email"
//                 className="flex-1 px-4 py-2 text-white placeholder-gray-400 border rounded-l-xl bg-white/10 border-white/20 focus:outline-none focus:border-champagne"
//               />
//               <button className="px-6 py-2 text-white transition-colors bg-champagne rounded-r-xl hover:bg-opacity-90">
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="pt-8 text-center border-t border-white/10">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="flex items-center justify-center space-x-2 text-gray-400"
//           >
//             <span>© {currentYear} DYDY SHOP. Fait avec</span>
//             <Heart className="w-4 h-4 fill-current text-rose" />
//             <span>à Abidjan</span>
//           </motion.p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Heart, 
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Icônes SVG pour TikTok et Facebook
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.89a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )

  const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Équipe', href: '#team' },
    { name: 'Réservation', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ]

  const contactDetails = [
    { icon: MapPin, text: 'Abidjan, Yopougon - Quartier Caféier' },
    { icon: Phone, text: '+225 07 88 76 86 49' },
    { icon: Mail, text: 'contact@dydyshop.ci' },
  ]

  const socialLinks = [
    { name: 'TikTok', icon: TikTokIcon, url: 'https://www.tiktok.com/@dydyshop25' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/share/1H6mfp3Ps6/?mibextid=wwXIfr' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative text-white bg-elegant">
      
      {/* Ligne décorative supérieure */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="relative max-w-6xl px-6 pt-20 pb-10 mx-auto lg:px-10 lg:pt-28">
        
        <div ref={ref} className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-12 lg:gap-8 lg:mb-20">
          
          {/* Colonne 1 - Marque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 overflow-hidden rounded-xl">
                <img 
                  src="/favicon.png" 
                  alt="DYDY SHOP" 
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-xl font-light tracking-[0.3em] uppercase text-white">
                DYDY SHOP
              </span>
            </div>

            <p className="max-w-sm mb-8 text-sm font-light leading-relaxed text-white/30">
              Votre institut de beauté premium à Abidjan. 
              Sublimer votre beauté naturelle est notre passion, 
              dans un cadre luxueux et professionnel.
            </p>

            {/* Contact rapide */}
            <div className="space-y-3">
              {contactDetails.map((detail) => (
                <div key={detail.text} className="flex items-center gap-3 text-sm font-light text-white/20">
                  <detail.icon className="w-4 h-4 text-white/10" />
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 - Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h4 className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-white/20">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-light transition-all duration-300 text-white/30 hover:text-champagne group"
                  >
                    <span className="w-0 h-[1px] bg-champagne/50 transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h4 className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-white/20">
              Newsletter
            </h4>
            <p className="mb-5 text-sm font-light leading-relaxed text-white/20">
              Recevez nos offres exclusives, conseils beauté et actualités en avant-première.
            </p>
            
            {/* <div className="flex group">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 text-sm font-light text-white placeholder-white/10 bg-white/[0.03] border border-white/[0.06] rounded-l-xl focus:outline-none focus:border-champagne/30 transition-all duration-300"
              />
              <button className="px-5 py-3 text-white transition-all duration-300 rounded-r-xl bg-gradient-to-r from-prune to-purple-600 hover:shadow-lg hover:shadow-prune/20">
                <Send className="w-4 h-4" />
              </button>
            </div> */}

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <social.icon className="w-4 h-4 transition-colors text-white/30 hover:text-white/60" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Barre inférieure */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center gap-4 pt-8 border-t lg:flex-row lg:justify-between border-white/[0.04]"
        >
          <p className="flex items-center gap-2 text-xs font-light tracking-wider text-white/15">
            <span>© {currentYear} DYDY SHOP</span>
            <span className="text-white/5">•</span>
            <span className="flex items-center gap-1">
              Fait avec
              <Heart className="w-3 h-3 fill-current text-rose/50" />
              à Abidjan
            </span>
          </p>

          {/* Retour en haut */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-light tracking-wider uppercase transition-colors duration-300 text-white/15 hover:text-champagne/50 group"
          >
            <span>Retour en haut</span>
            <ChevronRight className="w-3 h-3 transition-transform duration-300 -rotate-90 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer