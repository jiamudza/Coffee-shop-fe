import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios'

const History = () => {
  const id = JSON.parse(localStorage.getItem('@isLogin')).user.user_id

  const [history, setHistroy] = useState({
    data: []
  })

  useEffect(() => {
    axios.get(`https://coffeeshop-be.adaptable.app/api/v1/history/${id}`)
    .then(res => {
      console.log(res.data.data)
      setHistroy({
        ...history,
        data: res.data.data
      })
    })
    .catch(err => err.response.data)

  }, [])
  return (
    <div className='relative h-[200vh]'>
        <div className='sticky top-0'>
            <Header />
        </div>
        <main className='mx-20'>
          <section className='text-center mt-10'>
            <p className='font-bold text-2xl'>Let's see what you have bought</p>
            <p>Select item to delete</p>
          </section>
          <section className='flex items-center flex-wrap gap-10 justify-center mt-10'>
            {history.data.map(item => {
              return <div key={item.history_id} className='flex w-72 items-center gap-4 bg-white shadow-2xl p-5 rounded-lg'>
              <img src={item.product_image} className='h-20 w-20 rounded-full' />
              <div className='text-secondary'>
                <p className='text-title font-bold text-xl'>{item.product_name}</p>
                <p>{item.total}</p>
                <p>Delivered</p>
              </div>
            </div>
            })}
          </section>
        </main>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default History