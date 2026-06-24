// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'

// const Contact = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: 'Téléphone',
//       content: '+225 07 88 76 86 49',
//       link: 'tel:+2250788768649'
//     },
//     {
//       icon: MessageCircle,
//       title: 'WhatsApp',
//       content: '+225 07 88 76 86 49',
//       link: 'https://wa.me/2250788768649'
//     },
//     {
//       icon: MapPin,
//       title: 'Adresse',
//       content: 'Abidjan, Côte d\'Ivoire',
//       link: '#'
//     },
//     {
//       icon: Clock,
//       title: 'Horaires',
//       content: 'Lun-Sam: 9h-19h | Dim: Sur RDV',
//       link: '#'
//     }
//   ]

//   return (
//     <section id="contact" className="py-24 bg-white">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-elegant">
//             Contactez-nous
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-rose to-prune" />
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
//           {contactInfo.map((info, index) => (
//             <motion.a
//               key={info.title}
//               href={info.link}
//               target={info.link.startsWith('http') ? '_blank' : undefined}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.1 * index, duration: 0.5 }}
//               whileHover={{ y: -5 }}
//               className="p-6 text-center transition-all duration-300 card-premium hover:shadow-xl"
//             >
//               <div className="flex items-center justify-center mx-auto mb-4 w-14 h-14 bg-gradient-to-br from-rose to-prune rounded-2xl">
//                 <info.icon className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="mb-2 font-semibold text-elegant">{info.title}</h3>
//               <p className="text-sm text-gray-600">{info.content}</p>
//             </motion.a>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="text-center"
//         >
//           <h3 className="mb-6 text-2xl font-bold font-playfair text-elegant">
//             Suivez-nous
//           </h3>
//           <div className="flex justify-center space-x-6">
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="flex items-center justify-center w-12 h-12 text-white transition-shadow rounded-full bg-gradient-to-br from-rose to-prune hover:shadow-lg"
//             >
//               <Instagram className="w-5 h-5" />
//             </motion.a>
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.2, rotate: -5 }}
//               className="flex items-center justify-center w-12 h-12 text-white transition-shadow rounded-full bg-gradient-to-br from-rose to-prune hover:shadow-lg"
//             >
//               <Facebook className="w-5 h-5" />
//             </motion.a>
//             <motion.a
//               href="https://wa.me/2250788768649"
//               target="_blank"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="flex items-center justify-center w-12 h-12 text-white transition-shadow rounded-full bg-gradient-to-br from-rose to-prune hover:shadow-lg"
//             >
//               <MessageCircle className="w-5 h-5" />
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Contact


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

// Icônes SVG personnalisées pour TikTok et Facebook
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

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+225 07 88 76 86 49',
      link: 'tel:+2250788768649',
      description: 'Appelez-nous directement'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+225 07 88 76 86 49',
      link: 'https://wa.me/2250788768649',
      description: 'Échangez avec nous'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Abidjan, Yopougon',
      link: '#',
      description: 'Quartier Caféier'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Sam : 9h - 19h',
      link: '#',
      description: 'Dimanche : Sur rendez-vous'
    }
  ]

  const socialLinks = [
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@dydyshop25',
      color: 'from-black to-gray-800',
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/share/1H6mfp3Ps6/?mibextid=wwXIfr',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/2250788768649',
      color: 'from-green-500 to-green-600',
    }
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-pearl lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-prune/3 to-transparent rounded-full -translate-x-1/3 -translate-y-1/3" />
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
              Restons en contact
            </p>
          </div>
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-3xl font-medium leading-tight lg:text-5xl font-playfair text-elegant">
              Contactez
              <br />
              <span className="italic font-normal text-prune">DYDY SHOP</span>
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed lg:text-base text-elegant/50">
              Une question ? Besoin d'un conseil ? Nous sommes à votre écoute.
            </p>
          </div>
        </motion.div>

        {/* Grille contact */}
        <div className="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:mb-24">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
              className="relative p-6 transition-all duration-500 bg-white shadow-sm group rounded-2xl hover:shadow-lg"
            >
              {/* Dégradé hover */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-br from-prune/[0.02] to-rose/[0.02] group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icône */}
                <div className="flex items-center justify-center w-12 h-12 mb-5 transition-transform duration-500 shadow-lg rounded-xl bg-gradient-to-br from-prune to-purple-600 group-hover:scale-110">
                  <info.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="mb-2 text-sm font-medium tracking-wider uppercase text-elegant">
                  {info.title}
                </h3>
                
                <p className="mb-1 text-sm font-light text-elegant/60">
                  {info.content}
                </p>
                
                <p className="text-xs font-light text-elegant/30">
                  {info.description}
                </p>

                {/* Flèche hover */}
                <div className="absolute transition-all duration-500 transform translate-x-2 opacity-0 bottom-6 right-6 group-hover:opacity-100 group-hover:translate-x-0">
                  <svg className="w-4 h-4 text-prune/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Séparateur */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-black/10" />
            <span className="text-xs font-light tracking-[0.4em] uppercase text-elegant/20">
              Suivez-nous
            </span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-black/10" />
          </div>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Label */}
                <span className="absolute text-xs font-light tracking-wider uppercase transition-all duration-500 -translate-x-1/2 -top-8 left-1/2 text-elegant/0 group-hover:text-elegant/30 whitespace-nowrap">
                  {social.name}
                </span>

                {/* Cercle */}
                <div className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                  {social.name === 'WhatsApp' ? (
                    <social.icon className="w-6 h-6 text-white" />
                  ) : (
                    <social.icon className="w-6 h-6 text-white" />
                  )}

                  {/* Halo */}
                  <div className="absolute inset-0 transition-opacity duration-500 bg-white rounded-full opacity-0 group-hover:opacity-10" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact