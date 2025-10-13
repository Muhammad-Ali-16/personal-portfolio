import React, { useState } from 'react'
import SocialIcons from '../common/SocialIcons'
import NavLinks from '../common/NavLinks'

function OverlayBar() {
  const [isOpen, setIsOpen] = useState(false)

  const HandleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='overlay-bar max-h-[60vh] block xl:hidden bg-[var(--nav-background)] fixed w-full text-[var(--heading-light)] z-10'>
      <div className='mx-4 my-2 lg:m-5'>
        <div className='overlaybar-content flex flex-row items-center justify-between'>
          <h3 className='text-lg font-bold top-0'>Muhammad Ali</h3>
          <div className='social-icons flex flex-row justify-center items-center space-x-3 lg:space-x-5 text-sm'>
            <SocialIcons />
            <div className='toogler-icon ms-1'>
              <button className='cursor-pointer' onClick={HandleToggle}>
                <span className={`my-2 h-0.5 w-6 block bg-white transition-all duration-200 ease-in-out transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`my-2 h-0.5 w-6 block bg-white transition-all duration-200 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`my-2 h-0.5 w-6 block bg-white transition-all duration-200 ease-in-out transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={`overlaybar-links mt-3 overlay-content transition-all duration-400 ${isOpen ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'} ease-in-out`}>
          <ul className='space-y-4'>
            <NavLinks border="border-b border-[var(--overlay-border)] pb-3" />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default OverlayBar
