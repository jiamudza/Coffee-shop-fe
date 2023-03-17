import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Restricted = () => {
    const navigate = useNavigate()
    const handleback = (e) => {
        e.preventDefault()
        navigate("/")
    }

  return (
    <div className='flex flex-col mx-auto w-52 place-content-center items-center h-[100vh] overflow-x-hidden'>
        <p className='text-text'>You're Logged In</p>
        <Link onClick={handleback} className="px-5 py-1 font-bold text-secondary border-2 border-transparent bg-primary rounded-3xl mt-5 duration-300 hover:bg-yellow-600 active:scale-90">Back to Page</Link>
    </div>
  )
}

export default Restricted