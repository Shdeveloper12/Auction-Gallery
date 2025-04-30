import { useState } from 'react'

import './App.css'
import Navber from './components/navber/Navber'

import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Auction from './components/Auction/Auction'
import Auctions from './components/Auctions/Auctions'

function App() {
  

  return (
    <>

    
    <Navber></Navber>
    <Banner></Banner>
   <div className='bg-blue-100 py-20'>
    <h2 className='px-12 mb-2 font-semibold text-xl'>Active Auctions</h2>
    <p className='px-12 mb-3'>Discover and bid on extraordinary items</p>
   <Auctions></Auctions>
   </div>
    
    <Footer></Footer>
   
   
  


    </>
  )
}

export default App
