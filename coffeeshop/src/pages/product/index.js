import React, { useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

import veggie from '../../assets/images/veggie-tomato.svg'

const Product = () => {
  const [active, setActive] = useState('Favorite & Promo')

  const handleCategory = (e) => {
    e.preventDefault()

    setActive(e.target.innerText)
    
  }

  return (
    <div>
        <div>
            <Header />
        </div>
        <section className='border-t text-center px-10 lg:flex mt-5'>
            <aside className='md:2-[25vw] md:pt-5'>
              <h2 className='font-bold text-xl text-secondary'>
                Promo Today
              </h2>
              <p className='mt-3'>
              Coupons will be updated every weeks. Check them out! 
              </p>
            </aside>
            <main className='lg:w-[75vw] mt-10 md:mt-0 lg:border-l md:pt-5'>
              <div className='hidden lg:block md:w-full'>
                <ul className='flex items-center justify-around font-500'>
                  <li onClick={handleCategory}  className={(active === 'Favorite & Promo'? 'font-bold text-center border-b-2 border-secondary text-secondary' : 'text-center text-secondary') + ' cursor-pointer'}>Favorite & Promo</li>
                  <li onClick={handleCategory}  className={(active === 'Coffee'? ' font-bold text-center text-secondary border-b-2 border-secondary' : 'text-center text-secondary') + " cursor-pointer"}>Coffee</li>
                  <li onClick={handleCategory}  className={(active === 'Non Coffee'? 'font-bold text-center text-secondary border-b-2 border-secondary' : 'text-center text-secondary')+ " cursor-pointer"}>Non Coffee</li>
                  <li onClick={handleCategory}  className={(active === 'Food'? 'font-bold text-center text-secondary border-b-2 border-secondary' : 'text-center text-secondary') + " cursor-pointer"}>Food</li>
                  <li onClick={handleCategory}  className={(active === 'Add-on'? 'font-bold text-center text-secondary border-b-2 border-secondary' : 'text-center text-secondary') + " cursor-pointer"}>Add-on</li>
                </ul>
              </div>
              <div className='flex flex-wrap place-content-center gap-x-3 md:gap-x-10 gap-y-5 my-10 mx-auto px-0 md:px-10 '>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(item => {
                  return <div className='w-28 md:w-36 flex flex-col items-center shadow-lg p-2 cursor-pointer active:scale-110 ease-in-out duration-200 rounded-2xl'>
                    <img src={veggie} alt='menu' className='h-10 w-10 md:h-24 md:w-24 shadow-2xl rounded-full'/>
                    <p className='text-sm md:text-xl font-bold'>Veggie Tomato</p>
                    <p className='font-bold text-sm md:text-lg text-secondary'>IDR 34.000</p>
                  </div>
                  
                })}
              </div>
              <p className='text-secondary text-start px-10'>
              *the price has been cutted by discount appears
              </p>
            </main>

        </section>
        <div className='mt-10 pt-10'>
            <Footer />
        </div>
    </div>
  )
}

export default Product