import React from 'react'
import { Reveal } from './'
import { FaHtml5, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'
import { motion } from 'framer-motion'


const AboutMe = () => {
  return (
    <div className='pt-40 px-10 xl:py-56 md:py-60 md:px-20 xl:px-60 text-white h-screen ' id="aboutme">
      <Reveal>
        <div className='text-xl md:text-3xl font-bold mb-10 md:mb-20 xl:mb-5'>
          <p> <span className=' text-green-400'>Hi</span> I'm <span className=' text-green-400'>Saqib Hussain,</span></p>
        </div>
      </Reveal>
      <Reveal>
        <div className=' text-lg md:text-3xl xl:text-2xl text-justify'>
          <p><span className='ml-16'>A</span> self-taught <span className=' text-green-400'>FrontEnd Web Developer</span> who loves learning new things and implementing them in his designs. I able to create fully functional websites that not only work seamlessly but also look beautiful. </p>
        </div>
      </Reveal>
      
      <motion.div className=' text-center text-green-400 mt-20 md:mt-50 xl:mt-5 rounded-full '
        variants={{
          hidden:{ y:75 , opacity:0},
          visible: {y:0, opacity:1}
        }}
        initial = "hidden"
        animate = "visible"
        transition={{ duration: 2, delay:0.5, type: 'spring', bounce:0.75}}
        >
        <p className=' text-green-400 md:text-xl font-bold'>TOOLS I USE:</p>
        <div className='flex text-white items-center gap-4 justify-center text-4xl my-4'>
          <FaHtml5 className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"/>
          <FaCss3Alt className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"/>
          <SiJavascript className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"/>
          <FaReact className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"/>
          <SiTailwindcss className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"/>

        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe