import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import Track from '../../components/track/Track'
import { Link } from 'react-router-dom'
import Testimonial from '../../components/testimonials/Testimonials'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/productCard/ProductCard'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home