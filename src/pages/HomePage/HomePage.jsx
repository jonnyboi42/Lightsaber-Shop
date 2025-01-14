import React from 'react'
import Header from '../../components/Header/Header'
import HomePageCarousel from '../../components/Carousel/Carousel'
import CustomSaber from '../../components/CustomSaber/CustomSaber'
import Lightsabers from '../../components/LightSabers/Lightsabers'
import BrowseSelection from '../../components/BrowseSelection/BrowseSelection'
import Electronics from '../../components/Electronics/Electronics'
import LargeFooter from '../../components/Footer/LargeFooter'

const HomePage = () => {
  return (
    <>
    <Header/>
    <HomePageCarousel/>
    <CustomSaber/>
    <Electronics/>
    <BrowseSelection/>
    <Lightsabers/>
    

    </>
  )
}

export default HomePage