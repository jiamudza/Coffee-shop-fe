import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';

import {HiUser, HiLocationMarker} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'

// assets
import teamworkHero from '../../assets/images/teamwork-hero.png'
import { BsCheckCircleFill } from 'react-icons/bs';
const LandingPage = () => {

  return (
    <div  className='relative h-[200vh]'>
      <div className='sticky top-0'>
        <Header />
      </div>
      <div className='px-5'>
        <section className='bg-jumbotron text-white mt-5 px-10 py-10 font-bold'>
          <div>
            <h1 className='text-3xl'>
            Start Your Day with Coffee and Good Meals
            </h1>
            <p className='mt-5'>
            We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!            </p>
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
          <h1 className='text-title font-bold text-3xl mb-2'>
          We Provide Good Coffee and<br/> Healthy Meals
          </h1>
          <p className='mb-2'>
          You can explore the menu that we provide with fun and<br /> have their own taste and make your day better.
          </p>
          <span className='flex items-center py-3'><BsCheckCircleFill size={18} color='#2FAB73' className='align-bottom'/><p className='px-2 md:px-4 md:whitespace-nowrap'>High quality beans</p></span>
          <span className='flex items-center py-3'><BsCheckCircleFill size={20} color='#2FAB73' className='align-bottom'/><p className='px-2 md:px-4 md:whitespace-nowrap'>Healthy meals, you can request the<br className='md:hidden' /> ingredients</p></span>
          <span className='flex items-center py-3'><BsCheckCircleFill size={20} color='#2FAB73' className='align-bottom'/><p className='px-2 md:px-4 md:whitespace-nowrap'>Chat with our staff to get better experience for <br className='md:hidden' /> ordering</p></span>
          <span className='flex items-center py-3'><BsCheckCircleFill size={20} color='#2FAB73' className='align-bottom'/><p className='px-2 md:px-4 md:whitespace-nowrap'>Free member card with a minimum purchase of <br className='md:hidden' />IDR 200.000.</p></span>
        </div>
      </section >
      {/* favorite */}
      <section className='text-center mt-10'>
        <h2 className='text-title font-bold text-4xl'>
        Here is People’s Favorite
        </h2>
      </section>
      {/* footer */}
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
