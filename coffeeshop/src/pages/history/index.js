import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import axios from 'axios'

const History = () => {
  const id = JSON.parse(localStorage.getItem('@isLogin')).user.user_id

  const [history, setHistroy] = useState({
    data: []
  })
  const [historySelect, setHistorySelect] = useState([])

  useEffect(() => {
    axios.get(`https://coffeeshop-be.adaptable.app/api/v1/history/${id}`)
    .then(res => {
      setHistroy({
        ...history,
        data: res.data.data
      })
    })
    .catch(err => err.response.data)

  }, [historySelect, history])

  const deleteAll = (e) => {
      e.preventDefault()

      axios.delete(`https://coffeeshop-be.adaptable.app/api/v1/history/user/${id}`)
      .then(res => res.data.data)
      .catch(err => err)
  }

  const handleDelete = (e) => {
    e.preventDefault()
      historySelect.map(async item => {
        console.log(item)
        try {
          const res = await axios.delete(`https://coffeeshop-be.adaptable.app/api/v1/history/${item}`)
          return res.data.data
        } catch (err) {
          return err
        }
      })

      setHistorySelect([])
    }
  return (
    <div className='relative text-white'>
        <div className='sticky top-0'>
            <Header />
        </div>
        <main className='mx-5 lg:mx-0 bg-history min-h-screen pt-10 bg-cover bg-no-repeat'>
          <section className='text-center'>
            <p className='font-bold text-2xl'>Let's see what you have bought</p>
            <p>Select item to delete</p>
          </section>
          <div className='font-bold text-end mx-10 mt-5'>
            <p onClick={deleteAll} className={(historySelect.length > 0 ? 'invisible': 'visible') + " cursor-pointer "}>Delete All</p>
            <p onClick={handleDelete} className={(historySelect.length > 0 ? 'visible': 'invisible') + " cursor-pointer"}>Delete Selected</p>
            <p className={(historySelect.length > 0 ? 'visible': 'invisible') + " text-xs cursor-pointer"}>Cancel</p>
          </div>
          <section className='flex items-center flex-wrap gap-x-10 gap-y-2 justify-center mt-10'>
            {history.data.map(item => {
              return <div key={item.history_id} className='flex relative w-72 h-36 items-center gap-4 bg-white shadow-2xl p-5 rounded-lg'>
              <img src={item.product_image} className='h-20 w-20 rounded-full object-cover' />
              <div className='text-secondary'>
                <p className='text-title font-bold text-xl'>{item.product_name}</p>
                <p>IDR{" "}
                      {new Intl.NumberFormat("ja-JP", {
                        style: "decimal",
                      }).format(item.total)}</p>
                <p>Delivered</p>
              </div>
              <input onClick={(e) => {
                console.log(historySelect)
                if(historySelect.includes(item.history_id)) {
                  setHistorySelect(oldValues => {
                    return oldValues.filter(id => id !== item.history_id)
                  })
                } else {
                  setHistorySelect(historySelect => [...historySelect, item.history_id])
                }
              }} id={item.history_id} type='checkbox' className='absolute right-3 bottom-3' />
            </div>
            })}
          </section>
        </main>
        <div className='mt-20'>
            <Footer />
        </div>
    </div>
  )
}

export default History