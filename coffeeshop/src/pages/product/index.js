import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/header";
import Footer from "../../components/footer";

import veggie from "../../assets/images/veggie-tomato.svg";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Favorite & Promo");
  const [menu, setMenu] = useState({
    data: [],
  });
  const [filter, setFilter] = useState("");
  const [addButton, setAddButton] = useState(false);

  const handleCategory = (e) => {
    e.preventDefault();

    setActive(e.target.innerText);
    if (e.target.innerText === "Favorite & Promo") {
      setFilter("");
    } else {
      setFilter(e.target.innerText);
    }
  };

  const [userRole, setUserRole] = useState();

  useEffect(() => {
    if(localStorage.getItem('@isLogin')) {
      setUserRole(JSON.parse(localStorage.getItem("@isLogin")).user.role)
    } else {
      setUserRole('user')
    }
  })

  useEffect(() => {
    axios
      .get(
        `https://coffeeshop-be.adaptable.app/api/v1/product?filter=${filter}`
      )
      .then((result) => {
        setMenu({
          ...menu,
          data: result.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter, menu]);

  const deleteProduct = async (e) => {
    const product_id = await e.target.attributes.value.value;

    axios
      .delete(
        `https://coffeeshop-be.adaptable.app/api/v1/product/${product_id}`
      )
      .then((res) => res.data.data)
      .catch((err) => console.error(err));
  };

  const [product, setProduct] = useState({
    product_image: null,
  });

  const handleImage = (e) => {
    let file = e.target.files[0];
    setProduct({
      ...product,
      product_image: file,
    });

    console.log(product);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_image", product.product_image);
    formData.append("product_name", product.product_name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);

    axios({
      url: `https://coffeeshop-be.adaptable.app/api/v1/product`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => res.data.data)
      .catch((err) => console.log(err));
  };
  return (
    <div className="relative">
      <div className="sticky top-0 z-20">
        <Header />
      </div>
      <section className="border-t text-center px-5 md:px-10 lg:flex mt-5">
        <aside className="md:2-[25vw] md:pt-5">
          <h2 className="font-bold text-xl text-secondary">Promo Today</h2>
          <p className="mt-3">
            Coupons will be updated every weeks. Check them out!
          </p>
        </aside>
        <main className="lg:w-[75vw] mt-10 md:mt-0 lg:border-l md:pt-5">
          <div className="hidden lg:block md:w-full">
            <ul className="flex items-center justify-around font-500">
              <li
                onClick={handleCategory}
                className={
                  (active === "Favorite & Promo"
                    ? "font-bold text-center border-b-2 border-secondary text-secondary"
                    : "text-center text-secondary") + " cursor-pointer"
                }
              >
                Favorite & Promo
              </li>
              <li
                onClick={handleCategory}
                className={
                  (active === "Coffee"
                    ? " font-bold text-center text-secondary border-b-2 border-secondary"
                    : "text-center text-secondary") + " cursor-pointer"
                }
              >
                Coffee
              </li>
              <li
                onClick={handleCategory}
                className={
                  (active === "Non Coffee"
                    ? "font-bold text-center text-secondary border-b-2 border-secondary"
                    : "text-center text-secondary") + " cursor-pointer"
                }
              >
                Non Coffee
              </li>
              <li
                onClick={handleCategory}
                className={
                  (active === "Food"
                    ? "font-bold text-center text-secondary border-b-2 border-secondary"
                    : "text-center text-secondary") + " cursor-pointer"
                }
              >
                Food
              </li>
              <li
                onClick={handleCategory}
                className={
                  (active === "Add-on"
                    ? "font-bold text-center text-secondary border-b-2 border-secondary"
                    : "text-center text-secondary") + " cursor-pointer"
                }
              >
                Add-on
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap place-content-center gap-x-2 md:gap-x-10 gap-y-5 my-10 mx-auto px-0 md:px-10 ">
            {menu.data.map((item) => {
              return (
                <div key={item.product_id} className="relative">
                  <div
                    onClick={() => navigate(`/product/${item.product_id}`)}
                    className="w-24 h-40 md:w-36 md:h-[35vh] flex flex-col items-center shadow-lg p-2 relative cursor-pointer active:scale-110 ease-in-out duration-200 rounded-2xl"
                  >
                    <img
                      src={item.product_image}
                      alt="menu"
                      className="h-10 w-10 md:h-24 md:w-24 shadow-2xl rounded-full"
                    />
                    <p className="text-sm md:text-xl font-bold">
                      {item.product_name}
                    </p>
                    <p className="font-bold text-sm md:text-lg text-secondary absolute bottom-3 md:bottom-6">
                      IDR{" "}
                      {new Intl.NumberFormat("ja-JP", {
                        style: "decimal",
                      }).format(item.price)}
                    </p>
                  </div>
                  <div
                    onClick={deleteProduct}
                    value={item.product_id}
                    className={
                      (userRole === "user" ? "hidden" : "block") +
                      " bg-red-600 cursor-pointer w-5 h-5 flex items-center justify-center rounded-full absolute z-10 top-0 right-0"
                    }
                  >
                    <span className="w-[10px] h-[2.5px] mx-auto bg-white rounded-lg my-2 block"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button
              onClick={() => {
                setAddButton(!addButton);
              }}
              className={
                (userRole === "admin" ? "block" : "hidden") +
                " mx-auto px-5 py-2 bg-primary text-white font-bold rounded-md hover:scale-105 hover:bg-secondary active:scale-95 ease-in-out duration-100"
              }
            >
              Add
            </button>
            <form
              className={
                (addButton === true ? "block" : "hidden") +
                " w-72 mt-5 absolute top-32 left-0 right-0 mx-auto bg-white shadow-2xl p-5 rounded-lg z-10"
              }
            >
              <label className="text-secondary font-bold block">
                Product Name :
              </label>
              <input
                onChange={(e) => {
                  setProduct({
                    ...product,
                    product_name: e.target.value,
                  });
                }}
                type="text"
                className="rounded-lg mt-2 bg-pale border-none focus:outline-none focus:border-none"
              />
              <label className="text-secondary font-bold block">Price :</label>
              <input
                onChange={(e) => {
                  setProduct({
                    ...product,
                    price: e.target.value,
                  });
                }}
                type="text"
                className="rounded-lg mt-2 bg-pale border-none focus:outline-none focus:border-none"
              />
              <label className="text-secondary font-bold block">
                Description :
              </label>
              <textarea
                onChange={(e) => {
                  setProduct({
                    ...product,
                    description: e.target.value,
                  });
                }}
                type="textarea"
                className="rounded-lg mt-2 bg-pale border-none focus:outline-none focus:border-none"
              />
              <label className="text-secondary font-bold block">
                Category :
              </label>
              <input
                onChange={(e) => {
                  setProduct({
                    ...product,
                    category: e.target.value,
                  });
                }}
                type="text"
                className="rounded-lg mt-2 bg-pale border-none focus:outline-none focus:border-none"
              />
              <label className="text-secondary font-bold block">
                Product Image :
              </label>
              <input
                onChange={handleImage}
                type="file"
                name="product_image"
                className="mt-2 bg-pale border-none w-40 focus:outline-none focus:border-none"
              />
              <div className="flex items-center gap-2 justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault()

                    setAddButton(false)
                  }}
                  className="px-5 mt-5 py-2 bg-white text-red-600 font-bold rounded-md hover:scale-105 active:scale-95 ease-in-out duration-100"
                >
                  cancel
                </button>
                <button
                  onClick={addProduct}
                  className="px-5 mt-5 py-2 bg-primary text-white font-bold rounded-md hover:scale-105 hover:bg-secondary active:scale-95 ease-in-out duration-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <p className="text-secondary text-start px-10">
            *the price has been cutted by discount appears
          </p>
        </main>
      </section>
      <div className="mt-10 pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Product;
