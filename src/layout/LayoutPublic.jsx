import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LayoutPublic() {
  return (
  <>
  <Navbar/>
  <main className='bg-neutral-900 h-screen'>
  <Outlet/>
  </main>
<Footer/>
  </>
  )
}

export default LayoutPublic