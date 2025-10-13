import SectionHeading from "../common/SectionHeading"

function About() {
  return (
    <section className='about-main h-auto bg-[var(--section-background-1)] w-full' id="about">
      <div className="max-w-7xl mx-auto pt-20 pb-12">
        <SectionHeading Heading={"About Me"} SubHeading={"Know Me More"} />
        <div className="about-content  max-w-screen-2xl mx-auto mt-15 xl:mt-20">
          <div className=" mx-8 lg:mx-28 xl:mx-10 grid grid-rows-1 grid-cols-3">
            <div className="about-about text-center xl:text-start col-span-3 xl:col-span-2">
              <h3 className="font-bold text-[var(--text-dark)] text-3xl mb-4">I'm <span className="text-[var(--text-secondary)]">Muhmmad Ali, </span>a Web Designer</h3>
              <p className="text-[var(--text-primary)]">I design and develop responsive, user-friendly websites that help businesses build a strong online presence at an affordable price. I focus on delivering high-quality work on time and within budget, ensuring every project meets your goals.</p>
              <br />
              <p className="text-[var(--text-primary)]">I ensure that all websites I build align with your brand, function, and layout so there is a smooth user experience on every device. I ensure every step from design to implementation includes, properly formatted and written lines, a clean and up-to-date appearance, and aspects that are beneficial to the business.
              </p>
            </div>
            <div className="about-details col-span-full xl:col-span-1 xl:mx-4 mx-0 mt-20 xl:mt-0">
              <ul className="flex flex-col xl:ms-14 ms-0 space-y-6 text-[var(--text-primary)]">
                <li className="border-b border-[var(--color-border)] pb-2 "><h3 className="font-bold">Name: <span className="font-normal">Muhammad Ali</span> </h3></li>
                <li className="border-b border-[var(--color-border)] pb-2 "><h3 className="font-bold">Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aliraza1.work@gmail.com" target="_blank" className="text-[var(--text-secondary)] font-normal">aliraza1.work@gmail.com</a> </h3></li>
                <li className="border-b border-[var(--color-border)] pb-2 "><h3 className="font-bold">Age: <span className="font-normal">18</span> </h3></li>
                <li ><h3 className="font-bold">From: <span className="font-normal">Karachi, Pakistan</span> </h3></li>
                <a href="/personal-portfolio/Ali-Raza-Resume.pdf" download><button className="bg-[var(--button-color-2)] text-white px-7 py-4 rounded-full drop-shadow-lg/25 cursor-pointer mt-3 text-xs xl:text-[12px]">Download Resume</button></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
