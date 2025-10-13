import logo from '../../assets/logo.jpeg'
import NavLinks from '../common/NavLinks'
import SocialIcons from '../common/SocialIcons'

function SideBar() {


  return (
    <nav className="w-[235px] fixed bg-[var(--nav-background)] h-full overflow-hidden overflow-y-auto hidden xl:block left-0 top-0 z-10">
      <div className="mx-auto p-2 h-full flex flex-col items-center justify-between text-center text-[var(--heading-light)]">
        <div className='nav-logo'>
          <div className='cursor-pointer mt-6 bg-[var(--nav-logo)] p-2 rounded-full'>
            <img src={logo} alt="logo" className='rounded-full h-[150px] w-[150px]' />
          </div>
          <h3 className='mt-3 text-lg font-bold'>Muhammad Ali</h3>
        </div>
        <div className='mt-15 nav-links'>
          <ul className='space-y-7 text-sm'>
            <NavLinks />
          </ul>
        </div>
        <div className='nav-icons mt-12 space-x-5 text-md mb-3'>
          <SocialIcons />
        </div>

      </div>
    </nav>
  )
}

export default SideBar
