import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './index.css'

import brand from '../../assets/images/brand-logo.png'
import userPlaceholder from '../../assets/images/user-placeholder.png'


import {GoSearch} from 'react-icons/go'
import {BsChatLeftText} from 'react-icons/bs'
import {FaUserCircle, FaCoffee} from 'react-icons/fa'
import {RiLogoutCircleLine, RiSettings3Fill, RiHistoryFill} from 'react-icons/ri'
import {IoMdCart} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiOutlineArrowLeft} from 'react-icons/hi'

const Header = () => {
    const [notif, setNotif] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [hamburgerMenu, setHamburgerMenu] = useState('hamburger-menu')
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [active, setActive] = useState(`${window.location.pathname}`)

    const handleNav = (e) => {
        

        setActive(window.location.pathname)
    }

    

    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.removeItem('@isLogin');

        setIsLogin(false)
    }
    console.log(active)

    useEffect(() => {
        if(localStorage.getItem('@isLogin')) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [])
  return (
    <div className='font-rubik bg-white pb-5 bg-opacity-90'>
        <div className={drawerOpen ? 'flex blur-sm md:blur-none pt-5 px-5 md:px-20 items-center justify-between' : 'flex  pt-5 px-5 md:px-20 items-center justify-between'}>
                <button id={hamburgerMenu} onClick={() => {
                    setHamburgerMenu('hamburger-menu-active')
                    setDrawerOpen(true)
                }} className='block lg:hidden'>
                    <span  className='hamburger-line origin-bottom-left transition ease-in-out duration-300'></span>
                    <span  className='h-[2.5px] w-5 rounded-lg bg-text block'></span>
                    <span  className='hamburger-line origin-top-left transition ease-in-out duration-300'></span>
                </button>

            <Link to="/" className='hidden lg:flex items-center font-bold'>
                <img src={brand} alt='logo-brand'/>
                <p className='px-2'>Coffeejie</p>
            </Link>

            <div className='hidden lg:block md:mx-20 whitespace-nowrap'>
                <Link to='/' onClick={handleNav} className={active === '/' ? 'font-bold text-secondary lg:px-5' : 'text-text md:px-5'}>Home</Link>
                <Link to='/product' onClick={handleNav} className={active === '/product:id' || active === '/product' ? 'font-bold text-secondary lg:px-5' : 'text-text md:px-5'}>Product</Link>
                <Link to='/payment' onClick={handleNav} className={active === '/payment' ? 'font-bold text-secondary lg:px-5' : 'text-text md:px-5'}>Your Cart</Link>
                <Link to='/history' onClick={handleNav} className={active === '/history' ? 'font-bold text-secondary lg:px-5' : 'text-text md:px-5'}>History</Link>
            </div>

            {isLogin ? 
                <div className='flex items-center'>
                <div className='flex items-center lg:bg-pale lg:px-4 rounded-3xl mx-5'>
                    <GoSearch size={25} className='text-text'/>
                    <input type='text' placeholder='Search' className='outline-offset-0 hidden lg:block mx-2 w-28 bg-pale border-none outline-none active:outline-none focus:outline-none' />
                </div>
        
                <div className='flex cursor-pointer'>
                    {notif ? <div className='w-2 h-2 bg-red-600 rounded-full absolute mx-3'></div> : <div></div>}
                    <BsChatLeftText size={25} className='text-text mx-4 bg-transparent'/>
                    {/* <BsChatRightText size={25} className='text-text mx-5 mt-[2px] absolute -z-10'/> */}
                </div>
        
                <div>
                    <img onClick={() => setIsOpen((prev) => !prev)} src={userPlaceholder} className='w-10 rounded-full mx-5 cursor-pointer' alt='user-profile'/>
        
                    {isOpen && (
                        <div className='hidden absolute md:flex flex-col items-start right-20 top-20 shadow-2xl bg-white py-4 w-52 border-[1px] rounded-xl text-center text-text'>
                            <div onClick={() => navigate('/profile')} className='py-2 mx-12 flex items-center justify-around cursor-pointer'>
                                <FaUserCircle size={25} className='text-text mx-3 ' />
                                <p>Profile</p>
                            </div>
                            <div onClick={() => navigate('/cart')} className='py-2 mx-12 flex items-center justify-around cursor-pointer'>
                                <IoMdCart size={25} className='text-text mx-3' />
                                <p>Cart</p>
                            </div>
                            <div onClick={() => navigate('/settings')} className='py-2 mx-12 flex items-center justify-around cursor-pointer'>
                                <RiSettings3Fill size={25} className='text-text mx-3' />
                                <p>Settings</p>
                            </div>
                            <div onClick={handleLogout} className='py-2 mx-12 flex items-center justify-around cursor-pointer'>
                                <RiLogoutCircleLine size={25} className='text-text mx-3' />
                                <p>Logout</p>
                            </div>
                            
                        </div>
                    )}
                </div>
                
            </div>
            : 
            
            <div className='block'>
                <Link to="/login" className='px-5 py-2 bg-Transparent mx-2 text-title font-bold rounded-3xl hover:bg-secondary hover:text-white ease-in duration-200'>Login</Link>
                <Link to="/register" className='px-5 py-2 bg-primary text-secondary font-bold rounded-3xl hover:bg-secondary hover:text-white ease-in duration-200'>Sign Up</Link>
            </div>
        }
        </div>

        <div id={`drawer-${drawerOpen}`} className='blur-none absolute transition-all ease-in-out duration-500 top-0 w-[80vw] h-[100vh] bg-white shadow-2xl lg:hidden'>
            
            {isLogin?  <div className='flex flex-col items-start right-20 top-0 bg-transparent py-0 w-full text-center text-text'>

<div className='bg-secondary w-full rounded-r-xl'>
    <div onClick={() => {
        setDrawerOpen(!drawerOpen)
        setHamburgerMenu('hamburger-menu')
    }} className=' rounded right-4 absolute py-3 pr-0 pl-3 cursor-pointer'>
        <HiOutlineArrowLeft color='white' size={30}/>
    </div>
        <div onClick={() => navigate('/profile')} className='cursor-pointer flex flex-col items-center mx-20 py-5 text-white'>
        <img className='w-28 h-28 rounded-full' src={userPlaceholder} alt="user-profile"/>
        <p className='font-bold py-3'>Ajimas</p>
        <p>jiamudza@gmail.com</p>
    </div>
</div>

{/* drawer down */}
                <div onClick={() => navigate('/')} className='py-5 px-20 flex items-center justify-arounf cursor-pointer border-b'>
                    <AiFillHome size={25} className='text-text mx-3 ' />
                    <p>Home</p>
                </div>
                <div onClick={() => navigate('/product')} className='py-5 px-20 flex items-center justify-around cursor-pointer border-b'>
                    <FaCoffee size={25} className='text-text mx-3' />
                    <p>product</p>
                </div>
                <div onClick={() => navigate('/cart')} className='py-5 px-20 flex items-center justify-around cursor-pointer border-b'>
                    <IoMdCart size={25} className='text-text mx-3' />
                    <p>Your Cart</p>
                </div>
                <div onClick={() => navigate('/history')} className='py-5 px-20 flex items-center justify-around cursor-pointer'>
                    <RiHistoryFill size={25} className='text-text mx-3' />
                    <p>History</p>
                </div>
                <div onClick={handleLogout} className='py-3 absolute right-2 bottom-10  flex items-center justify-around cursor-pointer'>
                    <RiLogoutCircleLine size={25} className='text-text mx-3' />
                    <p>Logout</p>
                </div>
                
            </div> :
            <div>
                <div className=' flex flex-col items-end w-full rounded-r-xl'>
                    <div onClick={() => {
                        setDrawerOpen(!drawerOpen)
                        setHamburgerMenu('hamburger-menu')
                    }} className='rounded py-4 pr-0 mx-4 cursor-pointer'>
                        <HiOutlineArrowLeft className='text-secondary' size={30}/>
                    </div>
                </div>
                
                <div onClick={() => navigate('/')} className='py-5 px-20 flex items-center justify-around cursor-pointer border-b'>
                    <AiFillHome size={25} className='text-text mx-3 ' />
                    <p>Home<span className='text-transparent'>....</span></p>
                </div>
                <div onClick={() => navigate('/product')} className='py-5 px-20 flex items-center justify-around cursor-pointer border-b'>
                    <FaCoffee size={25} className='text-text mx-3' />
                    <p>product</p>
                </div>
                <div onClick={() => navigate('/cart')} className='py-5 px-20 flex items-center justify-around cursor-pointer border-b'>
                    <IoMdCart size={25} className='text-text mx-3' />
                    <p>Your Cart</p>
                </div>
                <div onClick={() => navigate('/history')} className='py-5 px-20 flex items-center justify-around cursor-pointer'>
                    <RiHistoryFill size={25} className='text-text mx-3' />
                    <p>History</p>
                </div>
                <div className='absolute bottom-20 w-full cursor-pointer flex justify-around px-10'>
                <Link to="/login" className='px-5 py-2 bg-Transparent mx-2 text-title font-bold rounded-3xl hover:bg-secondary hover:text-white ease-in duration-200 focus:bg-none'>Login</Link>
                <Link to="/register" className='px-5 py-2 bg-primary text-secondary font-bold rounded-3xl hover:bg-secondary hover:text-white ease-in duration-200'>Sign Up</Link>
            </div>
            </div>
            }
            
        </div>

    </div>
  )
}

export default Header