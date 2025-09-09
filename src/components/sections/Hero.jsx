import { Typewriter } from 'react-simple-typewriter'


function Hero() {
  return (
    <section className="hero-main relative bg-black/70 top-0 left-0 z-1 w-full h-[100vh] flex justify-center items-center text-center text-[var(--heading-light)]" id='home'>
      <div className="relative max-w-screen-2xl mx-auto">
        <div className='hero-content'>
          <h4 className='text-2xl lg:text-3xl font-semibold'>Welcome!</h4>
          <h1 className='text-3xl lg:text-6xl font-bold my-3'>I'm  <Typewriter
            words={['Ali Raza', 'a Web Designer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={90}
            delaySpeed={1500}
          /></h1>
          <p className='text-sm lg:text-lg'>based in Karachi, Pakistan.</p>
          <a href="https://www.linkedin.com/in/muhammad-ali18/" target='_blank'>
            <button
              className='transition-all ease-in-out duration-200 my-3 border-2 border-[var(--button-color-2)] px-8 lg:px-10 py-2 lg:py-3 rounded-full font-bold text-[var(--button-color-2)] cursor-pointer hover:text-[var(--heading-light)] hover:bg-[var(--button-color-2)]'>
              Hire Me</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
