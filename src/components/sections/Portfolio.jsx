import SectionHeading from "../common/SectionHeading"
import weatherapp from '../../assets/sigma-storm.jpg'
import restaurant from '../../assets/grill-restaurant.jpg'
import chatbot from '../../assets/abacus-ai.jpg'
import carrental from '../../assets/luxe-drive.jpg'
import bitmatrix from '../../assets/bitmatrix.jpg'
import quizapp from '../../assets/quiz-app.jpg'


import { useState } from "react"

function Portfolio() {

  const [activeProject, setActiveProject] = useState(null);

  const HandleProjectDetails = (project) => {
    setActiveProject(project);
  };

  const PortfolioWork = [
    {
      Id: '1',
      Title: 'Sigma-Storm',
      Category: 'Weather App',
      Info: 'Sigma-Storm is a responsive weather application that provides real-time weather data for any location. It uses API integration to deliver accurate forecasts with a clean and intuitive UI.',
      Client: 'Personal Project',
      Technologies: 'React, Tailwind CSS, OpenWeather API',
      Industry: 'Weather & Climate',
      Date: 'August 11, 2025',
      UrlLink: 'https://sigmastorm.netlify.app/',
      Img: weatherapp
    },
    {
      Id: '2',
      Title: 'Grill Restaurant',
      Category: 'Restaurant Website',
      Info: 'Grill Restaurant is a modern, responsive landing page designed for showcasing a restaurant’s menu and services. It features visually appealing sections, smooth navigation, and a clear call-to-action for reservations.',
      Client: 'Personal Project',
      Technologies: 'HTML, CSS, JavaScript and Bootstrap',
      Industry: 'Food & Beverage',
      Date: 'June 05, 2024',
      UrlLink: 'https://restfolio.netlify.app/',
      Img: restaurant
    },
    {
      Id: '3',
      Title: 'Abacus AI',
      Category: 'AI Chatbot',
      Info: 'Abacus AI is an interactive web application that allows users to chat with an AI in real time. It uses React and Tailwind for a responsive UI and integrates an external API for intelligent responses.',
      Client: 'Personal Project',
      Technologies: 'HTML, React, Tailwind CSS and Gemini API',
      Industry: 'Artificial Intelligence',
      Date: 'August 15, 2025',
      UrlLink: 'https://abacusai.netlify.app/',
      Img: chatbot
    },
    {
      Id: '4',
      Title: 'Luxe-Drive',
      Category: 'Car Rental Website',
      Info: 'Luxe-Drive is a sleek, multi-section landing site for luxury vehicle rentals and chauffeur services. It highlights premium vehicle types, booking options, and professional drivers within a polished, responsive design.',
      Client: 'Personal Project',
      Technologies: 'HTML, CSS, JavaScript and Bootstrap',
      Industry: 'Car Rental',
      Date: 'February 08, 2024',
      UrlLink: 'https://luxury-drive.netlify.app/',
      Img: carrental
    },
    {
      Id: '5',
      Title: 'BitMatrix',
      Category: 'IT Solutions & Business Services',
      Info: 'BitMatrix is a professional business solutions website showcasing IT services and digital transformation offerings. It includes service sections, modern layouts, and responsive design for an engaging user experience.',
      Client: 'Personal Project',
      Technologies: 'HTML, Tailwind CSS, React and Swiper.JS',
      Industry: 'Information Technology / Business Solutions',
      Date: 'August 20, 2025',
      UrlLink: 'https://muhammad-ali-16.github.io/bitmatrix/',
      Img: bitmatrix
    },
    {
      Id: '6',
      Title: 'Quiz App',
      Category: 'Education ',
      Info: 'Quiz App is an interactive platform for answering multiple-choice questions across various topics. It features a responsive design, dynamic score tracking, and smooth user experience using React components.',
      Client: 'Personal Project',
      Technologies: 'HTML, CSS, React, JavaScript',
      Industry: 'Education / E-Learning',
      Date: '2025',
      UrlLink: 'https://quizzzyfy.netlify.app/',
      Img: quizapp
    }



  ]

  return (
    <section className='portfolio-main h-auto bg-[var(--section-background-2)] w-full' id="portfolio">
      <div className="w-full mx-auto pt-20 pb-12">
        <SectionHeading Heading={"Portfolio"} SubHeading={"My Work"} />
        <div className="portfolio-content max-w-screen-2xl mx-auto mt-15 xl:mt-20">


  <div className="columns-1 lg:columns-2 xl:columns-3 gap-4 relative mx-8 mb-4 cursor-pointer" >
          {PortfolioWork.map((work) => (
            <div key={work.Id}>
                <div className="relative overflow-hidden mb-4 group rounded-lg " onClick={() => { HandleProjectDetails(work) }}>
                  <img
                    src={work.Img} alt={`${work.Category} Img`}
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="porfolio-details absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h4 className="text-white font-bold">{work.Title}</h4>
                    <p className="text-white/65">{work.Category}</p>
                  </div>
                </div>
              

              {activeProject && (
                <div className="fixed inset-0 bg-black/20 text-[var(--text-dark)] flex items-center justify-center z-50 px-5">
                  <div className="bg-white p-6 shadow-lg relative max-h-[85vh] overflow-y-scroll lg:overflow-hidden rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">{activeProject.Title}</h2>
                    <button
                      className="mt-4 px-4 py-2 rounded absolute right-0 top-0 mr-4 text-2xl cursor-pointer"
                      onClick={() => setActiveProject(null)}>
                      <i className="bi bi-x-lg"></i>
                    </button>

                    <div className="flex flex-col lg:flex-row space-x-4">
                      <img src={activeProject.Img} alt={`${activeProject.Category} Img`} className="lg:max-w-[400px] xl:max-w-xl mx-auto lg:mx-5 self-center lg:self-auto rounded-lg max-h-[500px]" />

                      <div>
                        <div className="info mt-4 lg:mt-0">
                          <h4 className="font-bold text-md lg:text-lg">Project Info:</h4>
                          <p className="max-w-2xl text-sm lg:text-[12px] my-2 leading-6">{activeProject.Info}</p>
                        </div>

                        <div className="details flex flex-col">
                          <h4 className="font-bold text-md lg:text-lg my-4">Project Details:</h4>
                          <ul className="space-y-5">
                            <li><h4 className="border-b border-[var(--portfolio-border)] pb-3 font-semibold text-sm lg:text-[12px]">Client: <span className="font-light"> {activeProject.Client} </span> </h4></li>
                            <li><h4 className="border-b border-[var(--portfolio-border)] pb-3 font-semibold text-sm lg:text-[12px]">Technologies: <span className="font-light"> {activeProject.Technologies} </span> </h4></li>
                            <li><h4 className="border-b border-[var(--portfolio-border)] pb-3 font-semibold text-sm lg:text-[12px]">Industry:<span className="font-light"> {activeProject.Industry} </span> </h4></li>
                            <li><h4 className="border-b border-[var(--portfolio-border)] pb-3 font-semibold text-sm lg:text-[12px]">Date: <span className="font-light"> {activeProject.Date} </span> </h4></li>
                            <li><h4 className="border-b border-[var(--portfolio-border)] pb-3 font-semibold text-sm lg:text-[12px]">URL: <span className="font-light text-[var(--text-secondary)]"><a href={activeProject.UrlLink} target="_blank">{activeProject.UrlLink}</a></span> </h4></li>

                            <li className="portfolio-social-icons pb-3 text-lg lg:text-xl space-x-4">
                              <a target="_blank" href="https://www.facebook.com/profile.php?id=100086266104286"><i className="text-[var(--text-primary)] transition duration-250 hover:text-[#4267B2] bi bi-facebook"></i></a>
                              <a target="_blank" href="https://www.instagram.com/m.ali._.raza/"><i className="text-[var(--text-primary)] transition duration-250 hover:text-transparent bg-clip-text bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] bi bi-instagram "></i></a>
                              <a target="_blank" href="https://www.linkedin.com/in/muhammad-ali18/"><i className="text-[var(--text-primary)] transition duration-250 hover:text-[#0A66C2] bi bi-linkedin"></i></a>
                              <a target="_blank" href="https://github.com/Muhammad-Ali-16"><i className="text-[var(--text-primary)] transition duration-250 hover:text-[#24292e] bi bi-github"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
          </div>

        </div>
      </div>
    </section >
  )
}

export default Portfolio
