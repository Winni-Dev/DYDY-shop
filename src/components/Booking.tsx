

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { 
//   Calendar, 
//   Clock, 
//   User, 
//   Phone, 
//   MessageSquare, 
//   ChevronLeft,
//   Scissors,
//   Hand,
//   Footprints,
//   Smile,
//   Gem,
//   ShoppingBag,
//   Sparkles,
//   Send,
//   Check
// } from 'lucide-react'

// const Booking = () => {
//   const [step, setStep] = useState(1)
//   const [selectedService, setSelectedService] = useState<string | null>(null)
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     service: '',
//     date: '',
//     time: '',
//     message: ''
//   })
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-50px" })

//   const services = [
//     { 
//       id: 'onglerie', 
//       name: 'Onglerie', 
//       icon: Scissors, 
//       description: 'Gel, capsule, vernis & Nail Art',
//       price: 'À partir de 5.000 FCFA'
//     },
//     { 
//       id: 'manucure', 
//       name: 'Manucure', 
//       icon: Hand, 
//       description: 'Soin complet des mains',
//       price: 'À partir de 3.000 FCFA'
//     },
//     { 
//       id: 'pedicure', 
//       name: 'Pédicure', 
//       icon: Footprints, 
//       description: 'Soin complet des pieds',
//       price: 'À partir de 5.000 FCFA'
//     },
//     { 
//       id: 'soins-visage', 
//       name: 'Soins Visage', 
//       icon: Smile, 
//       description: 'Soin nettoyant & hydratant',
//       price: 'À partir de 7.500 FCFA'
//     },
//     { 
//       id: 'press-on', 
//       name: 'Press-On Nails', 
//       icon: Gem, 
//       description: 'Ongles instantanés personnalisés',
//       price: 'À partir de 3.000 FCFA'
//     },
//     { 
//       id: 'perruques', 
//       name: 'Perruques & Sacs', 
//       icon: ShoppingBag, 
//       description: 'Accessoires premium',
//       price: 'Sur commande'
//     }
//   ]

//   const handleServiceSelect = (service: typeof services[0]) => {
//     setSelectedService(service.id)
//     setFormData({ ...formData, service: service.name })
//     // Petit délai pour montrer la sélection avant de passer à l'étape 2
//     setTimeout(() => setStep(2), 300)
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
    
//     const message = `Bonjour DYDY SHOP,%0A%0AJe souhaite prendre un rendez-vous.%0A%0ANom : ${formData.name}%0ATéléphone : ${formData.phone}%0AService : ${formData.service}%0ADate : ${formData.date}%0AHeure : ${formData.time}%0AMessage : ${formData.message || 'Aucun'}%0A%0AMerci.`
    
//     window.open(`https://wa.me/2250788768649?text=${message}`, '_blank')
//   }

//   const isFormValid = formData.name && formData.phone && formData.date && formData.time

//   return (
//     <section id="booking" className="relative py-24 overflow-hidden bg-white lg:py-32">
      
//       {/* Fond décoratif */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-prune/3 to-transparent rounded-full -translate-y-1/3 translate-x-1/4" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose/3 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

//       <div className="relative max-w-3xl px-6 mx-auto lg:px-10">
        
//         {/* En-tête */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="mb-16 text-center lg:mb-20"
//         >
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-champagne" />
//             <p className="text-xs font-medium tracking-[0.4em] uppercase text-champagne">
//               Réservation
//             </p>
//             <span className="w-8 h-[1px] bg-gradient-to-r from-champagne to-transparent" />
//           </div>
          
//           <h2 className="mb-4 text-3xl font-medium leading-tight lg:text-4xl font-playfair text-elegant">
//             Réservez votre
//             <br />
//             <span className="italic font-normal text-prune">moment de beauté</span>
//           </h2>
//           <p className="text-sm font-light leading-relaxed lg:text-base text-elegant/50">
//             En quelques clics, prenez rendez-vous pour une expérience unique.
//           </p>
//         </motion.div>

//         {/* Étapes */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
          
//           {/* Indicateur d'étapes */}
//           <div className="flex items-center justify-center gap-3 mb-10">
//             {/* Étape 1 */}
//             <button 
//               onClick={() => setStep(1)}
//               className="flex items-center gap-3 group"
//             >
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
//                 step === 1 
//                   ? 'bg-prune text-white shadow-lg shadow-prune/20' 
//                   : step === 2 
//                     ? 'bg-prune/20 text-prune'
//                     : 'bg-elegant/5 text-elegant/30'
//               }`}>
//                 {step === 2 ? <Check className="w-4 h-4" /> : '1'}
//               </div>
//               <span className={`hidden sm:block text-xs font-light tracking-wider uppercase transition-colors ${
//                 step === 1 ? 'text-prune' : 'text-elegant/30'
//               }`}>
//                 Service
//               </span>
//             </button>

//             <div className={`w-12 h-[1px] transition-colors duration-500 ${
//               step === 2 ? 'bg-prune/30' : 'bg-elegant/10'
//             }`} />

//             {/* Étape 2 */}
//             <div className="flex items-center gap-3">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
//                 step === 2 
//                   ? 'bg-prune text-white shadow-lg shadow-prune/20' 
//                   : 'bg-elegant/5 text-elegant/30'
//               }`}>
//                 2
//               </div>
//               <span className={`hidden sm:block text-xs font-light tracking-wider uppercase transition-colors ${
//                 step === 2 ? 'text-prune' : 'text-elegant/30'
//               }`}>
//                 Détails
//               </span>
//             </div>
//           </div>

//           {/* Carte du formulaire */}
//           <div className="relative bg-white shadow-sm rounded-3xl border border-black/[0.02] overflow-hidden">
            
//             {/* En-tête de la carte */}
//             <div className="px-8 py-6 border-b border-black/[0.02] bg-pearl/50">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <Sparkles className="w-5 h-5 text-champagne" />
//                   <span className="text-sm font-medium tracking-wider uppercase text-elegant/60">
//                     {step === 1 ? 'Choisissez votre service' : 'Vos informations'}
//                   </span>
//                 </div>
//                 {step === 2 && (
//                   <button
//                     onClick={() => setStep(1)}
//                     className="flex items-center gap-1 text-xs font-light tracking-wider uppercase transition-colors text-elegant/30 hover:text-prune"
//                   >
//                     <ChevronLeft className="w-3 h-3" />
//                     Retour
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Contenu */}
//             <div className="p-8">
//               <AnimatePresence mode="wait">
//                 {step === 1 ? (
//                   <motion.div
//                     key="step1"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                       {services.map((service) => (
//                         <motion.button
//                           key={service.id}
//                           onClick={() => handleServiceSelect(service)}
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className={`relative p-5 text-left transition-all duration-300 rounded-2xl border group ${
//                             selectedService === service.id
//                               ? 'border-prune/30 bg-prune/[0.02]'
//                               : 'border-transparent bg-elegant/[0.02] hover:bg-elegant/[0.04]'
//                           }`}
//                         >
//                           <div className="flex items-start gap-4">
//                             {/* Icône */}
//                             <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 ${
//                               selectedService === service.id
//                                 ? 'bg-gradient-to-br from-prune to-purple-600 shadow-md'
//                                 : 'bg-elegant/5 group-hover:bg-elegant/10'
//                             }`}>
//                               <service.icon className={`w-4 h-4 transition-colors ${
//                                 selectedService === service.id ? 'text-white' : 'text-elegant/40'
//                               }`} />
//                             </div>

//                             <div className="flex-1 min-w-0">
//                               <h4 className={`text-sm font-medium transition-colors ${
//                                 selectedService === service.id ? 'text-prune' : 'text-elegant'
//                               }`}>
//                                 {service.name}
//                               </h4>
//                               <p className="mt-0.5 text-xs font-light text-elegant/30 truncate">
//                                 {service.description}
//                               </p>
//                               <p className="mt-2 text-xs font-medium text-prune/60">
//                                 {service.price}
//                               </p>
//                             </div>

//                             {/* Check de sélection */}
//                             {selectedService === service.id && (
//                               <motion.div
//                                 initial={{ scale: 0 }}
//                                 animate={{ scale: 1 }}
//                                 className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-prune"
//                               >
//                                 <Check className="w-3 h-3 text-white" />
//                               </motion.div>
//                             )}
//                           </div>
//                         </motion.button>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ) : (
//                   <motion.form
//                     key="step2"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     onSubmit={handleSubmit}
//                     className="space-y-5"
//                   >
//                     {/* Service sélectionné */}
//                     <div className="flex items-center gap-3 p-3 mb-2 rounded-xl bg-prune/[0.03] border border-prune/10">
//                       <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-prune to-purple-600">
//                         <Check className="w-4 h-4 text-white" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium text-elegant">{formData.service}</p>
//                         <p className="text-xs text-elegant/30">Service sélectionné</p>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                       <div>
//                         <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
//                           <User className="w-3.5 h-3.5" />
//                           Nom complet
//                         </label>
//                         <input
//                           type="text"
//                           required
//                           value={formData.name}
//                           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                           className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300 placeholder:text-elegant/20"
//                           placeholder="Votre nom complet"
//                         />
//                       </div>

//                       <div>
//                         <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
//                           <Phone className="w-3.5 h-3.5" />
//                           Téléphone
//                         </label>
//                         <input
//                           type="tel"
//                           required
//                           value={formData.phone}
//                           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                           className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300 placeholder:text-elegant/20"
//                           placeholder="+225 07 00 00 00 00"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                       <div>
//                         <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
//                           <Calendar className="w-3.5 h-3.5" />
//                           Date souhaitée
//                         </label>
//                         <input
//                           type="date"
//                           required
//                           value={formData.date}
//                           onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                           className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300"
//                         />
//                       </div>

//                       <div>
//                         <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
//                           <Clock className="w-3.5 h-3.5" />
//                           Heure souhaitée
//                         </label>
//                         <input
//                           type="time"
//                           required
//                           value={formData.time}
//                           onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                           className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
//                         <MessageSquare className="w-3.5 h-3.5" />
//                         Message <span className="font-light normal-case">(optionnel)</span>
//                       </label>
//                       <textarea
//                         value={formData.message}
//                         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                         rows={3}
//                         className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300 placeholder:text-elegant/20 resize-none"
//                         placeholder="Précisez vos besoins, allergies, préférences..."
//                       />
//                     </div>

//                     <motion.button
//                       type="submit"
//                       disabled={!isFormValid}
//                       whileHover={isFormValid ? { scale: 1.01 } : {}}
//                       whileTap={isFormValid ? { scale: 0.99 } : {}}
//                       className={`w-full py-4 rounded-2xl text-sm font-medium tracking-wider uppercase transition-all duration-500 flex items-center justify-center gap-3 ${
//                         isFormValid
//                           ? 'bg-gradient-to-r from-prune to-purple-600 text-white shadow-lg shadow-prune/20 hover:shadow-xl hover:shadow-prune/30'
//                           : 'bg-elegant/5 text-elegant/20 cursor-not-allowed'
//                       }`}
//                     >
//                       <Send className="w-4 h-4" />
//                       Envoyer sur WhatsApp
//                     </motion.button>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Booking



import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageSquare, 
  ChevronLeft,
  Scissors,
  Hand,
  Footprints,
  Smile,
  Gem,
  ShoppingBag,
  Droplets,
  ScissorsLineDashed,
  Sparkles,
  Send,
  Check
} from 'lucide-react'

const Booking = () => {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const services = [
    { 
      id: 'onglerie', 
      name: 'Onglerie', 
      icon: Scissors, 
      description: 'Gel, capsule, vernis & Nail Art',
      price: 'À partir de 5.000 FCFA'
    },
    { 
      id: 'press-on', 
      name: 'Press-On Nails', 
      icon: Gem, 
      description: 'Ongles instantanés personnalisés',
      price: 'À partir de 3.000 FCFA'
    },
    { 
      id: 'manucure', 
      name: 'Manucure', 
      icon: Hand, 
      description: 'Soin complet des mains',
      price: 'À partir de 3.000 FCFA'
    },
    { 
      id: 'pedicure', 
      name: 'Pédicure', 
      icon: Footprints, 
      description: 'Soin complet des pieds',
      price: 'À partir de 5.000 FCFA'
    },
    { 
      id: 'soins-visage', 
      name: 'Soins Visage', 
      icon: Smile, 
      description: 'Soin nettoyant & hydratant',
      price: 'À partir de 7.500 FCFA'
    },
    { 
      id: 'soins-corps', 
      name: 'Soins du corps', 
      icon: Droplets, 
      description: 'Gommage, enveloppement & modelage',
      price: 'À partir de 10.000 FCFA'
    },
    { 
      id: 'epilation', 
      name: 'Épilation à la cire', 
      icon: ScissorsLineDashed, 
      description: 'Épilation précise & douce',
      price: 'À partir de 3.000 FCFA'
    },
    { 
      id: 'perruques', 
      name: 'Perruques & Sacs', 
      icon: ShoppingBag, 
      description: 'Accessoires premium',
      price: 'Sur commande'
    }
  ]

  const handleServiceSelect = (service: typeof services[0]) => {
    setSelectedService(service.id)
    setFormData({ ...formData, service: service.name })
    setTimeout(() => setStep(2), 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Bonjour DYDY SHOP,%0A%0AJe souhaite prendre un rendez-vous.%0A%0ANom : ${formData.name}%0ATéléphone : ${formData.phone}%0AService : ${formData.service}%0ADate : ${formData.date}%0AHeure : ${formData.time}%0AMessage : ${formData.message || 'Aucun'}%0A%0AMerci.`
    
    window.open(`https://wa.me/2250788768649?text=${message}`, '_blank')
  }

  const isFormValid = formData.name && formData.phone && formData.date && formData.time

  return (
    <section id="booking" className="relative py-24 overflow-hidden bg-white lg:py-32">
      
      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-prune/3 to-transparent rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose/3 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-3xl px-6 mx-auto lg:px-10">
        
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-champagne" />
            <p className="text-xs font-medium tracking-[0.4em] uppercase text-champagne">
              Réservation
            </p>
            <span className="w-8 h-[1px] bg-gradient-to-r from-champagne to-transparent" />
          </div>
          
          <h2 className="mb-4 text-3xl font-medium leading-tight lg:text-4xl font-playfair text-elegant">
            Réservez votre
            <br />
            <span className="italic font-normal text-prune">moment de beauté</span>
          </h2>
          <p className="text-sm font-light leading-relaxed lg:text-base text-elegant/50">
            En quelques clics, prenez rendez-vous pour une expérience unique.
          </p>
        </motion.div>

        {/* Étapes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          
          {/* Indicateur d'étapes */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <button 
              onClick={() => setStep(1)}
              className="flex items-center gap-3 group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                step === 1 
                  ? 'bg-prune text-white shadow-lg shadow-prune/20' 
                  : step === 2 
                    ? 'bg-prune/20 text-prune'
                    : 'bg-elegant/5 text-elegant/30'
              }`}>
                {step === 2 ? <Check className="w-4 h-4" /> : '1'}
              </div>
              <span className={`hidden sm:block text-xs font-light tracking-wider uppercase transition-colors ${
                step === 1 ? 'text-prune' : 'text-elegant/30'
              }`}>
                Service
              </span>
            </button>

            <div className={`w-12 h-[1px] transition-colors duration-500 ${
              step === 2 ? 'bg-prune/30' : 'bg-elegant/10'
            }`} />

            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                step === 2 
                  ? 'bg-prune text-white shadow-lg shadow-prune/20' 
                  : 'bg-elegant/5 text-elegant/30'
              }`}>
                2
              </div>
              <span className={`hidden sm:block text-xs font-light tracking-wider uppercase transition-colors ${
                step === 2 ? 'text-prune' : 'text-elegant/30'
              }`}>
                Détails
              </span>
            </div>
          </div>

          {/* Carte du formulaire */}
          <div className="relative bg-white shadow-sm rounded-3xl border border-black/[0.02] overflow-hidden">
            
            {/* En-tête de la carte */}
            <div className="px-8 py-6 border-b border-black/[0.02] bg-pearl/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-champagne" />
                  <span className="text-sm font-medium tracking-wider uppercase text-elegant/60">
                    {step === 1 ? 'Choisissez votre service' : 'Vos informations'}
                  </span>
                </div>
                {step === 2 && (
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-xs font-light tracking-wider uppercase transition-colors text-elegant/30 hover:text-prune"
                  >
                    <ChevronLeft className="w-3 h-3" />
                    Retour
                  </button>
                )}
              </div>
            </div>

            {/* Contenu */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {services.map((service) => (
                        <motion.button
                          key={service.id}
                          onClick={() => handleServiceSelect(service)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-5 text-left transition-all duration-300 rounded-2xl border group ${
                            selectedService === service.id
                              ? 'border-prune/30 bg-prune/[0.02]'
                              : 'border-transparent bg-elegant/[0.02] hover:bg-elegant/[0.04]'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            {/* Icône */}
                            <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 ${
                              selectedService === service.id
                                ? 'bg-gradient-to-br from-prune to-purple-600 shadow-md'
                                : 'bg-elegant/5 group-hover:bg-elegant/10'
                            }`}>
                              <service.icon className={`w-4 h-4 transition-colors ${
                                selectedService === service.id ? 'text-white' : 'text-elegant/40'
                              }`} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h4 className={`text-sm font-medium transition-colors ${
                                selectedService === service.id ? 'text-prune' : 'text-elegant'
                              }`}>
                                {service.name}
                              </h4>
                              <p className="mt-0.5 text-xs font-light text-elegant/30 truncate">
                                {service.description}
                              </p>
                              <p className="mt-2 text-xs font-medium text-prune/60">
                                {service.price}
                              </p>
                            </div>

                            {/* Check de sélection */}
                            {selectedService === service.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-prune"
                              >
                                <Check className="w-3 h-3 text-white" />
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Service sélectionné */}
                    <div className="flex items-center gap-3 p-3 mb-2 rounded-xl bg-prune/[0.03] border border-prune/10">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-prune to-purple-600">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-elegant">{formData.service}</p>
                        <p className="text-xs text-elegant/30">Service sélectionné</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
                          <User className="w-3.5 h-3.5" />
                          Nom complet
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300 placeholder:text-elegant/20"
                          placeholder="Votre nom complet"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
                          <Phone className="w-3.5 h-3.5" />
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300 placeholder:text-elegant/20"
                          placeholder="+225 07 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
                          <Calendar className="w-3.5 h-3.5" />
                          Date souhaitée
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
                          <Clock className="w-3.5 h-3.5" />
                          Heure souhaitée
                        </label>
                        <input
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 mb-2 text-xs font-medium tracking-wider uppercase text-elegant/40">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Message <span className="font-light normal-case">(optionnel)</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 text-sm font-light bg-transparent border rounded-xl border-elegant/10 focus:border-prune/30 focus:bg-prune/[0.01] outline-none transition-all duration-300 placeholder:text-elegant/20 resize-none"
                        placeholder="Précisez vos besoins, allergies, préférences..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={!isFormValid}
                      whileHover={isFormValid ? { scale: 1.01 } : {}}
                      whileTap={isFormValid ? { scale: 0.99 } : {}}
                      className={`w-full py-4 rounded-2xl text-sm font-medium tracking-wider uppercase transition-all duration-500 flex items-center justify-center gap-3 ${
                        isFormValid
                          ? 'bg-gradient-to-r from-prune to-purple-600 text-white shadow-lg shadow-prune/20 hover:shadow-xl hover:shadow-prune/30'
                          : 'bg-elegant/5 text-elegant/20 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      Envoyer sur WhatsApp
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Booking