import Head from 'next/head'
import Image from 'next/image'
import {Product, Navbar, FooterBanner, Cart,HeroBanner,Footer} from '../components'
import {client} from '../lib/client'

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <div className='products-heading'>
        <h2>best selling headphones</h2>
        <p>next generation quality headphones</p>
      </div>
      <div className='products-container'>
        {["product 1", "product 2", "product 3"].map((product,index)=>{
          return <div key={index}>{product}</div>
        })}
      </div>
      <Footer/>
    </>
  )
}
