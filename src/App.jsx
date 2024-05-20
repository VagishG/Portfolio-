import { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#111111] text-[white]'>
      <Hero />
      <Project />
      <Experience />
      <Footer/>
    </div>
  )
}

function Hero() {
  return (
    <div className='px-[50px] py-[24px]'>
      <nav className='flex items-center justify-between shadow-inner rounded-2xl bg-[#1B1B1B] p-[16px_16px_16px_32px]'>
        <h1 className='font-bold text-[20px]'>George Hill</h1>
        <div className='flex items-center gap-[20px]'>
          <p className=''>Home</p>
          <p className=''>About Me</p>
          <p className=''>Blog</p>
          <p className=''>Project</p>
          <div className='rounded-[100px] py-[7px] px-[21px] bg-[#242424]'>Contact Me</div>
        </div>
      </nav>

      <section className='flex w-full mt-[24px] gap-[1%] h-[40vw]'>
        <div className='rounded-[20px] bg-[#1B1B1B] w-1/2 flex items-center justify-center'>
          <img src="effect.png" alt="" className='absolute z-10 animateImage' />
          <img src="Image [p-image].png" alt="" className='z-20' />
        </div>
        <div className='rounded-[20px] bg-[#1B1B1B] w-1/2 flex flex-col items-center justify-center px-[70px] py-[140px] text-center'>
          <h1 className='font-bold text-[64px]'>Product Desginer</h1>
          <h2 className='text-[rgba(255_255_255_40)] text-[28px] center mt-4'>A passionate SaaS product designer based in the vibrant city of New York.</h2>
          <div className="rounded-[56px] bg-[#CBFB43] text-[black] py-4 px-8 mt-4 ">
            Book a Free Call
          </div>
        </div>
      </section>
      <div className='mt-[24px] flex items-center justify-between gap-[24px]'>
        <ExpTab />
        <ExpTab />
        <ExpTab />
        <ExpTab />
      </div>
    </div>
  )
}

function ExpTab() {
  return (
    <div className='flex items-center justify-center rounded-[16px] bg-[#1B1B1B] py-[26px] px-[62px] text-[20px] w-auto'>
      Twitter
    </div>
  )
}

function Project() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='rounded-md shadow-sm text-[#7e43fb] px-2 py-1'>PROJECTS</div>
      <h3 className='text-[56px]'>Selected <span>Projects</span></h3>
      <div className='px-[15vw] mt-12'>
        <ProjectCard />
      </div>
    </div>
  )
}


function ProjectCard() {
  return (
    <div className='bg-[#1B1B1B] w-auto h-auto p-[2rem] rounded-[2rem]'>
      <img src="img.webp" alt="" className='' />
      <div className='flex items-center justify-between mt-12'>
        <p className='font-semibold text-[28px]'>World Project In Market Place</p>
        <div className='rounded-full bg-white p-4'>
          <GoArrowUpRight color='black' size={30} />
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className='mt-16 flex items-center justify-center flex-col'>
      <h1 className='text-[56px]'>My Experience</h1>
      <div className='mt-8'>
        <ExpCard />
      </div>
    </div>
  )
}

function ExpCard() {
  return (
    <div className='flex items-center p-[1.5rem] bg-[#1B1B1B] gap-[2rem] rounded-xl'>
      <img src="img.webp" alt="" className='max-w-[30rem] max-h-[20rem] aspect-square hover:scale-105 ransition-all duration-500 cursor-pointer' />

      {/* <img class="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /> */}
      <div className='p-[2rem]'>
        <h5 className='text-[36px] font-medium'>How To Build and Grow Your business with design</h5>
        <p className='font-[32px]'>Frustrated with building and managing software project in high growth company,ourselves we founded</p>
      </div>
    </div>
  )
}


function Footer(){
  return(
    <section className='flex items-center justify-center mt-[10vh]'>
      <div className='relative'>
        <div className='bg-[#1B1B1B] rounded-[20px] flex flex-col items-center justify-center text-center'>
          <img src="Image [p-image].png" alt="" className='z-20 absolute h-[100px]' />
          <h1>Roger Hill</h1>
          <p>I believe in the power of design to transform ideas into tangible, user-friendly software. </p>
        </div>
        <div className='flex items-center justify-between'>

        </div>
      </div>
    </section>
  )
}


export default App
