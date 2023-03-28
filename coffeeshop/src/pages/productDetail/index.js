import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import veggie from "../../assets/images/veggie-tomato.svg";

import { AiOutlineRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

const ProductDetail = () => {
  
  const { id } = useParams();
  const navigate = useNavigate()

  const [menuDetail, setMenuDetail] = useState({
    data: {},
  });
  const [addCartSuccess, setAddCartSuccess] = useState(false)

  useEffect(() => {
    axios
      .get(`https://coffeeshop-be.adaptable.app/api/v1/product/${id}`)
      .then((result) => {
        console.log(result.data.data[0].price);
        setMenuDetail({
          ...menuDetail,
          data: result.data.data[0],
        });
        setCart({
          ...cart,
          price: result.data.data[0].price,
        });
      })
      .catch((err) => console.log(err.response.data));
  }, []);


  const [cart, setCart] = useState({
    user_id: JSON.parse(localStorage.getItem("@isLogin")).user.user_id,
    product_id: id,
    id_size: "R",
    price: menuDetail.data.price,
    amount: 1,
  });


  const handleSize = (e) => {
    // e.preventDefault()
    setCart({
      ...cart,
      id_size: e.target.innerText,
    });
  };

  const handleOrder = async(e) => {
    e.preventDefault()
    setAddCartSuccess(true)

    let result = await axios({
        url: `https://coffeeshop-be.adaptable.app/api/v1/cart/${cart.user_id}`,
        method: "POST",
        data: cart,
      })
        .then((result) => {
          console.log(result.data.data);
        })
        .catch((err) => console.log(err.response.data));

    if (e.target.tagName === "svg") {
      navigate("/payment");
    }
  };

  return (
    <div className={(addCartSuccess === true ? 'overflow-y-hidden' : 'overflow-y-hidden') + "  font-rubik relative"}>
      <div className="sticky top-0">
        <Header />
      </div>
      <main className="lg:px-20 lg:flex items-center border-t pt-5">
        <section className="lg:w-[50vw] lg:px-20 flex flex-col items-center">
          <p className="font-bold flex items-center text-start">
            Favorite & Promo
            <AiOutlineRight className="text-secondary font-bold" />{" "}
            <span className="text-secondary">
              {menuDetail.data.product_name}
            </span>
          </p>
          <img
            src={menuDetail.data.product_image}
            alt="menu"
            className="h-40 w-40 mt-10 mx-auto rounded-full lg:mt-5 object-cover"
          />
          <div className="lg:w-[25vw] mt-5 rounded-xl shadow-xl px-3 py-5">
            <p className="text-lg font-bold text-center">Delivery and Time</p>
            <ul className="flex items-center justify-evenly mt-5">
              <li className="text-white font0bold p-1 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer">
                Dine in
              </li>
              <li className="text-white font0bold p-1 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer">
                Door Delivery
              </li>
              <li className="text-white font0bold p-1 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer">
                Pick Up
              </li>
            </ul>
            <div className="flex items-center mt-2">
              <p className="text-start ml-3 mr-14 ">Now</p>

              <button className="text-white mx-2 font0bold py-1 px-2 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer">
                Yes
              </button>
              <button className="text-white mx-2 font0bold py-1 px-2 rounded-lg border bg-xpale hover:bg-secondary ease-in-out duration-200 cursor-pointer">
                No
              </button>
            </div>
            <div className="mt-2 flex">
              <p className="text-start ml-3 mr-5 whitespace-nowrap">Set Time</p>
              <input
                type="text"
                className="bg-xpale px-3 py-1 rounded-lg"
                placeholder="Enter time for reservation"
              />
            </div>
          </div>
        </section>
        <section className="lg:w-[50vw] px-20 mt-10">
          <h1 className="text-4xl font-bold text-center">
            {menuDetail.data.product_name}
          </h1>
          <p className="text-secondary mt-5">{menuDetail.data.description}</p>
          <p className="text-secondary mt-10">
            Delivery only on{" "}
            <span className="font-bold">
              Monday to
              <br /> friday
            </span>{" "}
            at <span className="font-bold">1 - 7 pm</span>
          </p>
          <div className="rounded-xl mt-5 text-center md:flex flex-row-reverse items-center justify-between">
            <p className="font-bold text-2xl">
              IDR{" "}
              {new Intl.NumberFormat("ja-JP", { style: "decimal" }).format(
                menuDetail.data.price * cart.amount
              )}
            </p>
            <ul className="text-secondary mx-auto mt-4 md:mx-0 font-bold text-center flex items-center justify-between border rounded-xl w-32">
              <li
                onClick={() => {
                  cart.amount === 1
                    ? setCart({
                        ...cart,
                        amount: 1,
                      })
                    : setCart({
                        ...cart,
                        amount: cart.amount - 1,
                      });
                }}
                className="px-3 text-2xl cursor-pointer"
              >
                -
              </li>
              <li className="border-x px-4">{cart.amount}</li>
              <li
                onClick={() => setCart({ ...cart, amount: cart.amount + 1 })}
                className="px-3 text-2xl cursor-pointer"
              >
                +
              </li>
            </ul>
          </div>
          <button
            onClick={handleOrder}
            className="py-3 rounded-lg bg-secondary text-white font-bold w-full mt-5 hover:bg-primary ease-in-out duration-150 active:scale-90"
          >
            Add to Cart
          </button>
          <div className={(addCartSuccess === true ? 'flex' : 'hidden') + " bg-white rounded-lg shadow-2xl flex-col justify-center items-center px-10 py-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
            <BsFillCartCheckFill size={50} className="text-green-500" />
            <p className="text-secondary font-bold text-xl mt-10">This menu is successfully added to your cart</p>
            <button onClick={() => {
              setAddCartSuccess(false)
              setCart({
                ...cart,
                id_size: 'R',
                amount: 1,
              })
            }} className="bg-primary text-secondary px-3 py-1 rounded-md font-bold">Ok</button>
          </div>
          <button className="py-3 rounded-lg bg-primary text-secondary hover:bg-secondary hover:text-white active:scale-90 ease-in-out duration-150 w-full mt-5 font-bold">
            Ask a Staff
          </button>
        </section>
      </main>
      <div className="mt-10 px-5">
        <div className="lg:flex items-center justify-center gap-20">
          <div className="text-center shadow-xl py-5 px-20 rounded-xl">
            <p className="text-lg font-bold">Choose a Size</p>
            <div className="flex justify-center items-center gap-3 mt-2">
              <button
                onClick={handleSize}
                className={
                  (cart.id_size === "R"
                    ? "bg-secondary text-white"
                    : "bg-primary text-black") +
                  " h-10 w-10 outline-2 hover:bg-secondary hover:text-white ease-in-out duration-200 focus:text-white active:scale-90 cursor-pointer font-bold text-lg flex place-content-center items-center justify-center text-center rounded-full"
                }
                name="size"
              >
                R
              </button>
              <button
                onClick={handleSize}
                className={
                  (cart.id_size === "L"
                    ? "bg-secondary text-white"
                    : "bg-primary text-black") +
                  " h-10 w-10 outline-2 hover:bg-secondary hover:text-white ease-in-out duration-200 focus:text-white active:scale-90 cursor-pointer font-bold text-lg flex place-content-center items-center justify-center text-center rounded-full"
                }
                name="size"
              >
                L
              </button>
              <button
                onClick={handleSize}
                className={
                  (cart.id_size === "XL"
                    ? "bg-secondary text-white"
                    : "bg-primary text-black") +
                  " h-10 w-10 outline-2 hover:bg-secondary hover:text-white ease-in-out duration-200 focus:text-white active:scale-90 cursor-pointer font-bold text-lg flex place-content-center items-center justify-center text-center rounded-full"
                }
                name="size"
              >
                XL
              </button>
            </div>
          </div>
          <div className="lg:flex items-center justify-around shadow-xl mt-5 lg:mt-0 p-5 rounded-xl">
            <img
              src={menuDetail.data.product_image}
              alt="menu"
              className="h-16 w-16 rounded-full mr-5 object-cover"
            />
            <div className="flex flex-col align-top mr-28">
              <p className="font-bold text-lg">
                {menuDetail.data.product_name}
              </p>
              <p>
                {cart.id_size === "R" ? cart.amount + " x" + " (Regular)" : ""}
              </p>
              <p>
                {cart.id_size === "L" ? cart.amount + " x" + " (Large)" : ""}
              </p>
              <p>
                {cart.id_size === "XL"
                  ? cart.amount + " x" + " (Extra Large)"
                  : ""}
              </p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <p className="font-bold text-lg">Checkout</p>
              <FaArrowRight onClick={handleOrder}
                size={60} values='checkout'
                className="p-4 rounded-full bg-primary text-secondary hover:bg-secondary hover:text-white active:scale-90 ease-in-out duration-100 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
