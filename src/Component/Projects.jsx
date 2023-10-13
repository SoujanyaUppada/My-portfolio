import React from 'react'; 
import reactWeather from "../assets/portfolio/reactWeather.jpg" ;
import Malariadetection from "../assets/portfolio/Malariadetection.jpg" ;
import Bubble from "../assets/portfolio/Bubble.png" ;
import Todo from "../assets/portfolio/Todo.png" ;
import Boom from "../assets/portfolio/Boom.png" ;
const Projects = () => {
    const Project = [
        {
            id:1,
            src:reactWeather,
            title:"Weather App"
          
        },
        {
            id:2,
            src:Malariadetection,
            title:"Malaria Detection"
            
        },
        {
            id:3,
            src:Bubble,
            title:"Bubble game"
            
        },
        {
            id:4,
            src:Todo,
            title:"Todo App"

            
        },
        {
            id:5,
            src:Boom,
            title:"Boom Game"
            
        }
    ]
  return (
    <div name="Projects"
    className='bg-gradient-to-b from-rose-900 to-slate-900 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>Projects</p>
                <p className='py-6'>Check out Some of my Projects here..</p>
                <p className='py-6'>for more deatils ping me..</p>
            </div>
     <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
     {
             Project.map(({id,src,title})=>(
                    <div key={id}className='shadow-md shadow-gray-600 rounded-lg '>
                        
                       <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-40 w-fullgit config --global user .email "n180518@rguktn.ac.in"'/>

                     <div className='flex items-center justify-center'>
                   {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                     <h3 className='py-6'>{title}</h3>
                  </div>  
                    </div>
                   
                ))
                
            }
           </div>  
        </div>
    </div>
  )
}

export default Projects;