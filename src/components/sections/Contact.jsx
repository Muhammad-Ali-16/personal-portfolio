import SectionHeading from "../common/SectionHeading"
import SocialIcons from "../common/SocialIcons"

function Contact() {
  return (
    <section className='contact-main h-auto bg-[var(--section-background-1)] w-full' id="contact">
      <div className="max-w-7xl mx-auto pt-20 pb-12">
        <SectionHeading Heading={"Contact"} SubHeading={"Get in Touch"} />
        <div className="contact-content max-w-7xl mx-auto mt-15 xl:mt-20 grid grid-rows-1 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-12">


          <div className='text-start place-self-start mx-4 lg:mx-20 mt-0 lg:mt-5'>
            <div>
              <h4 className='text-[var(--text-secondary)] text-lg mb-2 mt-5'>Address:</h4>
              <p className='text-[var(--text-primary)]'>Creek Road <br />Karachi, Pakistan</p>
            </div>
            <div>
              <h4 className='text-[var(--text-secondary)] text-lg mb-2 mt-5'>Phone:</h4>
              <p className='text-[var(--text-primary)]'>+92 32331012 96</p>
            </div>
            <div>
              <h4 className='text-[var(--text-secondary)] text-lg mb-2 mt-5'>Email:</h4>
              <p className='text-[var(--text-primary)]'>aliraza1.work@gmail.com <br />muhammadaliraza.mobile@gmail.com</p>
            </div>

            <div>
              <h4 className='text-[var(--text-secondary)] text-lg mb-2 mt-5'>Follow Me</h4>
              <div className="space-x-4 text-xl">
                <SocialIcons />
              </div>
            </div>

          </div>

          <form className='w-full col-span-2 mz-4'>
            <div className="space-y-12">

              <div className="mt-10 grid grid-rows-1 grid-cols-2 gap-x-6 gap-y-8 mx-6">

                <div className="col-span-full lg:col-span-1">
                  <div className="mt-1">
                    <input required placeholder='Name' id="name" type="text" name="name" autoComplete="name" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6" />
                  </div>
                </div>

                <div className="col-span-full lg:col-span-1">
                  <div className="mt-1">
                    <input required placeholder='Email' id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6" />
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="mt-1">
                    <input required placeholder='Subject' id="subject" type="text" name="subject" autoComplete="subject" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6" />
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="mt-1">
                    <textarea id="message" required placeholder='Write Your Message' name="message" rows="3" className="block w-full rounded-md bg-[var(--input-bg)] px-3 py-4 text-[var(--text-primary)] outline-1 -outline-offset-1 outline-[var(--text-primary)]/15 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--input-outline)] sm:text-sm/6"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-start gap-x-6 mx-6">
              <button className="bg-[var(--button-color-2)] text-white px-7 py-4 rounded-full drop-shadow-lg/25 cursor-pointer mt-3 text-xs xl:text-[12px]">Send Message</button>
            </div>
          </form>
        </div>


      </div>
    </section>
  )
}

export default Contact
