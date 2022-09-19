import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaTwitch
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-4 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div >
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div >
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div >
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div >
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Term</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Condition</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md md-4' type="email" placeholder='Enter abc@gmail.com'/>
                    <button className='p-2 mt-4 md:mt-0'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex max-w-[1240px] px-2 py-4 m-auto items-center justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>&copy; 2022 Workflow , LLC. All right reserved</p>
        </div>
        <div className='flex justify-between items-center sm:max-w-[300x] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaTwitch />

        </div>
      
    </div>
  )
}

export default Footer
