import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
  {
    id:0,
    title:"Simple and Responsive Resume Builder",
    desc:"A simple html and css based resume app",
    img:"/project1.png",
    tags:["HTML" , "CSS" , "TYPESCRIPT"],
  }]


const Projects = () => {
  return (
    <div id='projects' className='container pt-32 font-bold'>
      <Heading title='My Work' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
       {data.map((el) => (<Card
       key={el.id}
       title={el.title}
       desc={el.desc}
       img={el.img}
       tags={el.tags}
       />))}
      </div>
      
    </div>
  )
}

export default Projects
