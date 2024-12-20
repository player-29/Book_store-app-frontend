import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import footerLogo from '../assets/footer-logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-10 px-4">
        <div className='container mx-auto flex flex-row md:flex:row justify-around items-center gap-8'>
            {/*Left side-Logo and nav*/}
            <div className="md:w-1/2 w-full">
            <img src={footerLogo} alt="logo" className="w-36 mb-5"/>
            <ul className='flex flex-col md:flex-row gap-4'>
                <li><a href="#home" className='hover:text-primary'>Home</a></li>
                <li><a href="#about" className='hover:text-primary'>About Us</a></li>
                <li><a href="#services" className='hover:text-primary'>Services</a></li>
                <li><a href="#contact" className='hover:text-primary'>Contact</a></li>
            </ul>
            </div>
            {/*Right side-NewsLetter*/}
            <div className='md:w-1/2 w-full'>
            <p className='mb-4'>Subscribe to our newsletter to receive the latest updates, news, and offers!</p>
              <div className='flex gap-4'>
                <input type="email" placeholder='Enter your email address' className='bg-gray-800 px-4 py-2 w-full'/>
                <button className='bg-primary px-4 py-2 hover:text-secondary'>Subscribe</button>
              </div>

            </div>
            
        </div>

        {/*Bottom Section*/}
        <div className ="conatiner mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
            {/*left side -privacy links*/}
            <ul className ="flex gap-4 mb-4 md:mb-0">
                <li><a href="#privacy" className='hover:text-primary'>Privacy Policy</a></li>
                <li><a href="#terms" className='hover:text-primary'>Terms of Services</a></li>
            </ul>

            <div className='flex gap-6'>
                <a href="https://www.facebook.com" target="_blank" rel=" noopener noreferrer" className='hover:text-primary'><FaFacebook size={24}/></a>
                <a href="https://www.twitter.com" target="_blank" rel=" noopener noreferrer" className='hover:text-primary'><FaTwitter size={24}/></a>
                <a href="https://www.instagram.com" target="_blank" rel=" noopener noreferrer" className='hover:text-primary'><FaInstagram size={24}/></a>

            </div>
        </div>

        
    </footer>
  )
}

export default Footer