import React from 'react'
import bannerImg from '../../assets/banner.png'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>

    <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="banner" className='w-full'/>
        
    </div>
    <div>
        <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This week</h1>
        <p className='mb-10'>It's time to update your reading list with some latest and greates release in the literary world.
          From Heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
        </p>
        <button className='bg-primary text-white px-4 py-2 rounded-md'>Shop Now</button>

    </div>
    
    </div>
  )
}

export default Hero