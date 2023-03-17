import React, { useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

import veggie from '../../assets/images/veggie-tomato.svg'

import {AiOutlineRight} from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'

const ProductDetail = () => {
    const [size, setSize] = useState('R')
    const handleSize = (e) => {
        // e.preventDefault()
        setSize(e.target.innerText)
    }

    console.log(window.location.pathname.split('/'))
  return (
    <div className='font-rubik'>
        <div>
            <Header />
        </div>
        <main className='lg:px-20 lg:flex items-center border-t pt-5'>
            <section className='lg:w-[50vw] lg:px-20 flex flex-col items-center'>
                <p className='font-bold flex items-center text-start'>Favorite & Promo<AiOutlineRight className='text-secondary font-bold'/> <span className='text-secondary'>Cold Brew</span></p>
                <img src={veggie} alt="menu" className='h-40 w-40 mt-10 mx-auto rounded-full lg:mt-5'/>
                <div className='lg:w-[25vw] mt-5 rounded-xl shadow-xl px-3 py-5'>
                    <p className='text-lg font-bold text-center'>Delivery and Time</p>
                    <ul className='flex items-center justify-evenly mt-5'>
                        <li className='text-white font0bold p-1 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer'>Dine in</li>
                        <li className='text-white font0bold p-1 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer'>Door Delivery</li>
                        <li className='text-white font0bold p-1 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer'>Pick Up</li>
                    </ul>
                    <div className='flex items-center mt-2'>
                        <p className='text-start ml-3 mr-14 '>Now</p>
                        
                        <button className='text-white mx-2 font0bold py-1 px-2 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer'>Yes</button>
                        <button className='text-white mx-2 font0bold py-1 px-2 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer'>No</button>
                        
                    </div>
                    <div className='mt-2 flex'>
                        <p className='text-start ml-3 mr-5 whitespace-nowrap'>Set Time</p>
                        <input type='text' className='bg-xpale px-3 py-1 rounded-lg' placeholder='Enter time for reservation' />
                    </div>
                </div>
            </section>
            <section className='lg:w-[50vw] px-20 mt-10'>
                <h1 className='text-4xl font-bold text-center'>COLD BREW</h1>
                <p className='text-secondary mt-5'>
                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                </p>
                <p className='text-secondary mt-10'>
                Delivery only on <span className='font-bold'>Monday to<br /> friday</span> at  <span className='font-bold'>1 - 7 pm</span>
                </p>
                <div className='rounded-xl mt-5 flex items-center justify-between'>
                    <ul className='text-secondary font-bold text-center flex items-center justify-between border rounded-xl w-32'>
                        <li className='px-3 text-2xl'>-</li>
                        <li className='border-x px-4'>1</li>
                        <li className='px-3 text-2xl'>+</li>
                    </ul>
                    <p className='font-bold text-2xl'>IDR 30.000</p>
                </div>
                <button className='py-3 rounded-lg bg-secondary text-white font-bold w-full mt-5 hover:bg-primary ease-in-out duration-150 active:scale-90'>Add to Cart</button>
                <button className='py-3 rounded-lg bg-primary text-secondary hover:bg-secondary hover:text-white active:scale-90 ease-in-out duration-150 w-full mt-5 font-bold'>Ask a Staff</button>
            </section>
        </main>
        <div className='mt-10 px-5'>
            <div className='lg:flex items-center justify-center gap-20'>
                <div className='text-center shadow-xl py-5 px-20 rounded-xl'>
                    <p className='text-lg font-bold'>Choose a Size</p>
                    <div className='flex justify-center items-center gap-3 mt-2'>
                        <button onClick={handleSize} className={(size === 'R' ? 'bg-secondary text-white' : 'bg-primary text-black') + ' h-10 w-10 outline-2 hover:bg-secondary hover:text-white ease-in-out duration-200 focus:text-white active:scale-90 cursor-pointer font-bold text-lg flex place-content-center items-center justify-center text-center rounded-full'} name='size'>R</button>
                        <button onClick={handleSize} className={(size === 'L' ? 'bg-secondary text-white' : 'bg-primary text-black') + ' h-10 w-10 outline-2 hover:bg-secondary hover:text-white ease-in-out duration-200 focus:text-white active:scale-90 cursor-pointer font-bold text-lg flex place-content-center items-center justify-center text-center rounded-full'} name='size'>L</button>
                        <button onClick={handleSize} className={(size === 'XL' ? 'bg-secondary text-white' : 'bg-primary text-black') + ' h-10 w-10 outline-2 hover:bg-secondary hover:text-white ease-in-out duration-200 focus:text-white active:scale-90 cursor-pointer font-bold text-lg flex place-content-center items-center justify-center text-center rounded-full'} name='size'>XL</button>
                    </div>
                </div>
                <div className='lg:flex items-center justify-around shadow-xl mt-5 lg:mt-0 p-5 rounded-xl'>
                    <img src={veggie} alt='menu' className='h-16 w-16 rounded-full mr-5'/>
                    <div className='flex flex-col align-top mr-28'>
                        <p className='font-bold text-lg'>COLD BREW</p>
                        <p>x1 (Large)</p>
                        <p>x1 (Regular)</p>
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        <p className='font-bold text-lg'>Checkout</p>
                        <FaArrowRight size={60} className='p-4 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-white active:scale-90 ease-in-out duration-150'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10 pt-20'>
            <Footer />
        </div>
    </div>
  )
}

export default ProductDetail