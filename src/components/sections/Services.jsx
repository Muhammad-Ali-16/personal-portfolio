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
    <div className='h-auto bg-[var(--background-light)] w-full' id="services">
      <div className="max-w-7xl mx-auto pt-20 pb-12">
        <SectionHeading Heading={"Services"} SubHeading={"What I Do?"} />
        <div className="services-content max-w-7xl mx-auto mt-15 xl:mt-20 grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-15">

          {ServicesCards.map((card) => (
            <div className="service-card flex flex-row justify-start  items-center space-x-6 mx-8 lg:mx-4" key={card.id}>
              <div className="bg-[var(--background-white)] drop-shadow-sm/25 flex justify-center items-center p-6 rounded-lg text-3xl text-[var(--text-secondary)]">
                <i class={`bi bi-${card.Icon}`}></i>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-dark)] text-xl mb-2">{card.Heading}</h3>
                <p className="text-[var(--text-primary)] ">{card.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
