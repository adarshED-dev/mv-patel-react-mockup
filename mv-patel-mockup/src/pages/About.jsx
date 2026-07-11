import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
// import Icons from '../components/Icons'

import Footer from '../components/Footer'

const BannerData = {
  heading: "Defined by quality Driven by Trust.",
  subHeading: "About Us",
  description: "MV Patel & Co. is indore's trusted destination for premium bath fitings, tiles, and designer lighting. We partner with world-class brands to bring timeless elegance to your spaces.",
  buttonAvailability: false
}

function About() {
  return (
    <main className="main-layout--about">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />

      {/* <Icons /> */}
      <Footer />
    </main>
  )
}

export default About