import React from 'react'
import { Reveal } from './'
import { FaTwitter, FaDiscord,FaTelegram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className=' py-10 px-10 md:mt-20 h-[90vh] text-white' id='contact'>
      <div>
        <Reveal>
          <p className=' text-2xl  md:text-3xl text-green-400 font-bold'>Contact Me</p>
        </Reveal>
      </div>
      <div className=" text-base md:text-xl xl:text-2xl font-bold md:mx-20 xl:mx-40 mt-10 md:mt-10 xl:mt-20">
        <Reveal>
          <p>If you liked my work and want to <span className=" text-green-400">work together</span>, feel free to contact me on any of the given links below.</p>
        </Reveal>
        <Reveal>
          <p className=" mt-10">Lets create something beautiful together!</p>
        </Reveal>
        
      </div>
      
      <motion.div className=' text-center text-green-400 mt-20 md:mt-5 rounded-full '
        variants={{
          hidden:{ y:75 , opacity:0},
          visible: {y:0, opacity:1}
        }}
        initial = "hidden"
        animate = "visible"
        transition={{ duration: 2, delay:2 , type: 'spring', bounce:0.75}}
      >
        <p className=' text-green-400 -mt-10 md:mb-10 md:mt-20 text-lg md:text-2xl xl:text-xl font-bold'>My Links:</p>
        <div className='flex text-white items-center gap-4 justify-center text-3xl md:text-5xl xl:text-4xl my-4'>
          <a 
              href="https://discordapp.com/users/1123024661630955661" 
              target='_blank'
          >
              <FaDiscord 
                className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"
              />
          </a>

          <a 
              href="https://twitter.com/dev_saqib" 
              target='_blank'
          >
              <FaTwitter 
                className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"
              />
          </a>

          <a 
              href="https://t.me/devsaqib" 
              target='_blank'
          >
              <FaTelegram 
                className="hover:text-green-400 hover:text-5xl hover:rotate-[360deg] duration-500"
              />
          </a>

        </div>
      </motion.div>
    
    </div> 
  )
}

export default Contact