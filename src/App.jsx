import react from 'react'
import './App.css'
import SideBar from './components/layout/SideBar';
import OverlayBar from './components/layout/OverlayBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';

function App() {

  return (
    <main className='main-wrap ms-0 xl:ms-[235px]'>
      <div className="bg-img-main"></div>
      <SideBar />
      <OverlayBar />
      <Hero />
      <About/>
      <Services />
    </main>
  )
}

export default App
