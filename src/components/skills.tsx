import React from 'react'

const skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-7xl  font-bold'>"My Tech Stack"</h2>
                <p className='text-slate-200 pt-2 '>
                Possesses strong skills in HTML, CSS, TypeScript, Tailwind CSS, and React,
                which allow me to create modern, responsive web applications with clean and
                organized code. With HTML, I can structure content effectively, ensuring it
                is accessible and semantically meaningful. My CSS skills, combined with Tailwind CSS, 
                enable me to style web applications quickly and consistently while maintaining
                a professional and polished look. Additionally, my knowledge of TypeScript enhances 
                code reliability and readability by adding type safety to JavaScript and now , I can
                used React,to build dynamic, component-based interfaces that deliver
                a smooth user experience and efficient data handling. Together, these technologies 
                empower me to develop high-quality front-end solutions tailored to various project requirements.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-3 text-slate-50 text-3xl sm:text-3xl'>
                    <div className='space-y-2'>
                    <h2>Node.JS</h2>
                    <h2>Css</h2>
                    </div>
                    <div className='space-y-2'>
                    <h2>Tailwind Css</h2>
                    <h2 >Html</h2>
                    </div>
                    <div className='space-y-2'>
                    <h2 >Next.JS</h2>
                    <h2>Typescript</h2>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default skills
