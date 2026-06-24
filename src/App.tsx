// import { useEffect } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Founder from './components/Founder'
// import Services from './components/Services'
// import Gallery from './components/Gallery'
// import Team from './components/Team'
// import WhyUs from './components/WhyUs'
// import Testimonials from './components/Testimonials'
// import Booking from './components/Booking'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// function App() {
//   useEffect(() => {
//     // Lazy loading pour les images
//     const images = document.querySelectorAll('img[data-src]')
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const img = entry.target as HTMLImageElement
//           img.src = img.dataset.src || ''
//           img.classList.add('loaded')
//           observer.unobserve(img)
//         }
//       })
//     })

//     images.forEach(img => imageObserver.observe(img))
//   }, [])

//   return (
//     <div className="min-h-screen bg-pearl">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Founder />
//         <Services />
//         <Gallery />
//         <Team />
//         <WhyUs />
//         <Testimonials />
//         <Booking />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default App

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Founder from './components/Founder'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Team from './components/Team'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.classList.add('loaded')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }, [])

  return (
    <div className="min-h-screen bg-pearl">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Gallery />
        <Team />
        <WhyUs />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App