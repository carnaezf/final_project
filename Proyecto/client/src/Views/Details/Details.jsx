import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../Redux/actions";
import { Carousel } from "antd";
import NavBar from "../../Components/NavBar/NavBar";
// import { useHistory } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { ShoppingBagContext } from "../../Contexts/ShoppingBagContext";
import Comments from "../../Components/Comments/Comments"
import { SelectedSizeContext } from "../../Contexts/SelectedSizeContext";
//cc
const contentStyle = {
  // height: '160px',
  color: "#fff",
  // lineHeight: '160px',
  // textAlign: 'center',
  // background: '#364d79',
};

export default function Details( props ) {
  const {
    match: {params: { id } }, name, images, sellingPrice, average_rating, category, description, size } = props;



  const [QuantityEnabled, SetQuantityEnabled] = useState(false);
  const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext);
  const [selectedSize, setSelectedSize] = useContext(SelectedSizeContext);


  console.log('Estado shoppingBag desde Details', shoppingBag);
  console.log('Estado selectedSize desde Details', selectedSize);




  const dispatch = useDispatch();
  const defaultImage =
    "https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200";
  // const history = useHistory()

  const [render, setRender] = useState(false);

  useEffect(() => {
    dispatch(getProductsDetail(id));
  }, [dispatch, render]);

  const myProduct = useSelector((state) => state.productsDetail);
  //console.log(myProduct)

  // const handleGoBack = () => {
  //     history.goBack();
  // };

  /**********Modo nocturno y claro */
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTHemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  /**********Modo nocturno y claro */

  /**********Metodos ShoppingBags */
  const addToCart = () => {
    setShoppingBag((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, 
          { 
						id,
						title: myProduct.name,
						quantity: 1,
						unit_price: myProduct.sellingPrice,
						description: "description ",
						picture_url: myProduct.images[0],
						currency_id: "ARS",
            size: selectedSize,
          }];
      }
    });
  };

  // useEffect(() => {
  //   setRender(true);
  // }, [render]);

  const removeItem = (id) => {
    setShoppingBag((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return shoppingBag.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);
  const handleSizeClick = (e) => {
    setSelectedSize(e.target.value);
  };
  /****************************Metodos ShoppingBag */

  return (
    <div className="bg-slate-200 dark:bg-zinc-800">
      <div class="fixed top-0 z-50 w-full">
        <NavBar />
        <button className="absolute bottom-[25px] left-[8rem] w-36 ml-4 mb-2">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTHemeSwitch} />
            <svg
              className="swap-on fill-current w-6 h-6 fill-purple-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-6 h-6 fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col mx-8 ">
        <h1 className="font-roboto text-3xl font-light mt-[1rem] mb-6 dark:text-slate-300">
          20% discount on purchases of $100 or more | 25% discount on purchases
          of $150 or more
        </h1>
        {/* <a className="text-xs mb-6 underline font-bold cursor-pointer">REGISTRATE AQUI</a> */}
      </div>
      <div className=" flex flex-row mx-8">
        <div className=" w-2/3">
          {myProduct && myProduct.images && myProduct.images.length > 0 ? (
            <div className="flex w-auto space-x-4">
              <div className="w-2/3 shadow-md">
              <img
                className="mb-[1rem] "
                src={myProduct.images[0]}
                alt="Imagen no disponible"
                onError={(e) => {
                  e.target.src =
                    "https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200";
                }}
                
              />
              <img
                src={myProduct.images[1]}
                alt="Imagen no disponible"
                onError={(e) => {
                  e.target.src =
                    "https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200";
                }}
              />
            </div>
              <div className="w-2/3 shadow-md">
              <img
                className="mb-[1rem]"
                src={myProduct.images[2]}
                alt="Imagen no disponible"
                onError={(e) => {
                  e.target.src =
                    "https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200";
                }}
              />
              <img
                src={myProduct.images[3]}
                alt="Imagen no disponible"
                onError={(e) => {
                  e.target.src =
                    "https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200";
                }}
              />
            </div>
            </div>
          ) : (
            <img src={defaultImage} alt="Imagen no disponible" />
          )}

          {/* <Carousel
            autoplay
            className="mx-auto flex flex-row content-center mt-4 space-x-4 max-w-[40rem]"
          >
            {myProduct &&
              myProduct.images &&
              myProduct.images.slice(2, 6).map((image, index) => (
                <div key={index} className="content-center">
                  <h3 className="content-center" style={contentStyle}>
                    <img
                      className="w-full"
                      src={image}
                      alt="Imagen no disponible"
                      onError={(e) => {
                        e.target.src =
                          "https://thebrandinquirer.files.wordpress.com/2022/04/cover-adidas-new-logo-removes-name-before-after.png?w=1200";
                      }}
                    />
                  </h3>
                </div>
              ))}
          </Carousel> */}
        </div>

        {/* <div className=" fixed  mt-[-1rem] right-[5rem] w-2/5"> */}
          <div className=" mt-[-1rem] right-[0rem] w-1/2">
          <div className=" ">
          {myProduct ? (
            <div class="ml-8 dark:text-slate-300">
              <h2 className="font-roboto text-4xl font-bold text-left">
                {myProduct.name}
              </h2>
              <h3 className="font-roboto text-xl font-light text-left">
                {myProduct.description}
              </h3>
              {/* <h4 className="font-roboto font-thin text-base text-left border px-4 w-24 rounded-full my-2 text-sm ">
                {myProduct.category}
              </h4> */}
              <h4 className="font-roboto text-4xl font-bold text-left">
                ${myProduct.sellingPrice}
              </h4>
              <h4 className="font-roboto text-xl text-left">
                {myProduct.average_rating}
              </h4>
            </div>
          ) : (
            <p>Loading ...</p>
          )}
          </div>
          <div class="mx-8 dark:text-slate-300">
            <h1 className="font-roboto text-3xl font-normal text-left">
              Free shipping and returns
            </h1>
            <p className="font-roboto text-l font-light text-left">
              Standard free shipping and free returns for 60 days for registered
              users. More information. Exclusions apply to the returns policy.
            </p>
            {/* <Link to="/formLogin">
              <div className="text-xs mb-6 underline font-bold cursor-pointer text-purple-800 dark:text-purple-400">
                Sign up here!
              </div>
            </Link> */}
          </div>


            <div className=" font-roboto text-3xl font-normal flex flex-col items-center dark:text-slate-300 mt-6">
              <h3>Size:</h3>
              <select className="text-xl text-slate-200 select rounded select-sm w-[5rem] max-w-xs bg-purple-800" value={selectedSize} onChange={handleSizeClick}>
                      <option selected className="darl:text-slate200">Size</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
              </select>
                    {/* <button onClick={addToCart}>Agregar al carrito</button> */}
            </div>

            <br/>

            <div className=" font-roboto text-3xl font-normal flex flex-col items-center dark:text-slate-300 ">
              <h3 >Quantity:</h3>
            </div>



            {selectedSize !== '' && (
        <div className="flex justify-around mt-6 ml-8 mr-8">
          {quantityPerItem === 0 ? (
            <button
              className="transition  duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
              hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px-10 border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold"
              onClick={() => addToCart()}>
                Add to Cart
              </button>
          ) : (

            <button 
              class="transition  duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
                hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px-10 border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold"
              onClick={() => removeItem(id)}>
                Restar Item
            </button>
          )}
          {quantityPerItem > 0 && <div className="font-roboto dark:text-slate-300 text-xl border rounded px-2 border-slate-600">{quantityPerItem}</div>}
          {quantityPerItem > 0 && (
            <button 
              class="transition  duration-150  font-roboto font-thin dark:text-slate-300 hover:bg-slate-700
                hover:text-slate-200 dark:bg-transparent dark:hover:bg-white  dark:hover:text-black py-2 px-10 border border-slate-700 dark:border-slate-200 rounded hover:border-transparent rounded hover:font-bold"
                onClick={() => addToCart()}>
                  Sumar Item 
            </button>
            )}


            
          </div>
  )}
          {/* <button onClick={handleGoBack}>Volver</button> */}
      <div className="flex flex-col w-full">
        {/* <label className="mr-auto  font-roboto text-3xl font-normal flex flex-col items-center dark:text-slate-300">
          Comments
        </label> */}
        
        <Comments product={myProduct} setRender={setRender} render={render} />
        
      </div>
        </div>
      </div>
      <div className="mt-[20rem]">
        <Footer />
      </div>
    </div>
  );
}

// Boton antiguo:

  /* <button
                    onClick={() => console.log('Añadir al carrito')}
                    className="btn-disabled transition duration-150  font-roboto font-bold text-black bg-white hover:bg-black  hover:text-white py-2 px-14 border border-slate-700 rounded hover:border-white rounded hover:font-bold"
                    >
                AÑADIR AL CARRITO
                </button> */
