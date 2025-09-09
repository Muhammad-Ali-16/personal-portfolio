import SectionHeading from "../common/SectionHeading"

function Services() {

  const ServicesCards = [
    { id: '1', Icon: 'laptop', Heading: 'Responsive Web Design', Description: "Build modern and mobile-friendly websites using HTML5, CSS3, and modern frameworks" },
    { id: '2', Icon: 'code-slash', Heading: 'Frontend Development', Description: "Develop interactive and optimized user interfaces using JavaScript and React." },
    { id: '3', Icon: 'layout-text-window', Heading: 'UI/UX Implementation', Description: "Convert design prototypes into functional interfaces with a focus on user experience." },
    { id: '4', Icon: 'palette-fill', Heading: 'Tailwind & Bootstrap Integration', Description: "Implement clean, responsive layouts with Tailwind CSS and Bootstrap." },
    { id: '5', Icon: 'diagram-3', Heading: 'React Development', Description: "Build adaptive, mobile-friendly websites using React.js" },
    { id: '6', Icon: 'speedometer2', Heading: 'Performance Optimization', Description: "Optimize speed, SEO, and accessibility for better user experience and ranking." },

  ]

  return (
    <section className='services-main h-auto bg-[var(--section-background-2)] w-full' id="services">
      <div className="w-full mx-auto pt-20 pb-12">
        <SectionHeading Heading={"Services"} SubHeading={"What I Do?"} />
        <div className="services-content max-w-screen-2xl mx-auto mt-15 xl:mt-20 grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-15">

          {ServicesCards.map((card) => (
            <div className="service-card flex flex-row justify-start  items-center space-x-6 mx-8 lg:mx-4" key={card.id}>
              <div className="bg-[var(--services-cards-bg)] drop-shadow-sm/25 flex justify-center items-center p-3 xl:p-6 rounded-lg text-xl xl:text-3xl text-[var(--text-secondary)]">
                <i className={`bi bi-${card.Icon}`}></i>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-dark)] xl:text-xl text-lg mb-2">{card.Heading}</h3>
                <p className="text-[var(--text-primary)] text-sm xl:text-lg">{card.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
