import react from 'react'
import './App.css'
import SideBar from './components/layout/SideBar';
import OverlayBar from './components/layout/OverlayBar';

function App() {

  return (
    <main className='main-wrap ms-0 xl:ms-[235px]'>
      <SideBar />
      <OverlayBar />
    </main>
  )
}

export default App
