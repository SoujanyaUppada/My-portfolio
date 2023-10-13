import React from 'react'
// import {useTypewriter, Cursor} from "react-simple-typewriter";
import { AiFillAlert } from "react-icons/ai";
import "./Animate.css";
import Souji_pic from '../assets/Souji_pic.jpeg';
import {Link} from "react-scroll";

const Home = () => {
    
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b  from-rose-900 to-slate-900'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
    <div className='flex flex-col justify-center h-full'>
    <p className='title'>Hello....<br/>
    Welcome to my Portfolio..</p>
    </div>
    <div>
    <img src={Souji_pic} alt="my-profile" className='rounded-full mx-30 w-2/3 md:w-full'/>
    </div>   
       
    <Link to="About" smooth duration={500} 
    className='group text-white w-fit px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-teal-600 cursor-pointer'>
         About 

     <span className="group-hover:rotate-90 duration-300"><AiFillAlert size={25} className='ml-1 '/></span>
    </Link>
    
</div>
</div>
  )
}

export default Home