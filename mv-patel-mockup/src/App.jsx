import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './assets/main.css'

// Components 
import StickyHeader from './components/StickyHeader'
import HeroBanner from './components/HeroBanner'
import ImageWithContent from './components/ImageWithContent'
import MultipleImageGrid from './components/MultipleImageGrid'
import MultipleCardGrid from './components/MultipleCardGrid'
import Footer from './components/Footer'

// Files
import bathProductImage from './assets/bath-products.png'
import tilesImage from './assets/tiles.png'
import lightsImage from './assets/lights.png'
import othersImage from './assets/others.png'
import iconBathProduct from './assets/icons/iconBP.png'
import iconTiles from './assets/icons/iconT.png'
import iconLights from './assets/icons/iconL.png'
import iconOthers from './assets/icons/iconO.png'



function App() {
  const data = [1,2,3,4,5,6,7,8];
  const cardData = [1,2,3,4]
  return (
    <main id="main-wrapper--frontend">
      <StickyHeader />
      <HeroBanner />
      <ImageWithContent 
        heading="Bath Products" 
          icon={iconBathProduct}
          imageSrc={bathProductImage}
        imagePosition="right" />
      <ImageWithContent 
        heading="Tiles"
          icon={iconTiles}
          imageSrc={tilesImage}
        imagePosition="left" />
      <ImageWithContent
        heading="Lights"
          icon={iconLights}
          imageSrc={lightsImage}
        imagePosition="right"/>
      <ImageWithContent
        heading="Others"
          icon={iconOthers}
          imageSrc={othersImage}
        imagePosition="left"/>
      <MultipleImageGrid 
        imageData={data} />
      <MultipleCardGrid 
        cardData={cardData} />
      <Footer />
    </main>
  )
}

export default App
