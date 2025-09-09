import './App.css'
import SideBar from './components/layout/SideBar';
import OverlayBar from './components/layout/OverlayBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Summary from './components/sections/Summary';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

function App() {

  return (
    <main className='main-wrap ms-0 xl:ms-[235px]'>
      <div className="bg-img-main"></div>
      <SideBar />
      <OverlayBar />
      <Hero />
      <About />
      <Services />
      <Summary />
      <Portfolio />
      <Contact/>
    </main>
  )
}

export default App
