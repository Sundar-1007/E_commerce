import React from 'react';
import { BestOf, CarouselData, CategoryBarData } from '../../data';
import { CategoryBar } from '../../Components/CategoryBar/CategoryBar';
import { BannerCarousel } from '../../Components/BannerCarousel/BannerCarousel';
import { EcomProductCarousel } from '../../Components/EcomProductCarousel/EcomProductCarousel';



export const Home = () => {

  const BgImg = "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=996&t=st=1717676080~exp=1717676680~hmac=5858b488eb680af6372bbbf40f905c4b222ee4fdfa3a0c38b01309ae1883e0e2"

  return (
    <>

      <div className='d-flex flex-wrap justify-content-center text-center gap-5'>{CategoryBarData.map((value, index) => (
        <CategoryBar key={index} imageSrc={value.imageSrc} category={value.category} />
      ))}</div>

      <div className='overflow-hidden'>
        <BannerCarousel CarouselData={CarouselData} />
      </div>

      <EcomProductCarousel BgImg={BgImg} Data={BestOf.Electronics} Title="Best Of Electronics" />
      <EcomProductCarousel BgImg={BgImg} Data={BestOf.Electronics} Title="Beauty, Food, Toys" />
      <EcomProductCarousel BgImg={BgImg} Data={BestOf.Electronics} Title="Winter Essentials" />
      <EcomProductCarousel BgImg={BgImg} Data={BestOf.Electronics} Title="Wedding & Gifting Specials" />
    </>
  )
}
