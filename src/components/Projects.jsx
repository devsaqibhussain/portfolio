import React from 'react'
import { Reveal, ProductReveal } from './'
import { FaRegHandPointLeft,  FaRegHandPointRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='py-10 px-10 text-white' id='project'>
      <div>
        <Reveal>
          <p className=' text-2xl md:text-3xl text-green-400 font-bold'>My Projects</p>
        </Reveal>
      </div>
      <div className=' pt-10 md:p-20 md:flex justify-between'>
        {/* Amazon */}
        <ProductReveal>
          <div className=' border-2 border-white p-2 md:p-10 rounded-3xl bg-white md:w-[600px]'>
            <a href="https://devsaqibhussain.github.io/amazon/" target='blank'>
              <img src="/images/amazon-frame.png" alt="Amazon Project showcase" />
            </a>
          </div>
        </ProductReveal>
        
        <div className=' md:w-[600px]'>
          <Reveal>
            <p className=' my-5 text-green-400 text-xl md:text-2xl font-semibold'>Amazon's Clone</p>
          </Reveal>
          <Reveal>
            <p className=' md:text-lg text-justify'> The project showcases my ability to create fully function repsonsive <span className=' text-green-400'>product page</span> using grids, a <span className='text-green-400'>Search Bar with real time</span> suggestions of products,<span className='text-green-400'>Add to cart</span>  feature which uses state managment tool like <span className='text-green-400'>Redux</span> and <span className='text-green-400'>Checkout Menu</span> that calculates subtotal of all the products.</p>
          </Reveal>
          <Reveal>
            <p className=' mt-5 md:mt-10 text-green-400'><span className=' hidden md:inline-block'><FaRegHandPointLeft/></span> Click on Image to Open Project!</p>
          </Reveal>
        </div>
      </div>

      <div className=' pt-10 md:p-20 md:flex justify-between'>
        {/* SpaceThings */}
        <div className=' md:w-[600px]'>
          <Reveal>
            <p className=' my-5 text-green-400 text-xl md:text-2xl font-semibold'>Responsive Website</p>
          </Reveal>
          <Reveal>
            <p className=' md:text-lg text-justify'> This is a small project but shows my ability to create responsive websites that work on both mobile and desktop devices. The website is space themed so if you have interest in that go ahead and check it out.</p>
          </Reveal>
          <Reveal>
            <p className=' mt-5 md:mt-10 text-green-400'>Click on Image to Open Project! <span className=' hidden md:inline-block'><FaRegHandPointRight/></span></p>
          </Reveal>
        </div>
        <ProductReveal>
          <div className=' border-2 border-white mt-5 md:mt-0 p-2 md:p-5 rounded-3xl bg-white md:w-[600px]'>
            <a href="https://devsaqibhussain.github.io/responsive/" target='blank'>
              <img src="/images/space-things.png" alt="Amazon Project showcase" />
            </a>
          </div>
        </ProductReveal>
      </div>
    </div>
  )
}

export default Projects