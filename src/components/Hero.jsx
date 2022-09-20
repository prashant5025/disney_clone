import React from 'react'
import {
    AiOutlineCloudUpload,
    AiOutlineDatabase,
    AiOutlineCloudServer
} from 'react-icons/ai'
import {
    FaPaperPlane
} from 'react-icons/fa'

import Image1 from '../assets/img/cyber-bg.png';



const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
          <p className='text-2xl'>This is our Tech brand.</p>
          <button className='py-3 px-6 sm:w-[60%] mt-4'>Get Started</button>
        </div>
        <div>
          <img className='w-full' src={Image1} alt="img" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border-slate-300 border rounded-xl text-center shadow-xl'>
          <p>Data Serviecs</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'><AiOutlineCloudUpload className='h-6 text-indigo-600'/> App Security</p>
            <p className='flex px-4 py-2 text-slate-500'><AiOutlineDatabase className='h-6 text-indigo-600'/> App Dashboard</p>
            <p className='flex px-4 py-2 text-slate-500'><AiOutlineCloudServer className='h-6 text-indigo-600'/> App Cloud Data</p>
            <p className='flex px-4 py-2 text-slate-500'><FaPaperPlane className='h-6 text-indigo-600'/> API</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero