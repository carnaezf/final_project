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


  /**********Metodos ShoppingBags */
  const addToCart = () => {
    setShoppingBag(( currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound ) {
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
    <div className="bg-slate-200 dark:bg-zinc-800 ">
      <div class="fixed top-0 z-50 w-full">
        <NavBar />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-row md:flex md:flex-col mx-8 ">
        <h1 className="text-xl md:block md:font-roboto md:text-3xl font-light mt-[1rem] mb-6 dark:text-slate-300">
          20% discount on purchases of $1000 or more | 25% discount on purchases
          of $2500 or more
        </h1>
        {/* <a className="text-xs mb-6 underline font-bold cursor-pointer">REGISTRATE AQUI</a> */}
      </div>
      <div className=" flex flex-col  md:flex md:flex-row mx-8">
        <div className=" w-full md:w-2/3">
          {myProduct && myProduct.images && myProduct.images.length > 0 ? (
            <div className=" hidden md:block md:flex w-auto space-x-4">
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
          <div className="md:hidden">
          <Carousel
            autoplay
            className="mx-auto flex flex-row content-center mt-4 "
          >
            {myProduct &&
              myProduct.images &&
              myProduct.images.slice(2, 6).map((image, index) => (
                <div key={index} className="content-center">
                  <h3 className="mx-auto" style={contentStyle}>
                    <img
                      className="w-[50rem]"
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
          </Carousel>
          </div>
        </div>

        {/* <div className=" fixed  mt-[-1rem] right-[5rem] w-2/5"> */}
          <div className=" mt-4 ml-[-2rem] md:ml-[0.2rem] md:mt-[-1rem] md:right-[0rem] md:w-1/2">
          <div className=" ">
          {myProduct ? (
            <div class="ml-8 dark:text-slate-300">
              <h2 className="font-roboto text-xl md:text-4xl font-bold text-left">
                {myProduct.name}
              </h2>
              <h3 className="font-roboto text-sm mt-2 mb-2 md:text-xl font-light text-left">
                {myProduct.description}
              </h3>
              {/* <h4 className="font-roboto font-thin text-base text-left border px-4 w-24 rounded-full my-2 text-sm ">
                {myProduct.category}
              </h4> */}
              <hr/>
              <h4 className="font-roboto text-xl mt-2 md:text-4xl font-bold text-left">
                ${myProduct.sellingPrice}
              </h4>
              <h4 className="font-roboto mb-2 text-sm md:text-xl text-left">
                {myProduct.average_rating}
              </h4>
              <hr/>
            </div>
          ) : (
            <p>Loading ...</p>
          )}
          </div>
          <div class="mx-8 dark:text-slate-300">
            <h1 className="font-roboto text-xl mt-2 md:text-3xl font-normal text-left">
              Free shipping and returns
            </h1>
            <p className="font-roboto text-sm md:text-l font-light text-left mb-2">
              Standard free shipping and free returns for 60 days for registered
              users. More information. Exclusions apply to the returns policy.
            </p>
            <hr/>
            {/* <Link to="/formLogin">
              <div className="text-xs mb-6 underline font-bold cursor-pointer text-purple-800 dark:text-purple-400">
                Sign up here!
              </div>
            </Link> */}
          </div>


            <div className=" flex ml-8 font-roboto text-xl md:text-3xl font-normal md:flex md:flex-col items-center dark:text-slate-300 mt-6">
              <h3 className="md:ml-[-5.2rem]">Size:</h3>
              <select className="ml-2 md:ml-[-5rem] text-xl text-slate-200 select rounded select-sm w-[5rem] max-w-xs bg-slate-700" value={selectedSize} onChange={handleSizeClick}>
                      <option selected className="darl:text-slate200">Size</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
              </select>
                    {/* <button onClick={addToCart}>Agregar al carrito</button> */}
            </div>

            <br/>

            <div className=" font-roboto text-xl md:text-3xl font-normal flex flex-col items-center dark:text-slate-300 ">
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
