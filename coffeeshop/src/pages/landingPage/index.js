import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';

import {HiUser, HiLocationMarker} from 'react-icons/hi'
import {AiOutlineCheck, AiOutlineHeart} from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs';

// assets
import teamworkHero from '../../assets/images/teamwork-hero.png'
import product from '../../assets/images/product-placeholder.jpg'

const LandingPage = () => {

  return (
    <div  className='relative h-[200vh]'>
      <div className='sticky top-0'>
        <Header />
      </div>
      <div className='px-5 md:px-0'>
        <section className='bg-jumbotron text-white mt-5 px-10 py-10 font-bold'>
          <div>
            <h1 className='text-3xl'>
            Start Your Day with <br className='hidden lg:block' />Coffee and Good Meals
            </h1>
            <p className='mt-5'>
            We provide high quality beans, good taste, and healthy <br className='hidden lg:block' /> meals made by love just for you. Start your day with us<br className='hidden lg:block' /> for a bigger smile!            </p>
          </div>
          <button className='bg-primary text-secondary px-4 py-2 mt-5 md:mb-20 rounded-lg'>
            Get Started
          </button>
        </section>
        <div className='hidden w-[70vw] left-1/2 -translate-x-1/2 px-10 py-10 z-10 -mt-16 md:flex items-center justify-evenly rounded-lg shadow-2xl absolute bg-white'>
          <div className='flex items-center'>
            <HiUser size={40} className='bg-primary p-2 rounded-full text-secondary' />
            <div className='mx-5'>
              <p className='font-bold text-title'>
                90<span className='text-lg'>+</span>
              </p>
              <p className='text-text'>
              Staff
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <HiLocationMarker size={40} className='bg-primary p-2 rounded-full text-secondary' />
            <div className='mx-5'>
              <p className='font-bold text-title'>
                30<span className='text-lg'>+</span>
              </p>
              <p className='text-text'>
              Stores
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <AiOutlineHeart size={40} className='bg-primary p-2 rounded-full text-secondary' />
            <div className='mx-5'>
              <p className='font-bold text-title'>
                800<span className='text-lg'>+</span>
              </p>
              <p className='text-text'>
              Custommers                
              </p>
            </div>
          </div>
      </div>
          {/* banner sessions */}
      <section className='text-text flex items-center justify-between mt-10 lg:mx-28 md:mt-28'>
        <img src={teamworkHero} className='hidden lg:block md:w-1/2'/>
        <div className='mx-auto'>
          <h1 className='text-title text-center md:text-start font-bold text-3xl mb-2'>
          We Provide Good Coffee and<br className='hidden lg:block'/> Healthy Meals
          </h1>
          <p className='mb-2 text-center md:text-start'>
          You can explore the menu that we provide with fun and<br /> have their own taste and make your day better.
          </p>
          <span className='flex items-center py-3'><BsCheckCircleFill color='#2FAB73' className='align-bottom w-5 h-5'/><p className='px-2 md:px-4'>High quality beans, because we only <br className='md:hidden' />provide the best</p></span>
          <span className='flex items-center py-3'><BsCheckCircleFill color='#2FAB73' className='align-bottom w-5 h-5'/><p className='px-2 md:px-4'>Healthy meals, you can request the <br className='md:hidden' />ingredients</p></span>
          <span className='flex items-center py-3'><BsCheckCircleFill color='#2FAB73' className='align-bottom w-5 h-5'/><p className='px-2 md:px-4'>Chat with our staff to get better <br className='md:hidden' />experience for ordering</p></span>
          <span className='flex items-center py-3'><BsCheckCircleFill  color='#2FAB73' className='align-bottom w-5 h-5'/><p className='px-2 md:px-4'>Free member card with a minimum <br className='md:hidden' />purchase of IDR 200.000.</p></span>
        </div>
      </section >
      {/* favorite */}
      <section className='mt-10'>
        <h2 className='text-title font-bold text-4xl text-center'>
        Here is People’s Favorite
        </h2>
        <p className='mt-5 text-text text-center'>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>

        <div className='mt-28 flex items-center justify-evenly'>
            <div className='flex flex-col items-center border-2 relative px-5 -z-10 border-pale rounded-lg w-64 h-[70vh]'>
              <img src={product} className='rounded-full absolute -top-16'/>
              <p className='font-bold mt-20'>Hazelnut Latte</p>
              <div className=''>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>HazelnutSyrup</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Wanilla Whipped Cream</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Ice/Hot</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Sliced Banana on Top</p>
                </span>
                </div>
                <div className='flex flex-col items-center absolute bottom-3'>
                  <p className='text-title font-bold'>IDR 25.000</p>
                  <button className='px-10 py-3 rounded-3xl mt-3 bg-primary font-bold text-secondary'>Select</button>
                </div>
            </div>


            <div className='hidden md:flex flex-col items-center border-2 relative px-5 -z-10 border-pale rounded-lg w-64 h-[70vh]'>
              <img src={product} className='rounded-full absolute -top-16'/>
              <p className='font-bold mt-20'>Hazelnut Latte</p>
              <div className=''>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>HazelnutSyrup</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Wanilla Whipped Cream</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Ice/Hot</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Sliced Banana on Top</p>
                </span>
                </div>
                <div className='flex flex-col items-center absolute bottom-3'>
                  <p className='text-title font-bold'>IDR 25.000</p>
                  <button className='px-10 py-3 rounded-3xl mt-3 bg-primary font-bold text-secondary'>Select</button>
                </div>


            </div>
            <div className='hidden md:flex flex-col items-center border-2 relative px-5 -z-10 border-pale rounded-lg w-64 h-[70vh]'>
              <img src={product} className='rounded-full absolute -top-16'/>
              <p className='font-bold mt-20'>Hazelnut Latte</p>
              <div className=''>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>HazelnutSyrup</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Wanilla Whipped Cream</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Ice/Hot</p>
                </span>
                <span className='flex items-center py-3 text-text'>
                <AiOutlineCheck color='#2FAB73' className='h-5 w-5 font-bold' />
                <p className='ml-4'>Sliced Banana on Top</p>
                </span>
                </div>
                <div className='flex flex-col items-center absolute bottom-3'>
                  <p className='text-title font-bold'>IDR 25.000</p>
                  <button className='px-10 py-3 rounded-3xl mt-3 bg-primary font-bold text-secondary'>Select</button>
                </div>
            </div>
        </div>
      </section>
      {/* footer */}
      </div>
      <div className='pt-20'>
      <Footer />
      </div>
    </div>
  )
}

export default LandingPage
