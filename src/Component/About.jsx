import React from 'react'
const About = () => { 
  return (
    <div  name="About"
    className="w-full h-screen bg-gradient-to-b from-rose-900 to-slate-900 text-white">
    <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <h3 className='text-xl mt20 p-6'>Soujanya Uppada</h3>
        <p className='text-xl mt20'>
             I'm a passionate web developer with a keen eye for design and a strong love for web devlopment. 
             I always thought of creating responsive and user-friendly websites that not only look great but also perform seamlessly.
        </p>
        <br />
          <p className='text-xl'>   
             I'm proficient in languages like HTML, CSS, Bootstrap, JavaScript, React, Tailwind and have experience With various Technologies.
              I'm skilled in programming languages such as Python, Java and I have worked with Database MySQL .
          </p>
        <br />
        <p className='text-xl'>
        My goal is to craft web experiences that not only meet clients' needs 
        but also exceed their expectations. Whether it's building interactive 
        web applications or optimizing website performance, I thrive on turning ideas 
        into reality in the digital realm.
        </p>
        <br />
        <p className='text-xl'>
        I'm a strong believer in the importance of clean code, performance optimization, 
        and security in web development. I enjoy keeping up with the latest industry trends
        and technologies.
        </p>
        <br />
        <p className='text-xl'>
        You can check some of my projects that I have worked and for more details 
        you can contact me .
        </p>
    </div>
    </div>
  )
}

export default About;