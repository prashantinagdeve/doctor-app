import React from 'react'
import Footer from '../Components/Footer/Footer'
import Routers from '../routes/Routers'
import Headerpage from '../Components/HeaderPage/Headerpage'

const Layout = () => {
  return (
    <>
   <Headerpage/>
   <main>
   <Routers/>
   </main>
   <Footer></Footer>
    </>
  )
}

export default Layout