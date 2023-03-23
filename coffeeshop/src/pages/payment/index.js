import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

import creamyLatte from '../../assets/images/creamy-latte.svg'

import {BsFillCreditCard2FrontFill} from 'react-icons/bs'
import {AiFillBank} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'

const Payment = () => {
  return (
    <div className='relative overflow-x-hidden'>
        <div className='sticky top-0'>
            <Header />
        </div>
        <main className='bg-payment bg-auto lg:bg-cover pt-24 pb-28 lg:flex'>
            <section className='lg:w-[50vw] lg:scale-125'>
                <h2 className='text-3xl text-center text-white drop-shadow-[6px_1px_2px_#000] shadow-black font-bold'>Checkout your item now!</h2>
                <div className='lg:w-[20vw] mx-5 lg:mx-auto px-5 py-5 bg-white mt-10 shadow-xl rounded-xl'>
                    <div className=' border-b py-3'>
                        <p className='mb-10 font-bold text-lg text-secondary text-center'>Order Summary</p>
                        {[1,2].map(item => {
                            return <div className='flex justify-between items-center gap-2 mt-3'>
                                <img src={creamyLatte}  className='h-14 w-14 rounded-lg'/>
                                <div>
                                    <p>Creamy Latte</p>
                                    <p>1x (Regular)</p>
                                </div>
                                <p>IDR 24.0</p>
                            </div>
                        })}
                    </div>
                    <div className='flex items-center justify-between py-2 text-secondary'>
                        <p>SUBTOTAL</p>
                        <p>IDR 120.000</p>
                    </div>
                    <div className='flex items-center justify-between py-2 text-secondary'>
                        <p>TAXT & FEES</p>
                        <p>IDR 20.000</p>
                    </div>
                    <div className='flex items-center justify-between py-2 text-secondary'>
                        <p>SHIPPING</p>
                        <p>IDR 10.000</p>
                    </div>
                    <div className='flex items-center font-bold text-xl mt-5 justify-between py-2 text-secondary'>
                        <p>TOTAL</p>
                        <p>IDR 150.000</p>
                    </div>
                </div>
            </section>
            <section className='mt-10 lg:mt-0 lg:w-[50vw] lg:scale-125 flex flex-col items-center'>
                <div className=''>
                    <div className='font-bold text-white flex items-center justify-center gap-36'>
                        <p className='text-lg drop-shadow-[6px_1px_2px_#000]'>
                            Address details
                        </p>
                        <p className='text-sm drop-shadow-[6px_1px_2px_#000] cursor-pointer active:scale-95 ease-in-out duration-150'>edit</p>
                    </div>
                    <div className='lg:w-[26vw] bg-white rounded-xl mt-3 p-3 mx-5 lg:mx-auto'>
                        <p className='border-b py-2'><span className='font-bold'>Delivery</span> to Iskandar Street</p>
                        <p className='border-b py-2'>Km 5 refinery road oppsite re
                            public road, effurun, Jakarta</p>
                        <p className='py-2'>+62 81348287878</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='text-lg text-white font-bold text-center drop-shadow-[6px_1px_2px_#000]'>Payment method</p>
                    <form className='bg-white lg:px-5 lg:w-[26vw] mx-5 lg:mx-auto rounded-xl p-5 mt-5'>
                        <div className='flex items-center justify-start gap-3 border-b py-2'>
                            <input type='radio' checked value='card' name='payment-method' className='text-secondary bg-transparent outline-none border-secondary hover:bg-secondary active:bg-secondary focus:outline-secondary focus:bg-secondary hover:text-secondary h-4 w-4 checked:bg-secondary cursor-pointer' />
                            <BsFillCreditCard2FrontFill size={40} className='text-white bg-[#F47B0A] p-2 rounded-lg'/>
                            <p>Card</p>
                        </div>
                        <div className='flex items-center justify-start gap-3 border-b py-2'>
                            <input type='radio' checked value='card' name='payment-method' className='text-secondary bg-transparent outline-none border-secondary hover:bg-secondary active:bg-secondary focus:outline-secondary focus:bg-secondary hover:text-secondary h-4 w-4 checked:bg-secondary cursor-pointer' />
                            <AiFillBank size={40} className='text-white bg-secondary p-2 rounded-lg'/>
                            <p>Bank Account</p>
                        </div>
                        <div className='flex items-center justify-start gap-3 my-2'>
                            <input type='radio' checked value='card' name='payment-method' className='text-secondary bg-transparent outline-none border-secondary hover:bg-secondary active:bg-secondary focus:outline-secondary focus:bg-secondary hover:text-secondary h-4 w-4 checked:bg-secondary cursor-pointer' />
                            <TbTruckDelivery size={40} className='text-white bg-primary p-2 rounded-lg'/>
                            <p>Cash on Delivery</p>
                        </div>
                    </form>
                </div>
                    <button className='py-2 mx-5 px-28 lg:w-[26vw] mt-10  text-white bg-secondary border-2 border-transparent font-bold rounded-lg hover:text-secondary hover:border-transparent hover:bg-primary active:scale-90 ease-in-out duration-200'>Confirm and Pay</button>
            </section>
        </main>
        <div className='lg:mt-20 pt-10'>
            <Footer />
        </div>
    </div>
  )
}

export default Payment