import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

// assets
import brand from '../../assets/images/brand-logo.png'

const Footer = () => {
  return (
    <div className='flex items-center justify-between mx-20 pb-10'>
        <div>
            <Link to="/" className='flex items-center font-bold'>
                <img src={brand} alt='logo-brand'/>
                <p className='px-2'>Coffe Shop</p>
            </Link>

            <p className='text-text font-[500] mt-3'>
            Coffee Shop is a store that sells some good meals, <br />and especially coffee. We provide high quality beans
            </p>
            <div className='flex mt-3'>
                <FaFacebookF size={40} className="mx-2 bg-primary px-2 py-2 rounded-full text-secondary"/>
                <FaTwitter size={40} className="mx-2 bg-primary px-2 py-2 rounded-full text-secondary"/>
                <FaInstagram size={40} className="mx-2 bg-primary px-2 py-2 rounded-full text-secondary"/>
            </div>
        </div>

        <div className='text-text flex'>
            <div className='mx-5'>
                <p className='text-title font-bold'>
                    Product
                </p>
                <p className='mt-2'>
                    Download
                </p>
                <p className='mt-2'>
                    Pricing
                </p>
                <p className='mt-2'>
                    Location
                </p>
                <p className='mt-2'>
                    Countries
                </p>
                <p className='mt-2'>
                    Blog
                </p>
                
            </div>
            <div className='mx-5'>
                <p className='text-title font-bold'>
                    Engage
                </p>
                <p className='mt-2'>
                    Coffee Shop?
                </p>
                <p className='mt-2'>
                    FAQ
                </p>
                <p className='mt-2'>
                    About Us
                </p>
                <p className='mt-2'>
                    Privacy Policy
                </p>
                <p className='mt-2'>
                    Terms of Service
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default Footer