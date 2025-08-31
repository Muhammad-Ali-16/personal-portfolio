import logo from '../../assets/logo.jpeg'
import NavLinks from '../common/NavLinks'
import SocialIcons from '../common/SocialIcons'

function SideBar() {


  return (
    <nav className="w-[235px] fixed bg-[var(--background-dark)] h-full overflow-hidden overflow-y-auto hidden xl:block left-0 top-0">
      <div className="mx-auto p-2 h-full flex flex-col items-center text-center text-[var(--text-heading-light)]">
        <div className='cursor-pointer mt-10 bg-[var(--nav-logo)] p-2 rounded-full'>
          <img src={logo} alt="logo" className='rounded-full h-[150px] w-[150px]' />
        </div>
        <h3 className='mt-3 text-xl font-bold'>Muhammad Ali</h3>
        <div className='mt-15'>
          <ul className='space-y-7 text-md'>
            <NavLinks />
          </ul>
        </div>
        <div className='mt-12 space-x-5 text-lg'>
          <SocialIcons />
        </div>
      </div>
    </nav>
  )
}

export default SideBar
