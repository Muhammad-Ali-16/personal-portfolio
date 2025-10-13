import SectionHeading from "../common/SectionHeading"

function Summary() {

  const Education = [
    { id: '1', duration: '2024 - Present', program: 'Intermediate', instituteName: 'Aisha Bawany Govt. College', description: 'Studying pre-engineering subjects including Mathematics, Physics, and Chemistry to build a strong foundation for a career in technology.' },
    { id: '2', duration: '2022 - 2024', program: 'Matriculation', instituteName: 'Education Trust Nasra School', description: 'Completed Matriculation with Computer Science, developing an early interest in programming, technology and learned fundamental computing concepts.' }
  ]

  const Experience = [
    { id: '1', duration: 'Present', program: 'FrontEnd Development', instituteName: 'Fresher', description: 'Currently seeking internship opportunities to apply my skills in real-world projects and enhance my experience in web design and development.' },
  ]

  const Skills = [
    { id: '1', heading: 'React.JS', progress: '64%' },
    { id: '2', heading: 'Tailwind CSS', progress: '78%' },
    { id: '4', heading: 'Responsive Design', progress: '83%' },
    { id: '3', heading: 'HTML/CSS', progress: '90%' },
    { id: '6', heading: 'Bootstrap', progress: '80%' },
    { id: '5', heading: 'JavaScript', progress: '55%' },
  ]


  return (
    <section className='summary-main h-auto bg-[var(--section-background-1)] w-full' id="resume">
      <div className="summary-content max-w-7xl mx-auto pt-20 pb-12">

        <SectionHeading Heading={"Summary"} SubHeading={"Resume"} />
        <div className="resume-content max-w-screen-2xl mx-auto mt-15 xl:mt-20 grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-15">
          <div className="resume-education mx-8 lg:mx-4">
            <h3 className="font-bold text-lg xl:text-xl text-[var(--text-dark)] mb-6">My Education</h3>
            {Education.map((education) => (
              <div className="border border-[var(--button-color-1)]/40 my-6 rounded-lg" key={education.id}>
                <div className="m-5">
                  <div className="education-duration bg-[var(--text-secondary)] inline-block px-2 py-1 rounded-lg mb-3 text-white text-sm">{education.duration}</div>
                  <h3 className="font-bold text-md xl:text-lg text-[var(--text-dark)]">{education.program}</h3>
                  <h4 className="text-sm my-2 text-[var(--text-danger)] xl:text-[12px]">{education.instituteName}</h4>
                  <p className="text-sm xl:text-md text-[var(--text-primary)]">{education.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="resume-experience mx-8 lg:mx-4">
            <h3 className="font-bold text-lg xl:text-xl text-[var(--text-dark)] mb-6">My Experience</h3>
            {Experience.map((experience) => (
              <div className="border border-[var(--button-color-1)]/40 my-6 rounded-lg" key={experience.id}>
                <div className="m-5">
                  <div className="experience-duration bg-[var(--text-secondary)] inline-block px-2 py-1 rounded-lg mb-3 text-white text-sm">{experience.duration}</div>
                  <h3 className="font-bold text-md xl:text-lg text-[var(--text-dark)]">{experience.program}</h3>
                  <h4 className="text-sm my-2 text-[var(--text-danger)] xl:text-[12px]">{experience.instituteName}</h4>
                  <p className="text-sm xl:text-md text-[var(--text-primary)]">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-skills max-w-screen-2xl mx-auto mt-15 xl:mt-20 grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-15">
          <h3 className="font-bold text-lg xl:text-2xl text-[var(--text-dark)] col-span-full  mx-8 lg:mx-4">My Skills</h3>
          {Skills.map((skill) => (
            <div className="skills-main mx-8 lg:mx-4" key={skill.id}>
              <div className="skills-content flex flex-col gap-5">
                <div className="skills w-full">
                  <div className="skill-content w-full">
                    <div className="flex justify-between mb-2 font-bold opacity-80">
                      <h5>{skill.heading}</h5>
                      <h5>{skill.progress}</h5>
                    </div>
                    <div className="w-full bg-[#e9ecef] rounded-full h-2">
                      <div className="bg-[var(--text-secondary)] h-2 rounded-full" style={{ width: skill.progress }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="/personal-portfolio/Ali-Raza-Resume.pdf" download><button className="hover:bg-[var(--button-color-1)] text-[var(--button-color-1)] font-bold hover:text-white border-2 border-[var(--button-color-1)] px-7 py-4 rounded-full cursor-pointer mt-3 text-xs xl:text-[12px] transition-all duration-300">Download Resume </button></a>
        </div>

      </div>
    </section>
  )
}

export default Summary
