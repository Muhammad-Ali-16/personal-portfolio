import './App.css'
import SideBar from './components/layout/SideBar';
import OverlayBar from './components/layout/OverlayBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Summary from './components/sections/Summary';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import { useEffect, useState } from 'react'


function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => { clearTimeout(timer) }
  }, [])

  return (
    <>
      <div
        className={`pre-loader bg-white fixed w-[100vw] z-50 flex flex-col justify-center items-center ${isLoading ? 'h-[100vh]' : 'h-0 -translate-y-14 transition-height duration-400'}`}>
        <div className='flex space-x-8'>
          <span className='loading-animation h-5 w-5 block bg-black/70 rounded-full'></span>
          <span className='loading-animation h-5 w-5 block bg-black/70 rounded-full'></span>
          <span className='loading-animation h-5 w-5 block bg-black/70 rounded-full'></span>
        </div>
      </div>

      <main className='main-wrap ms-0 xl:ms-[235px]'>
        <div className="bg-img-main"></div>
        <SideBar />
        <OverlayBar />
        <Hero />
        <About />
        <Services />
        <Summary />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App
