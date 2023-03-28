import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";


import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import {IoIosCheckbox} from "react-icons/io"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()

  const id = JSON.parse(localStorage.getItem("@isLogin")).user.user_id;
  const [menu, setMenu] = useState({
    data: [],
    subtotal: 0,
  });
  const [paymentSuccess, setPaymentSucess] = useState(false)

  const [cartId, setCartId] = useState("");
  useEffect(() => {
    axios
      .get(`https://coffeeshop-be.adaptable.app/api/v1/cart/${id}`)
      .then((result) => {
        let sum = 0;
        let amount = 0;

        const x = result.data.data.map((item) => {
          let price = 0;
          price = price + parseInt(item.total);
          return price;
        });

        const y = result.data.data.map((item) => {
          let summary = 0;
          summary = summary + parseInt(item.amount);
          return summary;
        });

        x.forEach((value) => {
          sum += value;
          return sum;
        });
        y.forEach((value) => {
          amount += value;
          return amount;
        });
        setMenu({
          ...menu,
          data: result.data.data,
          subtotal: sum,
          amount,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cartId, menu]);

  const deleteCart = async (e) => {
    e.preventDefault();
    setCartId(await e.target.parentNode.attributes.value.value);
    const cart_id = e.target.parentNode.attributes.value.value;

    axios
      .delete(`https://coffeeshop-be.adaptable.app/api/v1/cart/${cart_id}`)
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [history, setHistory] = useState({
    product_id: "",
    user_id: JSON.parse(localStorage.getItem("@isLogin")).user.user_id,
    amount: menu.data.amount,
    total: new Intl.NumberFormat("ja-JP", {
      style: "decimal",
    }).format(menu.subtotal * (10 / 100) + 10000 + menu.subtotal),
  });


  

  const handleCheckout = async(e) => {
    setPaymentSucess(true)
    console.log(menu.data.product_id)
   menu.data.map(item => {
    return axios({
      url: `https://coffeeshop-be.adaptable.app/api/v1/history`,
      method: "POST",
      data: {
        user_id: JSON.parse(localStorage.getItem("@isLogin")).user.user_id,
        product_id : item.product_id,
        amount : item.amount,
        price : item.total / item.amount
      }
    })
      .then((res => res.data.data))
      .catch((err) => err.response);
   })

    axios
      .delete(`https://coffeeshop-be.adaptable.app/api/v1/cart/user/${id}`)
      .then((res) => res.data.data)
      .catch((err) => err.response.data);

  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-20">
        <Header />
      </div>
      <main className="bg-payment bg-auto lg:bg-cover pt-24 pb-28 lg:flex">
        <section className="lg:w-[50vw]">
          <h2 className="text-3xl text-center text-white drop-shadow-[6px_1px_2px_#000] shadow-black font-bold">
            Checkout your item now!
          </h2>
          <div className="lg:w-[30vw] mx-5 lg:mx-auto px-5 py-5 bg-white mt-10 shadow-xl rounded-xl">
            <p className="mb-5 font-bold text-xl text-secondary text-center">
              Order Summary
            </p>
            <div className=" border-b py-3 overflow-y-scroll h-48 text-xl">
              {menu.data.map((item) => {
                return (
                  <div
                    value={item.cart_id}
                    className="relative flex px-3 justify-between items-center gap-2 mt-3"
                  >
                    <p
                      onClick={deleteCart}
                      className="rounded-full absolute -top-4 p-1 right-2 cursor-pointer align-top text-text"
                    >
                      x
                    </p>
                    <img
                      src={item.product_image}
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xl font-bold">{item.product_name}</p>
                      <p className="text-lg">{`${item.amount}x (${item.size})`}</p>
                    </div>
                    <p
                      onClick={(e) =>
                        console.log(e.target.attributes.value.value)
                      }
                      value={item.total}

                      className="text-lg"
                    >
                      IDR{" "}
                      {new Intl.NumberFormat("ja-JP", {
                        style: "decimal",
                      }).format(item.total)}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex text-xl items-center justify-between py-2 text-secondary">
              <p>SUBTOTAL</p>
              <p>
                IDR{" "}
                {new Intl.NumberFormat("ja-JP", {
                  style: "decimal",
                }).format(menu.subtotal)}
              </p>
            </div>
            <div className="flex text-xl items-center justify-between py-2 text-secondary">
              <p>TAXT & FEES</p>
              <p>
                IDR{" "}
                {new Intl.NumberFormat("ja-JP", {
                  style: "decimal",
                }).format(menu.subtotal * (10 / 100))}
              </p>
            </div>
            <div className="flex text-xl items-center justify-between py-2 text-secondary">
              <p>SHIPPING</p>
              <p>
                IDR{" "}
                {new Intl.NumberFormat("ja-JP", {
                  style: "decimal",
                }).format(10000)}
              </p>
            </div>
            <div className="flex items-center font-bold text-2xl mt-5 justify-between py-2 text-secondary">
              <p>TOTAL</p>
              <p>
                IDR{" "}
                {new Intl.NumberFormat("ja-JP", {
                  style: "decimal",
                }).format(menu.subtotal * (10 / 100) + 10000 + menu.subtotal)}
              </p>
            </div>
          </div>
        </section>
        <section className="mt-10 lg:mt-0 lg:w-[50vw] flex flex-col text-xl items-center">
          <div className="">
            <div className="font-bold text-white flex items-center justify-center gap-36">
              <p className="text-lg drop-shadow-[6px_1px_2px_#000]">
                Address details
              </p>
              <p className="text-sm drop-shadow-[6px_1px_2px_#000] cursor-pointer active:scale-95 ease-in-out duration-150">
                edit
              </p>
            </div>
            <div className="lg:w-[30vw] bg-white rounded-xl mt-3 p-3 mx-5 lg:mx-auto">
              <p className="border-b py-2">
                <span className="font-bold">Delivery</span> to Iskandar Street
              </p>
              <p className="border-b py-2">
                Km 5 refinery road oppsite re public road, effurun, Jakarta
              </p>
              <p className="py-2">+62 81348287878</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-lg text-white font-bold text-center drop-shadow-[6px_1px_2px_#000]">
              Payment method
            </p>
            <form className="bg-white lg:px-5 lg:w-[26vw] mx-5 lg:mx-auto rounded-xl p-5 mt-5">
              <div className="flex items-center justify-start gap-3 border-b py-2">
                <input
                  type="radio"
                  value="card"
                  name="payment-method"
                  className="text-secondary bg-transparent outline-none border-secondary hover:bg-secondary active:bg-secondary focus:outline-secondary focus:bg-secondary hover:text-secondary h-4 w-4 checked:bg-secondary cursor-pointer"
                />
                <BsFillCreditCard2FrontFill
                  size={40}
                  className="text-white bg-[#F47B0A] p-2 rounded-lg"
                />
                <p>Card</p>
              </div>
              <div className="flex items-center justify-start gap-3 border-b py-2">
                <input
                  type="radio"
                  value="bank account"
                  name="payment-method"
                  className="text-secondary bg-transparent outline-none border-secondary hover:bg-secondary active:bg-secondary focus:outline-secondary focus:bg-secondary hover:text-secondary h-4 w-4 checked:bg-secondary cursor-pointer"
                />
                <AiFillBank
                  size={40}
                  className="text-white bg-secondary p-2 rounded-lg"
                />
                <p>Bank Account</p>
              </div>
              <div className="flex items-center justify-start gap-3 my-2">
                <input
                  type="radio"
                  value="cash on delivery"
                  name="payment-method"
                  className="text-secondary bg-transparent outline-none border-secondary hover:bg-secondary active:bg-secondary focus:outline-secondary focus:bg-secondary hover:text-secondary h-4 w-4 checked:bg-secondary cursor-pointer"
                />
                <TbTruckDelivery
                  size={40}
                  className="text-white bg-primary p-2 rounded-lg"
                />
                <p>Cash on Delivery</p>
              </div>
            </form>
          </div>
          <button
            onClick={handleCheckout}
            className="py-2 mx-5 px-28 lg:w-[26vw] mt-10 text-lg whitespace-nowrap text-white bg-secondary border-2 border-transparent font-bold rounded-lg hover:text-secondary hover:border-transparent hover:bg-primary active:scale-90 ease-in-out duration-200"
          >
            Confirm and Pay
          </button>
          <div className={(paymentSuccess === true ? 'flex' : 'hidden') + " bg-white rounded-lg shadow-2xl px-10 py-5 flex-col flex items-center justify-center fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}>
            <IoIosCheckbox size={50} className="text-green-500"  />
            <p className="text-green-600 font-bold mt-5">Your payment is successfully</p>
            <p className="text-secondary mt-10">Left the rest to us, just wait for your order and enjoy...</p>
            <button onClick={() => {
              setPaymentSucess(false);
              
              navigate('/history')
            }} className="bg-primary text-secondary px-3 py-1 rounded-md mt-5 font-bold">Ok</button>
          </div>
        </section>
      </main>
      <div className="lg:mt-20 pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
