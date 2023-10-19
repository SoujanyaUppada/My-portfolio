import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
const Sociallinks = () => {
    const links =[
        {
            id:1,
            child:(
            <>
            Linkedin <FaLinkedin size={30} />
            </> 
        ),
        href:"https://linkedin.com/in/uppada-soujanya",
        style:"rounded-tr-md"

        },
        {
            id:2,
            child:(
            <>
            GitHub <FaGithub size={30} />
            </> 
        ),
        href:"https://github.com/SoujanyaUppada",
        style:"rounded-br-md"

        },
        {
            id:3,
            child:(
            <>
            Mail <HiOutlineMail size={30} />
            </> 
        ),
        href:"https://soujanyauppada23@gmail.com",
        style:"rounded-tr-md"

        },
        {
            id:4,
            child:(
            <>
            Resume <BsFillPersonLinesFill size={30} />
            </> 
        ),
        href:"public/SoujanyaUppadaResume.pdf",
        style:"rounded-br-md",
        download:true,

        }

        
]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
       <ul>
        {links.map(({id, child, href, style, download})=>(
          <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black'}>
           <a href={href} 
           className='flex justify-between items-center w-full text-white'
           download={download}
           target="blank">
            {child} 
           </a>

        </li>
        ))}
        
            
       </ul>
    </div>
  )
}

export default Sociallinks; 