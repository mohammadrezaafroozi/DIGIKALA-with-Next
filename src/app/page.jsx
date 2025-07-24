
import React from 'react'
import HomePage from './components/home/HomePage'
import Home2 from './components/home2/Home2'
import Home3 from './components/home3/Home3'
import Home4 from './components/home4/Home4'
import Home5 from './components/home5/Home5'
import Home6 from './components/home6/Home6'
import Home7 from './components/home7/Home7'
import Home8 from './components/home8/Home8'
import Home9 from './components/home9/Home9'
import Home10 from './components/home10/Home10'
import Sliderhome from './components/slider_home/sliderhome'
import Svg from './components/svg/svg'
import Svg2 from './components/svg/svg2'
import Categoresss from './category/categoresss'
import Svg4 from './components/svg/svg4'
import Svg3 from './components/svg/svg3'
import "./globals.css";
export default function Page() {

  return (


      <section className=' w-full'>
        <div className='container relative mx-auto '>
        
          <Sliderhome />
          <HomePage />
          <Home2 />
          <Home3 />
          <Svg />
          <Home4 />
          <Svg2 />
          <Home5 />
          <Home6 />
          <Home7 />
          <Categoresss />
          <Home8 />
          <Svg3 />
          <Home9 />
          <Svg4 />
          <Home10 />
        </div>
      </section>

  
  )
}
