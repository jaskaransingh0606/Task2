import React from 'react'
import vemeBlockchain from '../assets/vemeBlockchain.png';
import vemeAppUi from '../assets/vemeAppUi.png';
import paths3 from '../assets/paths3.svg';
import { motion } from 'framer-motion';
function Page3() {
  return (
    <div className='flex flex-row md:flex-col-reverse h-screen w-screen relative '>

      <div className=' flex flex-col w-2/4 space-y-16 md:h-3/6 md:w-screen bg-violet-900 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16 md:-mb-8 '>
          <div><p className='font-extrabold text-5xl'>ABC 234</p></div>
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1 }}>
          <div><p className='text-xl md:text-lg font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
          </motion.div>
        </div>

        <div className='flex flex-row space-x-56 align-center lg:space-x-20 pb-24 md:pb-8 pl-16'>
          <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl md:invisible'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-blue-950 bg-cover md:h-1/2 md:w-screen relative'>

        <motion.img 
        initial={{y:-20,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:"tween",duration:1}}
        className='h-3/6 absolute -top-8 right-32 md:h-72 md:top-0 md:right-8' src={vemeAppUi}>

        </motion.img>


        <motion.img 
        initial={{y:20,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:"tween",duration:1}}
        className='h-3/6 absolute bottom-16 left-32 md:h-72 md:bottom-0 md:left-4' src={vemeBlockchain}>

        </motion.img>



      </div>
      <div className='absolute left-4/10 top-24 md:invisible '>
        <img className='h-64 w-64 rounded-full' src={paths3}></img>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>The Next Big</p>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl font-bold'>Blockchain</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-20 left-16'>Revolution</p>
        </motion.div>
      </div>

    </div>
  )
}

export default Page3
