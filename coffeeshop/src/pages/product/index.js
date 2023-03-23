import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../../components/header'
import Footer from '../../components/footer'

import veggie from '../../assets/images/veggie-tomato.svg'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState('Favorite & Promo')
  const [menu, setMenu] = useState({
    data: []
  })
  const [filter, setFilter] = useState('')

  const handleCategory = (e) => {
    e.preventDefault()

    setActive(e.target.innerText)
     if(e.target.innerText === 'Favorite & Promo') {
      setFilter('')
     } else {
      setFilter(e.target.innerText)
     }
    
  }

  useEffect(() => {
    axios.get(`https://coffeeshop-be.adaptable.app/api/v1/product?filter=${filter}`)
    .then(result => {
      console.log(result.data.data)
      setMenu({
        ...menu,
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err.response.data)
    })
  },[filter])
  return (
    <div className='relative'>
        <div className='sticky top-0 z-20'>
            <Header />
        </div>
        <section className='border-t text-center px-5 md:px-10 lg:flex mt-5'>
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
              <div className='flex flex-wrap place-content-center gap-x-2 md:gap-x-10 gap-y-5 my-10 mx-auto px-0 md:px-10 '>
                {menu.data.map(item => {
                  return <div onClick={() => navigate(`/product/${item.product_id}`)} className='w-24 h-40 md:w-36 md:h-[35vh] flex flex-col items-center shadow-lg p-2 relative cursor-pointer active:scale-110 ease-in-out duration-200 rounded-2xl'>
                    <img src={item.product_image} alt='menu' className='h-10 w-10 md:h-24 md:w-24 shadow-2xl rounded-full'/>
                    <p className='text-sm md:text-xl font-bold'>{item.product_name}</p>
                    <p className='font-bold text-sm md:text-lg text-secondary absolute bottom-3 md:bottom-6'>IDR {new Intl.NumberFormat('ja-JP', {style: 'decimal'}).format(item.price)}</p>
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