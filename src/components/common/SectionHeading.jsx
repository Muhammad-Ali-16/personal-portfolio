
function SectionHeading({Heading, SubHeading}) {
    return (
        <div className="text-center flex flex-row mx-auto justify-center items-center relative">
            <h1 className="uppercase tracking-wider text-5xl lg:text-8xl font-extrabold text-[var(--text-heading-light)] opacity-50">{Heading}</h1>
            <p className="absolute text-lg lg:text-2xl font-bold text-[var(--text-heading-dark)] ">{SubHeading}</p>
      <span className="w-[40px] h-0.5 lg:h-1 lg:w-[80px] mt-6 lg:mt-10 bg-[var(--text-secondary)] absolute"></span>
          
        </div>
    )
}

export default SectionHeading
