// utils
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


// assets
import authImg from '../../../assets/images/auth-image.jpg'
import brand from '../../../assets/images/brand-logo.png'
import googleIcon from '../../../assets/images/google-icon.png'

// components
import Footer from '../../../components/footer'


const Login = () => {
  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem('@isLogin', "tes")
    return navigate(-1)
  }

  return (
    <>
      <div className='md:flex font-rubik'>
        <div className='hidden md:block w-[50%]'>
          <img src={authImg} alt="auth-image.jpg" className='w-full h-[100vh] object-cover'/>
        </div>

        <div 
        className="bg-auth px-5 flex-1 md:bg-none">
          <div className='h-[100vh] text-white lg:text-title '>
            <div className='hidden md:flex pt-5 items-center justify-between'>
              <Link to="/" className='flex items-center font-bold'>
                <img src={brand} alt='logo-brand'/>
                <p className='px-2'>Coffe Shop</p>
              </Link>
                
                <Link to="/register" className='px-5 py-2 bg-primary text-secondary font-bold rounded-3xl hover:bg-secondary hover:text-white ease-in duration-200'>Sign Up</Link>
              
            </div>

            <p className='font-bold text-4xl pt-10  md:text-center md:text-secondary md:shadow-primary'>Login</p>

            <form className='font-bold mt-52 md:mt-14 md:font-[500] md:px-20' >
              <label className='hidden md:block font-bold text-text'>Email address :</label>
              <input type="email" placeholder='Enter your email address' className='bg-transparent placeholder-white border-b w-full lg:bg-white md:placeholder-text md:border md:py-4 md:px-4 md:mb-5 md:mt-2 md:rounded-xl' />
              <label className='hidden md:block font-bold text-text'>Password :</label>
              <input type="password" placeholder='Enter your password' className='bg-transparent placeholder-white mt-5 border-b w-full mb-4 md:bg-white md:placeholder-text md:border md:py-4 md:px-4 md:mt-2 md:rounded-xl' />

              <Link to="/forgot-password" className='text-sm border-b md:border-secondary md:border-b-2 md:text-secondary md:font-bold '>Forgot password?</Link>

            <button onClick={handleLogin} className='bg-primary text-title py-3 mt-5 block w-full rounded-lg font-bold hover:bg-secondary md:text-secondary hover:text-white ease-in duration-200'>
              Login
            </button>

            <div className='flex items-center justify-between mt-5 md:hidden'>
              <div className='w-28 h-[2px] bg-white'></div>
              <p className='text-sm'>or login with</p>
              <div className='w-28 h-[2px] bg-white'></div>
            </div>

            <button className='flex item-center justify-center mx-auto mt-5 md:mt-7 rounded-lg w-full py-3 px-5 bg-white shadow-lg'>
              <img src={googleIcon} />
              <p className='text-title font-[400] mx-3 md:font-bold'>Login with google</p>
            </button>
          </form>
          </div>

          
        </div>
      </div>
      <div className='hidden w-[80vw] left-1/2 -translate-x-1/2 px-10 py-10 z-10 -mt-20 md:flex items-center justify-between rounded-lg shadow-2xl absolute bg-white'>
          <div>
            <p className='text-3xl font-bold'>
            Get your member <br /> card now!
            </p>
            <p className='mt-3'>
            Let's join with our member and enjoy the deals.
            </p>
          </div>
          <button className='px-10 py-3 bg-primary text-secondary font-bold rounded-md hover:text-white hover:bg-secondary ease-in duration-200'>
            Create Now
          </button>
      </div>
      <div className='hidden md:block pt-36'>
      <Footer />
      </div>
    </>
  )
}

export default Login