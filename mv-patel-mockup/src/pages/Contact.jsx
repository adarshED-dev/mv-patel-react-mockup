import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const BannerData = {
  heading: "We're here to help you",
  subHeading: "Get in touch",
  description: "Our team is here to help you with the best possible support.",
  buttonAvailability: false
}

function Contact() {
  return (
    <main className="main-section--contact">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Contact