import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import Multicolumn from '../components/Multicolumn'
import Footer from '../components/Footer'

const multicolumnDetails = [
    {
        image: "",
        logoImage: "",
        subtext: "Bath",
        description: "Italian luxury and innovation for exclusive bathroom experiences.",
        buttonText1: "Visit Store",
        buttonURL1: "/link",
        buttonText2: "Download Catalogue",
        buttonURL2: "/catalogue"
    },
    {
        image: "",
        logoImage: "",
        subtext: "Bath",
        description: "Italian luxury and innovation for exclusive bathroom experiences.",
        buttonText1: "Visit Store",
        buttonURL1: "/link",
        buttonText2: "Download Catalogue",
        buttonURL2: "/catalogue"
    },
    {
        image: "",
        logoImage: "",
        subtext: "Bath",
        description: "Italian luxury and innovation for exclusive bathroom experiences.",
        buttonText1: "Visit Store",
        buttonURL1: "/link",
        buttonText2: "Download Catalogue",
        buttonURL2: "/catalogue"
    }

]

const BannerData = {
  heading: "Luxury Defined",
  subHeading: "Our Global Brands",
  description: "We Partner with the world's finest brands to bring you exceptional quality, design and performance.",
  buttonAvailability: true
}

function Brands() {
  return (
    <main className="main-layout--brands">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />
      <Multicolumn multicolumnDet={multicolumnDetails} />
      <Footer />
    </main>
  )
}

export default Brands